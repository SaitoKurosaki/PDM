const showpass = document.querySelectorAll(".showpass");

showpass.forEach((pass) => {
  const inputpass = pass.parentElement.querySelector("input");
  pass.addEventListener("click", () => {
    if (pass.src.includes("closedeye.svg")) {
      pass.src = "../svg/openeye.svg";
      inputpass.type = "text";
    } else {
      pass.src = "../svg/closedeye.svg";
      inputpass.type = "password";
    }
  });
});
