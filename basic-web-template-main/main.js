const mostrarEmail = () => {
  console.log("Javascript Works!");
  let cbox = document.getElementById("email");
  if (cbox.type === "password") {
    cbox.type = "email";
  } else {
    cbox.type = "password";
  }
};
