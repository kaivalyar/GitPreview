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


// React when a browser action's icon is clicked.
chrome.pageAction.onClicked.addListener(function(tab) {
  //var viewTabUrl = chrome.extension.getURL('image.html');
  //document.getElementById("display").innerHTML = "HELLOWORLD!";
  //chrome.tabs.create({url: "http://www.github.com"});
  var tabUrl = "unknown error"
  chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
//      alert('hello world');

     // since only one tab should be active and in the current window at once
     // the return variable should only have one entry
     var activeTab = arrayOfTabs[0];
     var activeTabId = activeTab.id; // or do whatever you need
     tabUrl = activeTab.url;

  });
  
  chrome.tabs.getCurrent(function (tab) {
    //Your code below...
    //var tabUrl = encodeURIComponent(tab.url);
    //var tabTitle = encodeURIComponent(tab.title);
    
    var myNewUrl = "kaivalyar.github.io/htmlpreview"
    if (tabUrl.indexOf('kaivalyar.github.io/htmlpreview/?') !== -1) { // ie if url contains 'kaivalyar.github.io/htmlpreview/?'
        var myNewUrl = tabUrl.substring(tabUrl.indexOf('?')+1)
    } else {
        var myNewUrl = "http://kaivalyar.github.io/htmlpreview/?" + tabUrl;
    }
  
    //Update the url here.
    chrome.tabs.update({url: myNewUrl});
  });
  //alert('goodbye');
});
