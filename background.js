chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.update(tab.id, { url: "https://outline.com/" + tab.url });
});
