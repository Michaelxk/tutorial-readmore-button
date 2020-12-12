
//SCRIPT ABOUT SECTION (READ MORE BUTTON) //

let i = 0;

let button = document.querySelector('#button').addEventListener('click', function() {

  if(!i) {
    document.getElementById('readMore').style.display = 'block';
    document.getElementById('button').innerHTML = 'Read Less';
    i = 1;
  }
  else {
    document.getElementById('readMore').style.display = 'none';
    document.getElementById('button').innerHTML = 'Read More';
    i = 0;
  }
})

