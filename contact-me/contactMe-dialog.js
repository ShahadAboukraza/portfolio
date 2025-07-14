function openModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

  function closeModal(event) {
  if (event && event.target !== event.currentTarget) return;

  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

  function handleSubmit(event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  // Here you would typically send the data to your server
  alert(`Thank you ${name}! Your message has been sent.`);

  // Reset form and close modal
  event.target.reset();
  closeModal();
}

  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
  closeModal();
}
});
