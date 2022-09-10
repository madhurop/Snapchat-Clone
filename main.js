function showPro(){
  //window.location.href="profile.html"
  var indexpage = document.getElementById("maindiv");
  indexpage.style.display="none";
  var profpage = document.getElementById("prof_div");
  profpage.style.display="block";
  
}

/*function searchPage(){
 /*var maindiv=document.getElementById("maindiv");
  var mainbody=document.getElementById("mob-body");
  mainbody.removeChild(maindiv);
  location.href="chat.html"
}
*/
  
  function decMargin(){
    var box= document.getElementById("box").style.marginTop="350px";
  }
  
function disMsg(){
  var getMsg=document.getElementById("inptxt").value;
  var disMsg=document.getElementById("msguser").innerHTML=getMsg;
}

/*function changeName(){
  var pmb=["Ram","Sham","Virat","Rohit","Dhoni","Hardik","Suryakumar"]
  for(let p=0;p<=10;p++){
   pra=pmb[p] ;
  var change_name=document.querySelectorAll("#msg-data").innerHTML=pra;
  
  console.log(pmb[p]);
  
}
//changeName()
var change_name=document.querySelectorAll("msg-data").innerHTML="jsjsjwksosj";*/


/*let bt = document.querySelectorAll("fct");
Array.from(bt).forEach((sec)=>{
  sec.addEventlistener('click',(e)=>{
    console.log(e.target);
  

    
    //console.log((e.target).innerHTML);
    const namedata=(e.target).innerHTML;
    console.log(namedata);
    window.onload =function(){
      
   const mbshana = document.getElementById("user-name").innerHTML="madhuehabab";
   
    
   }
   location.href="chat.html"; 
  })
  
})*/


let bt=document.querySelectorAll("#fct");
Array.from(bt).forEach((but)=>{
but.addEventListener('click', (e)=>{
  //location.href="chat.html";
var ab =e.target.innerText;
console.log(ab);
/*window.onload=function(){
var mbsg = document.getElementById("usernamada").innerHTML=ab;
  }*/

 })
})
//document.getElementsByClassName("post-bodypost-content").innerHTML="Sahil";

function gotoIndex(){
 location.href="index.html";
}

let darkmode = document.getElementById("tdot").addEventListener('click' , ()=>{
   var change = document.getElementsByTagName("body").style.backgroundColor="black";
 // document.write("mb");
})

function daf(){
  var date = new Date();
  var sec = date.getSeconds();
  
  
  let t = setTimeout(function(){daf()},1000);
  document.write(sec);
}
daf();




