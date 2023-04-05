const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {

    window.deferredPrompt = event;

    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
     return;
    }

    promptEvent.prompt();
    
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

    window.deferredPrompt = null;
});