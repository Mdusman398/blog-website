let users = JSON.parse(localStorage.getItem("usersdata")) || [];

function signupfnc() {
  let signupName = document.getElementById("signupName").value;
  let signupEmail = document.getElementById("signupEmail").value;
  let signupPassword = document.getElementById("signupPassword").value;

  if (signupName !== "" && signupEmail !== "" && signupPassword !== "") {
    for (let i = 0; i < users.length; i++) {
      if (signupEmail === users[i].signupEmail) {
        alert("Email already exists");
        return;
      }
    }

    let user = {
      signupName: signupName,
      signupEmail: signupEmail,
      signupPassword: signupPassword,
    };

    users.push(user);
    localStorage.setItem("usersdata", JSON.stringify(users));

    window.location.href = "login.html";
    alert("Signup successful");
  } else {
    alert("Please fill all fields");
  }
}

function loginfnc() {
  let loginEmail = document.getElementById("email").value;
  let loginPassword = document.getElementById("password").value;
  let isCorrect = false;
  for (let i = 0; i < users.length; i++) {
    if (
      loginEmail === users[i].signupEmail &&
      loginPassword === users[i].signupPassword
    ) {
      isCorrect = true;
      break;
    }
  }

  if (isCorrect) {
    alert("Login Successfully");
    window.location.href = "home.html";
  } else {
    alert("Invalid Email or Password");
  }
}

// blog section

function opendiv() {
  let blogContainer = document.getElementById("blog-container");
  blogContainer.style.display = "flex";
  let createBox = document.getElementById("createBox");
  createBox.style.display = "flex";
  let body = document.getElementsByTagName("body");
  // body.style.overflow="hidden";
  console.log(body);
}
function hideBox() {
  let blogContainer = document.getElementById("blog-container");
  blogContainer.style.display = "none";
  let createBox = document.getElementById("createBox");
  createBox.style.display = "none";
}

function createBlog() {
  let title_input = document.getElementById("titleInp").value;
  let content_input = document.getElementById("contentInp").value;
  let name_input = document.getElementById("nameInp").value;
  let current_date = document.getElementById('dateInp').value;

  // when click on post the box will be ghayab

  let blogContainer = document.getElementById("blog-container");
  blogContainer.style.display = "none";
  let createBox = document.getElementById("createBox");
  createBox.style.display = "none";
  console.log("fire");
  // end of click on post k upr 



  let blogPost = document.createElement("div");
  blogPost.setAttribute("class", "blogPost");
  let main = document.querySelector(".main");
  main.append(blogPost);

  // blog section h1
  let blogtittle = document.createElement('h2');
  blogtittle.setAttribute('class','blog-title');
  blogtittle.innerText= title_input;
  blogPost.append(blogtittle);


  
// blog section p
  let blogContent = document.createElement('p');
  blogContent.setAttribute('class','blog-content');
  blogContent.innerText= content_input;
  blogPost.append(blogContent);


  // blog section author name
  let authorName = document.createElement('author');
  authorName.setAttribute('class','author');
  authorName.innerText= name_input;
  blogPost.append(authorName);


  // blog section date

  let blogDate = document.createElement('dateInp');
  blogDate.setAttribute('class','date');
  blogDate.innerText = current_date;
  blogPost.append(blogDate)
}


