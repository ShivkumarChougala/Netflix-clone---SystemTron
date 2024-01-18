// const faqs = document.querySelectorAll(".faq")
// const input = document.querySelector('input');
// const input_section = document.querySelector(".hero-buttons")
// const sumbit_btn= document.querySelector("#submitbtn")

// sumbit_btn.onclick = () => {
//     let str = input.value;
//     if(str.match(/[a-zA-Z0-9]{1,40}\@[a-z]{1,8}mail\.com$/)){
//         show_alert("success");
//     }else{
//         show_alert("danger");
//     }
// }

// input.onfocus = () =>{
//     sumbit_btn.disabled = false;
//     document.querySelector('#alert').remove();
// }

// function show_alert(type){
//     const div = document.createElement('div');
//     div.id = "alert";
//     if(type === "success"){
//         div.appendChild(document.createTextNode("Email submitted successfully."));

//     }else{
//         div.appendChild(document.createTextNode("Please provide a valid email."));

//     }
    
//     input_section.after(div);
//     sumbit_btn.disabled = true;

// }
// faqs.forEach(faq => {
//     faq.addEventListener("click",() => {
//         faq.classList.toggle("active")
//     })
    
// });