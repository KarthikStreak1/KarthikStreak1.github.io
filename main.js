const rocket = document.querySelector('#rocket')
const sky = document.querySelector('#sky')
const ex = document.querySelector('#exhaust')
var bottom = 0
var last_y = 0
var wheel;

window.addEventListener('wheel', function(e){
  wheel = e.deltaY
})

document.addEventListener('DOMContentLoaded', function () {
  // Get the resume button
  const resumeButton = document.getElementById('resume-button');

  // Add a click event listener to the button
  resumeButton.addEventListener('click', function () {
    // Replace 'YOUR_GOOGLE_DRIVE_RESUME_LINK' with the actual link to your Google Drive resume
    const googleDriveResumeLink = 'https://drive.google.com/file/d/1wbwNYKyhM-5S5k9IfA64aPDtnSGx4Edg/view?usp=sharing';

    // Open the resume link in a new tab
    window.open(googleDriveResumeLink, '_blank');
  });
});

window.addEventListener('scroll', function(e){
  var h = window.innerHeight
  var y = document.documentElement.scrollTop
  var doc = document.body.offsetHeight - 250
  var perc = y / (doc - h)
  // console.log(perc)

  if(perc < 1){
    sky.style.bottom = -1*(perc)*100 + '%'    
  }  

  if(perc > 0) {
    rocket.classList.add('shake_rocket')
    ex.classList.add('exhaust')
  } else {
    rocket.classList.remove('shake_rocket')
    ex.classList.remove('exhaust')
  }
  
  if(perc > .37) {
    ex.classList.remove('exhaust')
  }

  if(perc > .25) {
    bottom = (perc - .25)*133
  }
  
  if(perc > 0) {
    bottom = (perc - .25)*133
    if(perc - .25 < 0) {
      bottom = 0
    }
  }
  rocket.style.bottom = bottom + '%'

  last_y = y
})