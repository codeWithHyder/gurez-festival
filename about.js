// dislay popupmenu on clicking hamburger icon
const popupMenu = document.querySelector('.menuList');
const participate = document.querySelector('.participate');
const hamburger = document.querySelector('.humbergar');
const heroSection = document.querySelector('#herosection');
function displayPopup() {
  popupMenu.style.display = 'flex';
  popupMenu.style.flexDirection = 'column';
  popupMenu.style.justifyContent = 'flex-Start';
  popupMenu.style.alignItems = 'start';
  popupMenu.style.fontSize = '2em';
  popupMenu.style.fontFamily = '"Lato", sans-serif';
  popupMenu.style.fontWeight = '400';
  popupMenu.style.width = '100%';
  popupMenu.style.height = '30rem';
  popupMenu.style.background = '#f2f2f2';
  popupMenu.style.top = 0;
  popupMenu.style.left = 0;
  popupMenu.style.position = 'absolute';
  participate.style.border = '4px solid #ec5242';
  popupMenu.style.rowGap = '1.5rem';
  hamburger.style.position = 'absolute';
}

// close popup menu
function closePopup() {
  popupMenu.style.display = 'none';
  hamburger.style.position = 'fixed';
}