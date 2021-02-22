let buttons = document.querySelectorAll(".drum")

for (i = 0; i <= buttons.length ; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked")
  })
}