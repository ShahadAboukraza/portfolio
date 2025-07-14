function openModal() {
  const modal = document.getElementById('modalOverlay');
  modal.classList.add('active');
}

function closeModal(event) {
  const modal = document.getElementById('modalOverlay');
  if (!event || event.target.id === 'modalOverlay' || event.target.classList.contains('close-btn') || event.target.innerHTML === '×') {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  }
}

// Use CSS for hide/show
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modalOverlay');
  modal.classList.remove('active');
  modal.style.display = 'none';

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});

function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('modalName').value;
  const email = document.getElementById('modalEmail').value;
  const subject = document.getElementById('modalSubject').value;
  const message = document.getElementById('modalMessage').value;

  const submitBtn = event.target.querySelector('.submit-btn');
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  emailjs.send("service_viga2xs", "template_zx4qfam", {
    from_name: name, from_email: email, subject, message
  })
    .then(() => {
      alert("✅ Message sent!");
      closeModal();
      event.target.reset();
    })
    .catch((err) => {
      alert("❌ Failed to send. Try again.");
      console.error(err);
    })
    .finally(() => {
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
    });
}
