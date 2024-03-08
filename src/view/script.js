function logIn() {
  const userName = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log(userName)
  console.log(password)



const data = {
  userName: userName,
  password: password,
};

fetch("http://localhost:3000/api/v1/user", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Invalid");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    window.location.href = "/data.html";
  })
  .catch((err) => {
    alert("please check your username and password");
  });
}