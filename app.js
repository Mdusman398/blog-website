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
      signupPassword: signupPassword
    };

    users.push(user);
    localStorage.setItem("usersdata", JSON.stringify(users));

    window.location.href= "login.html";
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


function opendiv(){
  let blogContainer = document.getElementById('blog-container');
  blogContainer.style.display="flex";
  let createBox = document.getElementById('createBox');
  createBox.style.display="flex";
  let body = document.getElementsByTagName('body');
  // body.style.overflow="hidden";
  console.log(body);
}
function hideBox(){
  let blogContainer = document.getElementById('blog-container');
  blogContainer.style.display="none";
  let createBox = document.getElementById('createBox');
  createBox.style.display="none";
}

// function createBlog(){
//   let blogTittleinp = document.getElementById('blogTittleinp').value
//   let authorNameinp = document.getElementById('authorNameinp').value
//   let blogContent = document.getElementById('blogContent').value

//   // Create blog section
//   // blogSectin div
//   console.log(blogTittleinp,authorNameinp,blogContent);
//   let blogSeciton = document.createElement('div');
//   blogSeciton.setAttribute('class','blogSeciton');
//   let main = document.querySelector('.main');
//   main.append(blogSeciton);

//   // blog section h1
//   let blogtittle = document.createElement('h1');
//   blogtittle.setAttribute('id','blogtittle');
//   blogtittle.innerText= blogTittleinp;
//   blogSeciton.append(blogtittle);

// // blog section p
//   let blogdescription = document.createElement('p');
//   blogdescription.setAttribute('id','blogdescription');
//   blogdescription.innerText= blogContent;
//   blogSeciton.append(blogdescription);

// // blog section p
//   let authorName = document.createElement('authorName');
//   authorName.setAttribute('id','authorName');
//   authorName.innerText= authorNameinp;
//   authorName.append(blogdescription);


// }