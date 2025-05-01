function sendMail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const mailtoLink = `mailto:chanchalbohra14@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(
    "Name: " + name + "\nEmail: " + email + "\n\n" + message
  )}`;
  window.location.href = mailtoLink;
}
