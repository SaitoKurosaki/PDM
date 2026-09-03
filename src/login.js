const showpass = document.querySelector(".showpass");
const inputpass = document.querySelector(".inputpass");

showpass.addEventListener("click", () => {
  if (showpass.src.includes("closedeye.svg")) {
    showpass.src = "../svg/openeye.svg";
    inputpass.type = "text";
  } else {
    showpass.src = "../svg/closedeye.svg";
    inputpass.type = "password";
  }
});
