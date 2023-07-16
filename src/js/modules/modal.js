export function modal() {
  // let modal = document.querySelector("#modal");
  let modal = document.getElementById("modal");
  // let trigger = document.querySelectorAll(".trigger");
  let trigger = document.getElementsByClassName("trigger");
  function toggleModal() {
    modal.classList.toggle("show-modal");
    document.body.classList.toggle('lock');
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      toggleModal()
    }
  }
  // for (let i = 0; i < trigger.length; i++) {
  //   trigger[i].addEventListener("click", toggleModal);
  // }
  document.addEventListener("click", function(event) {
    if (event.target.classList.contains("trigger")) {
      toggleModal();
    }
  });
}
