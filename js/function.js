let openNav = () => {
    let openEl = document.getElementById("right-side");
    openEl.style.right = "0px";
}

let openRight = document.getElementById("open");
openRight.addEventListener("click", openNav);

let closeNav = () => {
    let openEl = document.getElementById("right-side");
    openEl.style.right = "-350px"; 
}

let closeRight = document.getElementById("close");
closeRight.addEventListener("click", closeNav);

let changeMode = () => {
    let changeBody = document.getElementById("body");
    changeBody.classList.toggle("change-body");
    let changeColor = document.getElementById("home-txt");
    changeColor.classList.toggle("change-text-color");
    let changeColor1 = document.getElementById("sub-footer-txt");
    changeColor1.classList.toggle("change-text-color");
}

let leftEl = document.getElementById("left-side");
leftEl.addEventListener("click", changeMode);

let popUp = () => {
    let displayPop = document.getElementById("form-container");
    displayPop.style.display = "block";
}

let popEl = document.getElementById("emailContainer");
popEl.addEventListener("click", popUp);


let closePopUP = () => {
    let displayPop = document.getElementById("form-container");
    displayPop.style.display = "none";
}

let closePopEl = document.getElementById("closeForm");
closePopEl.addEventListener("click", closePopUP);

/*
function sendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email : document.getElementById("email").value,
        number : document.getElementById("number").value,
        language : document.getElementById("language").value,
        address : document.getElementById("address").value,
        age : document.getElementById("age").value,
        birthday : document.getElementById("birthday").value,
        birthplace : document.getElementById("birthplace").value,
        gender : document.getElementById("gender").value,
        citizenship : document.getElementById("citizenship").value,
        height : document.getElementById("height").value,
        weight : document.getElementById("weight").value,
        birthplace : document.getElementById("birthplace").value,
        status : document.getElementById("status").value,
        spouse : document.getElementById("spouse").value,
        guardian : document.getElementById("guardian").value,
        guardianNumber : document.getElementById("guardianNumber").value,
        guardianAddress : document.getElementById("guardianAddress").value,
        school : document.getElementById("school").value,
        schoolAddress : document.getElementById("schoolAddress").value,
        yearGraduated : document.getElementById("yearGraduated").value,
        school1 : document.getElementById("school1").value,
        schoolAddress1 : document.getElementById("schoolAddress1").value,
        yearGraduated1 : document.getElementById("yearGraduated1").value,
        school2 : document.getElementById("school2").value,
        schoolAddress2 : document.getElementById("schoolAddress2").value,
        yearGraduated2 : document.getElementById("yearGraduated2").value

    }
    emailjs.send("service_eux0ioj", "template_199hdnm", params).then(function (res){
        alert("Submitted");
    })
}

let sendForm = document.getElementById("form");
sendForm.addEventListener("submit", sendMail);*/


const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_199hdnm';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
      closePopUP();
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

