import { closeModal, openModal } from "./modal";
import { postData } from "../services/services";

function forms(formSelector, modalTimeId) {
  //Forms

  const forms = document.querySelectorAll(formSelector);

  const message = {
    loading: "img/form/spinner.svg",
    success: "Thanks, we connect with you soon!",
    failure: "Something went wrong...",
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.classList.add("spinner");
      form.insertAdjacentElement("afterend", statusMessage);

      setTimeout(() => {
        const formData = new FormData(form);

        const json = JSON.stringify(Object.fromEntries(formData.entries()));

        // №87 - Fetch

        // fetch("server.php", {
        //   method: "POST",
        //   headers: {
        //     "Content-type": "application/json",
        //   },
        //   body: JSON.stringify(object),
        // });

        postData("http://localhost:3000/requests", json)
          .then((data) => {
            console.log(data);
            showThanksModal(message.success);
            form.reset();
            statusMessage.remove();
          })
          .catch(() => {
            showThanksModal(message.failure);
          })
          .finally(() => {
            form.reset();
          });
      }, 2000);
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");

    prevModalDialog.classList.add("hide");
    openModal(".modal", modalTimeId);

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
    <div class="modal__content">
    <div class="modal__close" data-close>&times;</div>
    <div class="modal__title">${message}</div>
    </div>
    `;

    document.querySelector(".modal").append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      closeModal(".modal");
    }, 4000);
  }
}

// module.exports = forms;
export default forms;
