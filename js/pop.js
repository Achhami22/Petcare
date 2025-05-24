document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.products-container .product');
    const previewContainer = document.querySelector('.products-preview');
    const close = document.querySelectorAll('.preview .close');
    const incButtons = document.querySelectorAll('.quantity .increment');
    const decButtons = document.querySelectorAll('.quantity .decrement');
  
    // Hide the preview container initially
    previewContainer.style.display = 'none';
  
    products.forEach((product) => {
      product.addEventListener('click', () => {
        // Set the product variable to the clicked product element
        product = product;
  
        // Display the preview container
        previewContainer.style.display = 'flex';
  
        // Add the active class to the correct preview
        document.querySelector(`.products-preview .preview[data-target="${product.dataset.name}"]`).classList.add('active');
      });
    });
  
    close.forEach((btn) => {
      btn.addEventListener('click', () => {
        // Hide the preview container and remove the active class
        previewContainer.style.display = 'none';
        document.querySelector('.products-preview .preview.active').classList.remove('active');
  
        // Reset the product variable
        product = null;
      });
    });
  
    incButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (product) {
          const currentQty = parseInt(product.querySelector('.qnum .counting').innerText, 10) || 0;
          product.querySelector('.qnum .counting').innerText = currentQty + 1;
        }
      });
    });
  
    decButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (product) {
          const currentQty = parseInt(product.querySelector('.qnum .counting').innerText, 10) || 0;
          if (currentQty > 0) {
            product.querySelector('.qnum .counting').innerText = currentQty - 1;
          }
        }
      });
    });
  });