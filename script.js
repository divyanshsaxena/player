var player = document.getElementById("passage-audio");
var speed = 1;

function test()
        {
          var userInput = document.getElementById("userInput").value;
          speed = userInput;
          player.playbackRate = speed;
          return speed;
        }
var mydata = JSON.parse(data1);
 var l = mydata.length;
  if(mydata.length%3==1||mydata.length%3==2)
  {
    if(mydata.length%3==1)
    {
      mydata[mydata.length]=0;
      mydata[mydata.length+1]=0;
      l = l + 2;
    }
    else
    {
      mydata[mydata.length]=0;
      l = l + 1;
    }
  }
var i=0;
var words = [];
words.length = l;

for(i=0; i<l-1;i++)
{
 words[i] = mydata[i].Word;
}

var ids = [];
ids.length = l;

m = l/3;

var sub = [];
sub.length = m;
i=0;
var newElement= [];
newElement.length = m;

var child= [];
child.length = l;

var e = 0;

var ids = [];
ids.length = l;

var parent = document.getElementById("content");

for(i=0;i<m;i++)
{
  newElement[i] = document.createElement("P");
  newElement[i].id = "subtitle"+i;
  sub[i] = newElement[i].id;
  parent.appendChild(newElement[i]);
  for(e=0;e<3;e++)
  {
  n=[(i+1)*3]-(3-e);
  child[n] = document.createElement("SPAN");
  child[n].id = "highlight"+n;
  ids[n] = "highlight"+n;
  child[n].innerHTML = words[n]+" ";

  newElement[i].appendChild(child[n]);
  }

  newElement[i].hidden = true;
}


var x = 0;

var k = (l-3)/3;

player.addEventListener("play", function () {

var i;

setTimeout(function(x){return function() { sync();};}(),(70));


});

function sync(){
for(i=0;i<=k;i++)
  {
    setTimeout(function(x){return function() { newElement[x].hidden = false;};}(i),(mydata[i*3].Begin*1000)/speed);
    setTimeout(function(x){return function() { child[x*3].style.backgroundColor = "#FFFF00";};}(i),(mydata[i*3].Begin*1000)/speed);
    setTimeout(function(x){return function() { child[x*3].style.backgroundColor = "#FFFFFF";};}(i),(mydata[i*3].End*1000)/speed);
    setTimeout(function(x){return function() { child[x*3+1].style.backgroundColor = "#FFFF00";};}(i),(mydata[i*3+1].Begin*1000)/speed);
    setTimeout(function(x){return function() { child[x*3+1].style.backgroundColor = "#FFFFFF";};}(i),(mydata[i*3+1].End*1000)/speed);
    setTimeout(function(x){return function() { child[x*3+2].style.backgroundColor = "#FFFF00";};}(i),(mydata[i*3+2].Begin*1000)/speed);
    setTimeout(function(x){return function() { child[x*3+2].style.backgroundColor = "#FFFFFF";};}(i),(mydata[i*3+2].End*1000)/speed);
    setTimeout(function(x){return function() { newElement[x].hidden = true;};}(i),(mydata[i*3+2].End*1000)/speed);
  }

}


