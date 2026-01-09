// Load i18n messages
document.addEventListener('DOMContentLoaded', () => {
  try {
    // Replace all __MSG_*__ placeholders
    document.querySelectorAll('[class], [aria-label], title').forEach(element => {
      // Replace in text content
      if (element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) {
        const text = element.textContent;
        if (text.startsWith('__MSG_') && text.endsWith('__')) {
          const key = text.slice(6, -2);
          element.textContent = chrome.i18n.getMessage(key) || text;
        }
      }

      // Replace in aria-label
      if (element.hasAttribute('aria-label')) {
        const ariaLabel = element.getAttribute('aria-label');
        if (ariaLabel.startsWith('__MSG_') && ariaLabel.endsWith('__')) {
          const key = ariaLabel.slice(6, -2);
          element.setAttribute('aria-label', chrome.i18n.getMessage(key) || ariaLabel);
        }
      }
    });

    // Update document title
    document.title = chrome.i18n.getMessage('about_title') || 'About';
  } catch (error) {
    console.error('Error loading i18n messages:', error);
  }
});

// popup behavior: close on Esc, close after clicking links to ensure popup closes
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') window.close();
});

// close popup after clicking a link (open in new tab)
let closeTimeout;
document.querySelectorAll('a[target="_blank"]').forEach(a => {
  a.addEventListener('click', () => {
    clearTimeout(closeTimeout);
    closeTimeout = setTimeout(() => window.close(), 150);
  });
});

document.getElementById('close')?.addEventListener('click', () => window.close());