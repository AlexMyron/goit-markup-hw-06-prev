(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
  
  function handleKeyUp(e) {
    alert(JSON.stringify(e));
  }
  
  const kinput = document.getElementById('kinput');
  kinput.onkeyup = handleKeyUp;
})();
