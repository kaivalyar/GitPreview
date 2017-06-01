// When the extension is installed or upgraded ...
//chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  //chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'g' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostPrefix: 'github.com' },
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  //});
//});


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
    
    
    
    var myNewUrl = "https://kaivalyar.github.io/htmlpreview/?" + tabUrl;
  
    //Update the url here.
    chrome.tabs.update({url: myNewUrl});
  });
  //alert('goodbye');
});
