const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// An event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle("hidden", false);
});

// A click event handler on the `butInstall` element
//checks if the window.deferredPrompt variable is set
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle("hidden", true);
});

// A handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
