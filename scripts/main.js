// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// // // Add your javascript here
// // let radioButton=document.querySelectorAll("input[type='radio']")
// // // radioButton.forEach(button=>{button.addEventListener('change',change(button))})
// // radioButton.forEach(button=>{
// //   if(button.checked===true){
// //     console.log('ticked')
// //   }
// })

    //  const change=()=>{
    //    console.log('running')
    //    if(radioButton3.checked===true){
    //      console.log(radioButton3.checked.value)
    //     //  if(radioButton2.checked===true  ){
    //       radioButton2.checked===false
    //     // }
    //    }

    //  }
    //  radioButton3.addEventListener("change",change)
    let radioBtns=document.querySelectorAll("input[name='form-radio']")
    let hourlyRate=document.querySelector(".hourly-rate")
    let comments=document.querySelector(".comments")
    let questions=document.querySelector(".questions");
    let postalCode=document.querySelector(".postal-code")
    let email=document.querySelector("#email")
    let submit=document.querySelector("#submit")
    let findSelected=()=>{
      let selector=document.querySelector("input[name='form-radio']:checked").value==="Hiring"
      let selector1=document.querySelector("input[name='form-radio']:checked").value==="Comment"
      let selector2=document.querySelector("input[name='form-radio']:checked").value==="Question"
      if(selector){
        hourlyRate.style.display='block'
        comments.style.display='none'
        questions.style.display='none'
        
      }
      if(selector1){
        comments.style.display='block'
        hourlyRate.style.display='none'
        questions.style.display='none'
       
      }
      if(selector2){
        questions.style.display='block'
        hourlyRate.style.display='none'
        comments.style.display='none'
        
      }
    }
    radioBtns.forEach(radioBtn=>{
      radioBtn.addEventListener("change",findSelected)
    })
    //check for extra spaces
    let Validate=(e)=>{
     e.preventDefault()
     let regex = /[ -]+/g;
     postalCode.value.replace(regex,"")
     console.log(postalCode.value.replace(regex,""))
     
      let regex1 = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
      if(regex1.test(email.value)){
        alert("Congrats! This is a valid Email email");
        console.log(email.value)
        
      }
      else{
        alert("This is not a valid email address");
      
      }
    
    }
    submit.addEventListener('click',Validate)