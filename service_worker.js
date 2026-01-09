chrome.runtime.onInstalled.addListener(details => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    try {
      chrome.runtime.setUninstallURL('https://forms.gle/Q6VrG43sbvBzNA9u5');
    } catch (error) {
      console.error('Error setting uninstall URL:', error);
    }
  }
});