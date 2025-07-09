const fab = document.querySelector('.fab');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    fab.style.display = 'block';
  } else {
    fab.style.display = 'none';
  }
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('textarea').value.trim();

  if (!email || !message) {
    alert('Please fill out both fields.');
    return;
  }

  // ✨ EmailJS send
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    user_email: email,
    user_message: message
  })
    .then(function(response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("✅ Thank you! Your message has been sent.");
      document.getElementById('contactForm').reset();
    }, function(error) {
      console.error("FAILED...", error);
      alert("❌ Something went wrong. Try again later.");
    });
});
