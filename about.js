// import google font lato
"@import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap');"

// dislay popupmenu on clicking hamburger icon

let popupMenu = document.querySelector('.menuList');
let participate = document.querySelector('.participate');
let hamburger = document.querySelector('.humbergar')
let heroSection = document.querySelector('#herosection');
function displayPopup(){
  // console.log("click try");
    
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
  popupMenu.focus();
}

// close popup menu
function closePopup(){
  popupMenu.style.display = 'none';
  hamburger.style.position = 'fixed';
}