const phoneNumber = "5585997912055";
const message =
  "Olá, Matheus, tudo bem? Gostaria de falar com você sobre um projeto.";
const encodedMessage = encodeURIComponent(message);

const whatsappLink = document.getElementById("whatsapp-link");
whatsappLink.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
