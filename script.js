// Get modal elements
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

// Apply click event to all zoomable images
document.querySelectorAll(".zoomable").forEach(img => {
  img.onclick = () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  };
});

// Close modal when X is clicked
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Close modal when clicked outside the image
window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
