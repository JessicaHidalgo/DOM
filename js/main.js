//Number of links

var links=document.getElementsByTagName("a");
var list=document.createElement("li");
var long=links.length;
function addtolist (){
    var content=document.createTextNode(long);
    list.appendChild(content);
    document.getElementById("list").appendChild(list);
}
addtolist();

//Where dos the last links sends to 
var last=document.createElement("li");
Last=() => {
    var lasts=document.createTextNode(links[7]);
    last.appendChild(lasts);
    document.getElementById("list").appendChild(last);
}
Last();

//Where does the lik before the last sends to

var blast=document.createElement("li");
beforeLast=()=>{
    var beforelasts=document.createTextNode(links[6]);
    blast.appendChild(beforelasts);
    document.getElementById("list").appendChild(blast);
}
beforeLast();
//Number of links to send to http://wemanconnect.com
 var all=document.createElement("li");
sendtow=()=>{
    var selectall = document.querySelectorAll("a[href='https://wemanconnect.com']").length;
    debugger
    var qselec=document.createTextNode(selectall);
    all.appendChild(qselec);
    document.getElementById("list").appendChild(all);
}
sendtow();

//Number of links in the third paragraph
var para=document.createElement("li");
third=()=>{
    var getparagraphs= document.getElementsByName("p");
}