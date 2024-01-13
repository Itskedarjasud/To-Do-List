const inputText = document.querySelector("#input-text");
const listContainer = document.querySelector("#list-container");
let icon = document.querySelector("#icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src="images/sun.png";
    }
    else{
        icon.src="images/moon.png"
    }
}

function addTask(){
    if(inputText.value === ''){
        alert("Must write somthing, then add");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
   inputText.value='';
   saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
        
    }
}, false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();


window.addEventListener('resize', function() {
    // Adapt layout if needed
  });
  
