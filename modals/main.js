// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const modal1 = document.querySelector('#my-modal1');
const modalBtn1 = document.querySelector('#modal-btn1');
const closeBtn = document.querySelector('.close');
const closeBtn1 = document.querySelector('.close1');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

modalBtn1.addEventListener('click', openModal1);
closeBtn1.addEventListener('click', closeModal1);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}
function openModal1() {
    modal1.style.display = 'block';
  }

// Close
function closeModal() {
  modal.style.display = 'none';
}
function closeModal1() {
    modal1.style.display = 'none';
  }

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
  if (e.target == modal1) {
    modal1.style.display = 'none';
  }
}  

