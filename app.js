
const dropdowns=document.querySelectorAll(".dropdown select")

for (dropdown of dropdowns){
    for (let code in countryList){
        let newOption=document.createElement("option")
        newOption.innerText=code
        newOption.value=code
        if(dropdown.name==="from" && code==="USD"){
            newOption.selected="selected"
        }
        else if(dropdown.name==="to" && code==="INR"){
            newOption.selected="selected"
        }

        dropdown.append(newOption)
    }
    dropdown.addEventListener("change",(evt)=>{
        updateFlag(evt.target)
    } )
}

const updateFlag=(element)=>{
    let country=element.value
    let countryCode=countryList[country]
    let newFlag=`https://flagsapi.com/${countryCode}/flat/64.png`
    let img=element.parentElement.querySelector("img")
    img.src=newFlag


}
