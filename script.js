// call dom elements
const bodyEle = document.querySelector('body');
const sectionDiv = document.createElement('div');
const partnerSection = document.querySelector('.partnersection');
bodyEle.insertBefore(sectionDiv, partnerSection);

// an object of dignitries and their description
const participations = [
  {
    img: './images/drtour.jpg',
    name: 'Dr. Yatoo',
    desig: 'Director, JK Tourism',
    desc: 'The Director tourism is felicitated as guest of honour by local civil administration and other deptts.',
  },

  {
    img: './images/drfor.jpg',
    name: 'Mr. Jai Raj',
    desig: 'Chief Conservator, Jk Forests',
    desc: 'The CCF is honoured for his presennce by local adminstration during the first day of the event',
  },

  {
    img: './images/drwater.jfif',
    name: 'Mr. Irshad',
    desig: 'Director, PHE',
    desc: 'Director concern ensures and directs for safe and clean drinking water availablity during festival days',
  },
  {
    img: './images/bridef.jfif',
    name: 'Mr. Drevender Pratap',
    desig: 'Brigadior, Local Brigade',
    desc: 'The officer concern directs his sub ordinates for safety and security and maintaining law and order on event days',
  },

  {
    img: './images/drfish.jfif',
    name: 'Mr. Farooq',
    desig: 'Director, Jk Fishries',
    desc: 'The diecror concern get installed takshows during event days to make people aware of brown trout breed in Gurez valley',
  },

  {
    img: './images/drfor.jpg',
    name: 'Mr. Jai Raj',
    desig: 'Chief Conservator, Jk Forests',
    desc: 'The CCF is honoured for his presennce by local adminstration during the first day of the event',
  },
];

sectionDiv.innerHTML = `<h3 class="committee">COMMITTEE</h3>
                        <hr class='hr'>`;
// variable declaration
for (let i = 0; i < participations.length; i += 1) {
  if (i < 2) {
    sectionDiv.innerHTML += `<div class = 'partsection'>
            
    <div class="digimg"><img src="${participations[i].img}"></div>
    <div class="digdesc">
    <h3>${participations[i].name}</h3>
    <p class="desig">${participations[i].desig}</p>
    <p>${participations[i].desc}</p>
    </div>`;
  } 
}

//create more button and attach eventlistener to it
const eleP = document.createElement('P');
eleP.innerHTML = 'MORE  <i class="fa-sharp fa-solid fa-angle-down"></i>';
sectionDiv.appendChild(eleP);
eleP.style.border = '4px solid #f1f2f1';
eleP.style.height = '3em';
eleP.style.fontSize = '1.5rem';
eleP.style.margin = '0 1rem 1rem 1rem';
eleP.style.textAlign = 'center';
eleP.style.padding = '0.5rem';
eleP.style.cursor = 'pointer';
eleP.addEventListener('click', () => {
  eleP.style.display = 'none';
  for (let j = 2; j < participations.length; j += 1) {
    sectionDiv.innerHTML += `<div class = 'partsection'>
<div class="digimg"><img src="${participations[j].img}"></div>
<div class="digdesc">
<h3>${participations[j].name}</h3>
<p class="desig">${participations[j].desig}</p>
<p>${participations[j].desc}</p>
</div>`;
  }
});