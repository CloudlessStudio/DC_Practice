function addTask(){
    const taskText = document.getElementById("inputTask").value;
    if(taskText ==''){
        alert("No task was added!");
    }
    else{
        const pendingDiv = document.getElementById("pendingSection");
        const completedDiv = document.getElementById("completedSection")
        const pendingChild = document.createElement("div"); 
        pendingChild.classList.add("taskName");
        const completeCheck = document.createElement("INPUT");
        completeCheck.classList.add("boxStyle");
        const pendingText = document.createElement("p")
        completeCheck.setAttribute("type", "checkbox");
        const removeButton = document.createElement("button");
        removeButton.innerText = "REMOVE";
        pendingText.innerText = taskText;
        pendingChild.append(completeCheck);
        pendingChild.append(pendingText);
        pendingChild.append(removeButton);
        pendingDiv.append(pendingChild);
        document.getElementById("inputTask").value = "";
        removeButton.addEventListener("click", event =>{
            pendingChild.remove();
        })
        completeCheck.addEventListener("change",event =>{
            if(event.target.checked){
                completedDiv.append(pendingChild);
                console.log("CHECKED");
            }
            else{
                pendingDiv.append(pendingChild);
                console.log("UNCHECKED");
            }
        })
        console.log("added stuff");
    }

}