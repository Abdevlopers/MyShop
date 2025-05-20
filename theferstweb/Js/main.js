const menu = document.getElementById('mnbtn');
const headpanel = document.getElementById('headpnl');
const addprodectbtn = document.getElementById('addprodectbtn');
const addprodectpanel = document.getElementById('addprodect');
const accontbtn = document.getElementById('accontbtn');
const accontpnl = document.getElementById('accontpnl');
const signupform = document.getElementById('signupform');


/* -------------------------------*/

const logbtn = document.getElementById('logbtn');
const infopnl = document.getElementById('infopnl');

/* variables */

var userislogin = false

let usernameinput = "newuser"

let defultusername = "no user loging in!"


function showsignupform() {
    if (signupform.style.display === 'none') {
        signupform.style.display = 'block'; 
    }
};

menu.addEventListener('click', () => {
    if (headpanel.style.transform === 'translateY(-1000px)') {
        headpanel.style.transform = 'translateY(0px)';
    } else {
        headpanel.style.transform = 'translateY(-1000px)';
    }
});

addprodectbtn.addEventListener('click', () => {
    if (addprodectpanel.style.display == 'none') {
        addprodectpanel.style.display = 'block';
    } else {
        addprodectpanel.style.display = 'none';
    }
});
accontbtn.addEventListener('click', () => {
    if (accontpnl.style.transform === 'translateX(-310px)') {
        accontpnl.style.transform = 'translateX(0px)';
    } else {
        accontpnl.style.transform = 'translateX(-310px)';
    }
});


function saveName() {
    let name = document.getElementById("nameInput").value;
    localStorage.setItem("username", name);
    localStorage.setItem("userislogin", userislogin)
    alert("تم حفظ الاسم!");
  }


  addEventListener('DOMContentLoaded', () => {
    let signupform = document.getElementById('signupform');
    let values = localStorage.getItem("userisloggedin");
    let name = document.getElementById('name');
    let usercard = document.getElementById('user');
    if (values) {
        document.getElementById("nameinput").textContent = localStorage.getItem("username");
        name.textContent = '@'+localStorage.getItem("username");
        name.href = '#'+localStorage.getItem("username");
        usercard.id = localStorage.getItem("username");
        alert('Hi, ' + localStorage.getItem("username") + ' agen');
        signupform.style.display = 'none';
        logbtn.style.display = 'none';
        infopnl.style.display = 'block';
    }
});

  function Signup() {
    let signupform = document.getElementById('signupform');
    let usernameinput = document.getElementById('usernameinput').value;
    let emailinput = document.getElementById('emailinput').value;
    let passworedinput = document.getElementById('passworedinput').value;
    if (usernameinput || emailinput || passworedinput) {
        userislogin = true;
        signupform.style.display = 'none';
        localStorage.setItem("username", usernameinput);
        localStorage.setItem("email", emailinput);
        localStorage.setItem("passwored", passworedinput);
        localStorage.setItem("userisloggedin", userislogin);
        document.getElementById("nameinput").textContent = localStorage.getItem("username");
    } else {
        userislogin = false;
        alert('NO USER INFORMATION!')
    }
    if (userislogin===true){
        logbtn.style.display = 'none';
        infopnl.style.display = 'block';
    }
  };


  function logout(){
    userislogin = false
    confirm('all user info is removed are you shur you need that');
    localStorage.clear;
  }

  function addprodect(){
    pass;
  }

  function createCard(title, description, price) {
    const card = document.createElement("div");
    card.className = "card";
    /* save card */
    fetch("https://www.google.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          description: description,
          price: price
        })
      });
      
    card.innerHTML = `
        <div class="card-img"><div class="img"></div></div>
        <div class="card-title">${title}</div>
        <div class="card-subtitle">${description}</div>
        <hr class="card-divider">
        <div class="card-footer">
            <div class="card-price"><span>DZD</span> ${price}</div>
            <button class="card-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"/>
                    <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"/>
                    <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"/>
                    <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"/>
                </svg>
            </button>
        </div>
    `;

    return card;
}

// استخدام الدالة لإضافة البطاقة إلى الصفحة
const container = document.getElementById("card-container"); // تأكد من وجود هذا العنصر في HTML



const addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', () => {
    const title = document.getElementById('prodectname').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const cardElement = createCard(title, description, price);
    if (title || description || price) {
        container.appendChild(cardElement);
        signupform.style.display = 'none';
    } else {
        alert('NO PRODECT INFO!')
    }
    
    
});

