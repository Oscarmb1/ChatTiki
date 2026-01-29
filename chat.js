const btnChat = document.getElementById("btnChat");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");
const messages = document.getElementById("messages");
const textMessage = document.getElementById("textMessage");

btnChat.onclick = () => {
  chatBox.style.display = "block";
};

closeChat.onclick = () => {
  chatBox.style.display = "none";
};

function sendMessage() {
  if(textMessage.value.trim() === "") return;

  let msg = document.createElement("div");
  msg.textContent = "Tú: " + textMessage.value;
  messages.appendChild(msg);

  // respuesta automática
  let bot = document.createElement("div");
  bot.textContent = "Soporte: Gracias por tu mensaje 👍";
  messages.appendChild(bot);

  textMessage.value = "";
  messages.scrollTop = messages.scrollHeight;
}
