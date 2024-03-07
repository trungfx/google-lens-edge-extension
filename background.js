// Create context menu item
chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "openWithGoogleLens",
    title: "Search image with Google Lens",
    contexts: ["image"],
  });
});

// Function to check if the URL is an image URL
function isValidImageUrl(url) {
  return /\.(jpg|jpeg|png|gif|bmp|webp)(\?.*)?$/i.test(url);
}

// onClicked
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "openWithGoogleLens" && info.srcUrl) {
    // Check if the URL is a valid image URL
    if (isValidImageUrl(info.srcUrl)) {
      // URL
      const googleLensURL =
        "https://lens.google.com/uploadbyurl?url=" +
        encodeURIComponent(info.srcUrl);
      // Open new tab
      chrome.tabs.create({ url: googleLensURL });
    } else {
      // Invalid image URL
    }
  }
});
