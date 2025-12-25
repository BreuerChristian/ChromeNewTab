// popup behavior: close on Esc, close after clicking links to ensure popup closes
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') window.close();
});

// close popup after clicking a link (open in new tab)
document.querySelectorAll('a[target="_blank"]').forEach(a => {
  a.addEventListener('click', () => setTimeout(() => window.close(), 150));
});

document.getElementById('close')?.addEventListener('click', () => window.close());