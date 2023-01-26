const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyDaV21q1c5CP3z6B6cSiRDol6-dHJNo7iU",
  authDomain: "contactform-f39b6.firebaseapp.com",
  databaseURL: "https://contactform-f39b6-default-rtdb.firebaseio.com",
  projectId: "contactform-f39b6",
  storageBucket: "contactform-f39b6.appspot.com",
  messagingSenderId: "727053652242",
  appId: "1:727053652242:web:4c2a5a5807daa19d68a3cb"
};


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
const contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  var price= getElementVal("price");
  saveMessages(name, emailid, msgContent, price);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name,emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
    price : price,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
