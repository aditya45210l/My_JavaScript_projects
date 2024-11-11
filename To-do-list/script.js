const taskValue = document.getElementById("inputTask");
const taskContant = document.getElementById("output-contaner");
const addTaskBtn = document.getElementById("button");
let checkBoxId = 0;
let hidden = true;

function createTaskEliment(){
    const div = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    const br = document.createElement("br");
    // I just add checkbox and there id to track how much task has beed created and in the end i append the eliment.
    input.type = "checkbox";
    input.id = checkBoxId;
    div.appendChild(input);
    // From here i start working on label.
    label.setAttribute("for", checkBoxId);
    label.innerText = " " + taskValue.value;
    div.appendChild(label);

    div.appendChild(br);
    console.log(div);
    if(hidden){
        hidden = false;
        taskContant.classList.remove("displayHide");
        taskContant.appendChild(div);
    }else{
        taskContant.classList.remove("displayHide");
        taskContant.appendChild(div);
    }

}

addTaskBtn.addEventListener("click",() => {
    if(taskValue.value == ""){
         alert("Please write first!");
    }else{
        createTaskEliment();
    }
});