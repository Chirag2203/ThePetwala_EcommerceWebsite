//register and sign in
const registerbtn = document.getElementById('signup');

registerbtn.addEventListener('click', () => {
  window.location.href = "Pages/Register.html";
});

const loginbtn = document.getElementById('login');
loginbtn.addEventListener('click', () => {
    window.location.href = "Pages/Login.html";
    }
);


//check for errors
const tohome = document.getElementById('tohome');
tohome.addEventListener('click', () => {
    window.location.href = "index.html";
    }
);
