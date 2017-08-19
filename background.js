var rule = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { hostPrefix: 'github.com', pathSuffix: '.htm' }
    }),
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { hostPrefix: 'github.com', pathSuffix: '.html' }
    }),
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { hostEquals: 'kaivalyar.github.io', pathPrefix: '/htmlpreview'}
    }),
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { hostEquals: 'kaivalyar.github.io', pathPrefix: 'htmlpreview'}
    })
  ],
  actions: [ new chrome.declarativeContent.ShowPageAction() ]
};

chrome.runtime.onInstalled.addListener(function(details) {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([rule]);
  });
});

chrome.pageAction.onClicked.addListener(function(tab) {
  var tabUrl = "unknown error"
  chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
     var activeTab = arrayOfTabs[0];
     tabUrl = activeTab.url;
  });
  chrome.tabs.getCurrent(function (tab) {
    var myNewUrl = "kaivalyar.github.io/htmlpreview"
    if (tabUrl.indexOf('kaivalyar.github.io/htmlpreview/?') !== -1) { // ie if url contains 'kaivalyar.github.io/htmlpreview/?'
        var myNewUrl = tabUrl.substring(tabUrl.indexOf('?')+1)
    } else {
        var myNewUrl = "http://kaivalyar.github.io/htmlpreview/?" + tabUrl;
    }
    chrome.tabs.update({url: myNewUrl});
  });
});

chrome.commands.onCommand.addListener(function(command) {
  var tabUrl = "unknown error"
  chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
     var activeTab = arrayOfTabs[0];
     tabUrl = activeTab.url;
  });
  chrome.tabs.getCurrent(function (tab) {
    var myNewUrl = "kaivalyar.github.io/htmlpreview"
    if (tabUrl.indexOf('kaivalyar.github.io/htmlpreview/?') !== -1) { // ie if url contains 'kaivalyar.github.io/htmlpreview/?'
        var myNewUrl = tabUrl.substring(tabUrl.indexOf('?')+1)
    } else {
        var myNewUrl = "http://kaivalyar.github.io/htmlpreview/?" + tabUrl;
    }
    chrome.tabs.update({url: myNewUrl});
  });
});
