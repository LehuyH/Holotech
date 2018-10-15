

// events are hungry 4 the listenings
document.getElementById('btnwat').addEventListener('click', mini)
document.getElementById('dream').addEventListener('click', dream)
document.getElementById('obliv').addEventListener('click', obliv)
document.getElementById('project').addEventListener('click', project)
document.getElementById('dev').addEventListener('click', dev)
document.getElementById('con').addEventListener('click', con)
//Item Grabbers
var devbtn = document.getElementById('dev')
var conbtn = document.getElementById('con')
var labeltxt = document.getElementById('labeltxt')
//vars
var miniused = 0
//------fucntions

 //minimize subheader on button click
function mini(){
  if(miniused === 0){
    
    miniused = 1
        
      document.getElementById('vid').play();
    var nav = document.getElementById('nav') 
    var sub = document.getElementById('sub')
  nav.classList.remove('hide')
  nav.classList.add('animated')
    
    nav.classList.add('fadeIn')
    
    nav.classList.add('slower')  
    document.getElementById('cont').classList.remove('hide');
    sub.classList.remove('widthful')
    sub.classList.add('subhead')
    document.getElementById('subh1').style.paddingTop = '300px';
    document.getElementById('subh1').style.paddingBottom = '300px';

  setTimeout(function(){
    document.getElementById('subh1').style.paddingTop = '70px';
    document.getElementById('subh1').style.paddingBottom = '70px';
   }, 200);
    AOS.refresh();
}}

function dream(){
  var display = document.getElementById('display')
  display.outerHTML = " <div id='display'class='animated fadeIn subcard ' style=' color:black; text-align:center;display: inline-block;'> Holograms have been deemed a 'technology of the future' by countless books and movies, and until now, we were still lacking in this technology. <br> Someone has yet to spark off this revolution... Right? Introducing Oblivon HoloTech. The first touch-interactive hologram projector.</div> "
}

function obliv(){
  var display = document.getElementById('display')
  display.outerHTML = " <div id='display'class='animated fadeIn subcard' style=' color:black; text-align:center;display: inline-block'>Oblivion has been on the frontline of holographic technology ever since the idea for \"HoloTech\" that was started by 2 people.</div> "
}

function project(){
  var display = document.getElementById('display')
   display.outerHTML = " <div id='display'class='animated fadeIn subcard' style=' color:black;text-align:center;display: inline-block;'>Oblivion HoloTech has countless usages [homes,cars,etc], and will grow the technology of the future.</div> "
}

//Show description of dev and con buttons
function dev(){
  devbtn.style.color = 'white';
  conbtn.style.color = 'black';
  labeltxt.classList.remove('hide');
  labeltxt.classList.remove('fade');
  labeltxt.classList.add('fade');
 labeltxt.innerHTML = '<b>Holotech provides a fresh new platform for development!</b> <br><br> <i>Here are some examples of what is possible on the Holotech Platform</i> <br><br> <b> Holo OS Enviroment + RenderFire Engine</b> <br> <br> The Holo OS enviroment allows developers to create unique 3d and 2d holograms. This may <i>sound</i> complicated but it reality it is very simple if you already know a coding language.<br> We provide and support APIs to built holograms with languages ranging from C#, Python, HTML/CSS/JS (Browser-Based Web Apps), Java. <br> Additionally, we provide rich APIs to access system components like UI and the engine. Not familiar with any of these languages? You can use our simple and efficient drag-and-drop application builder. <br><br> But Wait...<br> You can make awesome games with Holotech!<br> You can create awesome 3d movies with Holotech!<br> You can create mockups and other designs with Holotech!<br> Holotech is a platform with limitless uses, it is up to you to shape it. '
  
}
function con(){
  devbtn.style.color = 'black';
  conbtn.style.color = 'white';
   labeltxt.classList.remove('hide');
    labeltxt.classList.remove('fade');
  labeltxt.classList.add('fade');
   labeltxt.innerHTML = 'Which OS do you use, is it Windows, Mac, maybe Linux? Nevertheless, <br>you will love HoloTech\'s user platform, known as HoloOS. Take <br>every computer available, remove its downsides, and add 3D <br>window support, what you have now, barely scrapes the surface of <br>HoloTech\'s power. In addition, HoloTech provides a scalable and <br>easily adjustable interface, meaning goodbye and farewell to faulty <br>accessibility tools and inaccurate voice recognition, and hello to <br>the HoloTech Adjustable Interfacing System! Want a bigger screen? <br>No pixelated magnifier app, increase your hologram size, with the <br>same resolution as before.'
}