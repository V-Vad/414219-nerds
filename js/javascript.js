var modal = document.querySelector(".open-modal");
var modalContent = document.querySelector(".popup");
var modalClose = document.querySelector(".close-modal");
var form = document.querySelector(".popup form");
var login = document.querySelector("[name=name]");
var email = document.querySelector("[name=email]");
var letter = document.querySelector("[name=letter]");
modal.addEventListener("click", function(event) {
  event.preventDefault();
  modalContent.classList.add("modal-content-show");
});
modalClose.addEventListener("click", function(event) {
  event.preventDefault();
  modalContent.classList.remove("modal-content-show");
});
form.addEventListener("submit", function(event) {
  if (!login.value || !email.value || !letter.value) {
    if (login.value) {
      login.classList.remove("modal-error");
    } else {
      event.preventDefault();
      login.classList.add("modal-error");
    }
    if (email.value) {
      email.classList.remove("modal-error");
    } else {
      event.preventDefault();
      email.classList.add("modal-error");
    }
    if (letter.value) {
      letter.classList.remove("modal-error");
    } else {
      event.preventDefault();
      letter.classList.add("modal-error");
    }
  }
})