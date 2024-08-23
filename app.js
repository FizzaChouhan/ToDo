var list= document.getElementById("some")
function addition() {
 
   var data = document.getElementById("userInput")
   var li=document.createElement("li");
   li.innerHTML=data.value
  list.appendChild(li)
 
  li.setAttribute("class", "color");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("onClick","line(this)")
  li.appendChild(document.createTextNode(" "));

  
  li.appendChild(checkbox);
  
 
  data.value=""
    
}
function line(checkbox){
  var li = checkbox.parentElement; 
 if(checkbox.checked){
  li.style.textDecoration="line-through";
 }else{
   li.style.textDecoration="none";
 }
}
function deleted(){
  list.innerHTML=" "
}