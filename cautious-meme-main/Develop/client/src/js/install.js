const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default browser prompt from appearing
  event.preventDefault();
  
  // Store the event for later use
  deferredPrompt = event;

  // Show the install button
  butInstall.style.display = 'block';
});

// Click event handler for the install button
butInstall.addEventListener('click', async () => {
  // Hide the install button
  butInstall.style.display = 'none';

  // Show the browser's install prompt
  deferredPrompt.prompt();

  // Wait for the user to respond to the prompt
  const choiceResult = await deferredPrompt.userChoice;

  if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the install prompt');
  } else {
    console.log('User dismissed the install prompt');
  }

  // Clear the deferredPrompt variable
  deferredPrompt = null;
});

// Event handler for when the app is successfully installed
window.addEventListener('appinstalled', (event) => {
  console.log('App installed successfully');
});
