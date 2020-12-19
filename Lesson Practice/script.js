var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

secondPar.onclick = function(){
if(event.target.tagName == 'A'){
event.preventDefault();
var hrefEvent = event.target.getAttribute('href');
alert(hrefEvent);
var link;
if(hrefEvent == 'http://google.by'){
    link = 'link 3'
}
else if(hrefEvent == 'https://vk.com'){
    link = 'link 4'
}
localHrefDealer();
/*
var localform = 'path:'+'('+hrefEvent+')';

localStorage.setItem(hrefEvent, localform);

var hrefEvent2 = event.target.setAttribute('href', '#');
alert('Ссылка сохранена!');*/

function localHrefDealer(){
    var localform = 'path:'+'('+hrefEvent+')';
    if(localStorage.getItem(link) == null){
        localStorage.setItem(link, localform);
        var hrefEvent2 = event.target.setAttribute('href', '#');
        alert('Ссылка сохранена!');
    }
    else if(localStorage.getItem(link) != null){
        alert(localStorage.getItem(link));
    }
}
//localstorage


}
}

