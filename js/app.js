
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded!");

  const contactButton = document.getElementById('contactButton');
  const contactModal = document.getElementById('contactModal');
  const closeModalBtn = document.getElementById('closeModal');
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');

  console.log("Elements found:", {
    button: !!contactButton,
    modal: !!contactModal,
    close: !!closeModalBtn,
    form: !!contactForm
  });

  if (!contactButton || !contactModal) {
    alert("ERROR: Contact elements not found!");
    return;
  }

  // Open modal
  contactButton.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Button clicked!");
    contactModal.style.display = 'flex';
    contactModal.offsetHeight;
    contactModal.classList.add('show');
  });

  // Close modal
  closeModalBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Close clicked!");
    contactModal.classList.remove('show');
    setTimeout(() => {
      contactModal.style.display = 'none';
    }, 300);
  });

  // Click outside to close
  contactModal.addEventListener('click', function (e) {
    if (e.target === contactModal) {
      console.log("Clicked outside!");
      contactModal.classList.remove('show');
      setTimeout(() => {
        contactModal.style.display = 'none';
      }, 300);
    }
  });

  // Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && contactModal.classList.contains('show')) {
      contactModal.classList.remove('show');
      setTimeout(() => {
        contactModal.style.display = 'none';
      }, 300);
    }
  });

  // Form submit
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("Form submitted!");

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('contactSubject').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields');
      return;
    }

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      alert('✅ Message sent successfully!\nName: ' + name + '\nEmail: ' + email);
      contactForm.reset();
      contactModal.classList.remove('show');
      setTimeout(() => {
        contactModal.style.display = 'none';
      }, 300);

      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
    }, 1500);
  })});


