const front = document.querySelector(".front");
const signIn = document.querySelector(".signIn");
const signUp = document.querySelector(".signUp");
const Register = document.querySelector(".Register");
const inputContent = document.querySelector(".inputContent");
const singUpButton = document.querySelector(".signUpButton");
addEventListener("DOMContentLoaded", () => {
  SignInFront();
  inputControl();
  new createInput("text", "Email").create();
  new createInput("password", "Password").create();
  //animate__animated animate__bounce
});

function SignInFront() {
  singUpButton.addEventListener("click", () => {
    if (singUpButton.innerHTML == "Sign Up") {
      signIn.style.transform = "translateX(100%)";
      SignUpFront();
      setTimeout(() => {
        signIn.querySelector("h2").innerHTML = "Sign Up";
        new createInput("text", "Name").create();
        signIn.querySelector("button").innerHTML = "Sign Up";
        signIn.querySelector("span").style.visibility = "hidden";
      }, 500);
    }
    else {
      SignInBack();
    }
  });
}

function SignUpFront() {
  signUp.style.transform = "translateX(-100%)";
  setTimeout(() => {
    signUp.querySelector("h1").innerHTML = "Create Account";
    signUp.querySelector("p").innerHTML =
      "You are so close to the magical world";
    singUpButton.innerHTML = "Back";
  }, 500);
}

function SignInBack() {
  signIn.style.transform = 'translateX(0%)';
  SignUpBack();
  setTimeout(() => {
    inputContent.removeChild(inputContent.lastChild);
    signIn.querySelector("h2").innerHTML = "Sign In";
    signIn.querySelector("button").innerHTML = "Sign In";
    signIn.querySelector("span").style.visibility = "visible";

  },500)
}
function SignUpBack(){
  signUp.style.transform = 'translateX(0%)';
  setTimeout(() => {
    signUp.querySelector("h1").innerHTML = "Hello Guest";
    signUp.querySelector("p").innerHTML =
      "Create your account easy with less information";
    singUpButton.innerHTML = "Sign Up";
  }, 500);
}


function inputControl(){
  setInterval(()=>{
    const email = signIn.querySelectorAll("input")[0];
    const password = signIn.querySelectorAll("input")[1].value;
    if(email.value.length > 5){
      if(email.value.indexOf("@") == -1){
        email.style.border = "1px solid red";
        console.log("giriyor");
      }
      else {
        email.style.border = "";
      }
    }
  },2000);
}
class createInput {
  constructor(type, placebolder) {
    this.type = type;
    this.placebolder = placebolder;
  }

  create() {
    const input = document.createElement("input");
    input.type = this.type;
    input.placeholder = this.placebolder;
    inputContent.appendChild(input);
  }
}

