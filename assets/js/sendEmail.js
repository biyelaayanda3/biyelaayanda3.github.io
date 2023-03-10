function sendemail(){
    var params ={
        name: document.getElementById("name").value,
        subject: "Contact Us email",
        email:document.getElementById("email").value,
        message: document.getElementById("message").value
    };


const serviceID = "service_oh3c5zz";
const templateId ="template_5ix7nl5";

emailjs.send(serviceID, templateId,{params}).then(res =>{
    document.getElementById("name").value ="";
    document.getElementById("email").value ="";
    document.getElementById("message").value ="";
    console.log(res);
    alert("message sent");
}).catch((error)=>
    console.log(error));
}