function addTask(){
    const taskText = document.getElementById("inputTask");
    const textVal = taskText.value;
    const incompleteDiv = document.getElementById("Incomplete");
    const completeDiv = document.getElementById("Complete");
    
    const tempDiv = document.createElement("div");
    tempDiv.classList.add("TASK");
    const checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    const tempText = document.createElement("p");
    const remButton = document.createElement("button");
    remButton.innerText = "Remove";
    tempText.innerText = textVal;
    tempDiv.append(checkbox);
    tempDiv.append(tempText);
    tempDiv.append(remButton);
    incompleteDiv.append(tempDiv);
    remButton.addEventListener("click", event =>{
        tempDiv.remove();
    })
    checkbox.addEventListener("change", event =>{
        if(event.target.checked){
        completeDiv.append(tempDiv);
        }
        else{
        incompleteDiv.append(tempDiv);   
        }
    })


   // <div class = "incomplete">
   //     <div class = "TASK">
   //     <input style= "checkbox"></input>
   //     <p>sagagag</p>
   //     <button>Remove</button>
   // </div>
   // </div>
    






}