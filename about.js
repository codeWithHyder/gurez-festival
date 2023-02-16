// dislay popupmenu on clicking hamburger icon
const popupMenu1 = document.querySelector('.menuList');
const participate1 = document.querySelector('.participate');
const hamburger1 = document.querySelector('.humbergar');
const heroSection1 = document.querySelector('#herosection');
function displayPopup() {
  popupMenu1.style.display = 'flex';
  popupMenu1.style.flexDirection = 'column';
  popupMenu1.style.justifyContent = 'flex-Start';
  popupMenu1.style.alignItems = 'left';
  popupMenu1.style.fontSize = '2em';
  // popupMenu1.style.fontFamily = '"Lato", sans-serif';
  popupMenu1.style.fontWeight = '400';
  popupMenu1.style.width = '100%';
  popupMenu1.style.height = '30rem';
  popupMenu1.style.backgroundColor = '#f2f2f2';
  popupMenu1.style.top = 0;
  popupMenu1.style.left = 0;
  popupMenu1.style.position = 'absolute';
  participate1.style.border = '4px solid #ec5242';
  //popupMenu1.style.rowGap = '1.5rem';
  hamburger1.style.position = 'absolute';
}

// close popup menu
function closePopup() {
  popupMenu1.style.display = 'none';
  hamburger1.style.position = 'fixed';
}