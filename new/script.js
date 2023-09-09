// script.js
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');
const usernameInput = document.getElementById('username');
const registerButton = document.getElementById('register-button');
const roomSelect = document.getElementById('room-select');
const joinRoomButton = document.getElementById('join-room-button');
const roomSelection = document.querySelector('.room-selection');

let username;
let room = 'general';

registerButton.addEventListener('click', () => {
    username = usernameInput.value.trim();
    if (username !== '') {
        // Hide registration and show room selection
        document.querySelector('.user-registration').style.display = 'none';
        roomSelection.style.display = 'block';
    }
});

joinRoomButton.addEventListener('click', () => {
    room = roomSelect.value;
    // Hide room selection and show chat room
    roomSelection.style.display = 'none';
    document.querySelector('.chat-header h1').textContent = `Chat Room - ${room}`;
});

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = `${username}: ${messageText}`;
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
        // Scroll to the bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});

messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});
