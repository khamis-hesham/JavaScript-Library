var header = document.createElement('div');
 header.classList.add('header');
    var navbar = document.createElement('div');
        navbar.classList.add('navbar');
        header.appendChild(navbar);

var ti = document.createElement('h2');
  ti.innerText = ' Khamis Hesham ';
    navbar.appendChild(ti);
    var ul= document.createElement('ul');
    navbar.appendChild(ul);
    var li1=document.createElement('li');
    ul.appendChild(li1);
    var t = document.createTextNode("About Me");
    li1.appendChild(t);
    var li2=document.createElement('li');
    ul.appendChild(li2);
    var v = document.createTextNode("Contact Me");
    li2.appendChild(v);

var slider = document.createElement('div');
 slider.classList.add('slider');
    var intro = document.createElement('div');
    intro.classList.add('intro');
    var po = document.createElement('h2');
    po.innerText = ' Hello \n The Bookshelf ';
    intro.appendChild(po);
    slider.appendChild(intro);
    header.appendChild(slider);

document.body.appendChild(header);


var books = [
  { title: 'operating system.', author: 'Silberschatz.', img: 'image/operating system.jpg'},
  { title: 'principles of information security.', author: 'Michael E. Whitman , Herbert J. Mattord.', img: 'image/principles of information security.jpg'},
  { title: 'wireless cocmmunications.', author: '	Theodore S. Rappaport.', img: 'image/wireless cocmmunications.jpg'},
  { title: 'Antenna Theory.', author: 'Constantine A. Balanis.', img: 'image/Antenna Theory.jpg'},
  { title: 'Discrete-Event System Simulation.', author: 'Jerry Banks, John Carson, Barry L. Nelson.', img: 'image/Discrete-Event System Simulation.jpg'},
  { title: 'Beginning Python.', author: 'Magnus Lie Hetland.', img: 'image/Beginning Python.jpg'},
  { title: '5G Radio Access Networks.', author: 'Hrishikesh Venkataraman , Ramona Trestian.', img: 'image/5G Radio Access Networks.jpg'},
  { title: 'Satellite communications.', author: 'Dennis Roddy.', img: 'image/Satellite communications.jpg'},
  { title: 'Elements Of Information.', author: 'Thomas Cover.', img: 'image/Elements Of Information.jpg'},
  { title: 'Optical Fiber Communications.', author: 'Gerd Keiser.', img: 'image/Optical Fiber Communications.jpg'},
 ];

var gridDiv = document.createElement('div');
gridDiv.classList.add('grid');

books.forEach(function (book) {
  var gridBox = document.createElement('div');
  gridBox.classList.add('grid-box');
    
  const image = document.createElement('img');
  image.src = book.img;
    gridBox.appendChild(image);
  var titleSec = document.createElement('p');
  titleSec.innerText = 'Title: ' + book.title;
    gridBox.appendChild(titleSec);
  var authorSec = document.createElement('p');
  authorSec.innerText = 'Author: ' + book.author;
    gridBox.appendChild(authorSec);
    
    gridDiv.appendChild(gridBox);

});

var addButton = document.createElement('button');
addButton.innerText = "Add Book";
var addbtn = document.createElement('button');
addbtn.innerText = "Add" ;
var formsty = document.createElement('div');

 var xx = document.createElement("lable");
  xx.innerText = 'Title: ' ;
     var x = document.createElement("INPUT");
  x.setAttribute("type", "text");

 var yy = document.createElement("lable");
  yy.innerText = '\n Author: ' ;
     var y = document.createElement("INPUT");
  x.setAttribute("type", "text");

 var zz = document.createElement("lable");
  zz.innerText = '\n Img src: ' ;
     var z = document.createElement("INPUT");
  z.setAttribute("type", "text");

addButton.onclick = function(){ 
 
    addButton.style.display = 'none';
    formsty.style.display = 'block';
    formsty.classList.add('grid-box');
    gridDiv.appendChild(formsty);
    formsty.appendChild(xx);
    formsty.appendChild(x);
    formsty.appendChild(yy);
    formsty.appendChild(y);
    formsty.appendChild(zz);
    formsty.appendChild(z);
   
    formsty.appendChild(addbtn);
  
};

addbtn.onclick = function(){ 
    formsty.style.display = 'none';
    addButton.style.display = 'block';
    var newtitle = x.value,
        newauthor = y.value,
        newimg = z.value;
    var newelement = {
        title: newtitle,
        author:newauthor,
        img: newimg

    }
    
    books.push(newelement);
        
  var gridBoxAdd = document.createElement('div');
  gridBoxAdd.classList.add('grid-box');
  var titleSec = document.createElement('p');
  titleSec.innerText = 'Title: ' + newelement.title;
  var authorSec = document.createElement('p');
  authorSec.innerText = 'Author: ' + newelement.author;
  const image = document.createElement('img');
  image.src = newelement.img;
  
  gridBoxAdd.appendChild(image);
  gridBoxAdd.appendChild(titleSec);
  gridBoxAdd.appendChild(authorSec);
  gridDiv.insertBefore(gridBoxAdd,addButton)
}

gridDiv.appendChild(addButton);
document.body.appendChild(gridDiv);
