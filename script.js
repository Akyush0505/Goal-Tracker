const checkBoxList = document.querySelectorAll(".custom-checkbox")
let inputFieldList=document.querySelectorAll(".goal-input")
const errorLabel= document.querySelector(".error-label")
const progressValue=document.querySelector(".progress-value")
const progressValueText=progressValue.querySelector("span");
const progressResult=progressValue.querySelector("span");
const progressLabel=document.querySelector(".progress-label");
const quote=document.querySelector(".quote");
const allQuotes = [
    "Raise the bar by completing your goals",
    "Well begun is half done!",
    "Just a step away, keep going!",
    "Whoa! You just completed all the goals, time for chill :D"
]






const allGoals=JSON.parse(localStorage.getItem("allGoals"))||{}
const goalsCompleted=Object.values(allGoals).filter((input)=>{
    return  input.completed;
})
progressValue.style.width=String(goalsCompleted.length/inputFieldList.length*100)+"%";
progressValueText.textContent=`${goalsCompleted.length}/${inputFieldList.length} completed`


progressLabel.innerText=allQuotes[goalsCompleted.length];

const inputCompleted =Object.values(allGoals).some((input)=>{
    return  input.name;
})
if(inputCompleted)
{
    quote.innerText="Keep Going, You are making great Progress";
}

     

checkBoxList.forEach((checkbox)=>{
    checkbox.addEventListener("click",(e)=>{ 
        const checked=[...inputFieldList].every((input,i)=>{
            return input.value.trim()
        })

        if(checked){
            checkbox.parentElement.classList.toggle("completed")
            errorLabel.classList.remove("show-error")
            
            const inputId = checkbox.nextElementSibling.id;
            
            allGoals[inputId].completed=!allGoals[inputId].completed;
            localStorage.setItem("allGoals",JSON.stringify(allGoals));
            const goalsCompleted=Object.values(allGoals).filter((input)=>{
                return input.completed;
            })
            progressValue.style.width=String(goalsCompleted.length/inputFieldList.length*100)+"%";
        progressValueText.textContent=`${goalsCompleted.length}/${inputFieldList.length} completed`;
        progressLabel.innerText=allQuotes[goalsCompleted.length]

            

            

            

        }
        else{
            errorLabel.classList.add("show-error")
                
            }
        


    })
})
 
inputFieldList.forEach((input)=>{

    input.value=allGoals[input.id]?.name||"";

    if(allGoals[input.id]&& allGoals[input.id].completed)
    {
        input.parentElement.classList.add("completed")
    } 
    
    input.addEventListener("focus",()=>{
        errorLabel.classList.remove("show-error")
    })

    input.addEventListener("input",(e)=>{
        if(allGoals[input.id]&&allGoals[input.id].completed)
        {
            e.target.value=allGoals[input.id].name
            return
        }
         allGoals[e.target.id]={
            name:e.target.value,
            completed:false
         }
         localStorage.setItem("allGoals",JSON.stringify(allGoals));
         if(allGoals[e.target.id].name)
         {
            if(quote.innerText!="Keep Going, You are making great Progress")
            {
                quote.innerText="Keep Going, You are making great Progress";
            }
         }
        
         
    })
})




