// Copyright 2021 sfchi
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.



// DOM Query
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMessage = document.querySelector('.update-msg');
const rooms = document.querySelector('.chat-rooms')

// Add a new chat
newChatForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom.addChat(message)
    .then(() => newChatForm.reset())
    .catch(err => console.log(err))
});

// Update username
newNameForm.addEventListener('submit', e => {
  e.preventDefault();

  // Update name via chatroom class
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);

  // Reset form
  newNameForm.reset();

  // Show then hide the update message
  updateMessage.innerText = `Your name was updated ${newName}`; 
  setTimeout(() => updateMessage.innerText = '', 3000);
});

// Update the chat room
rooms.addEventListener('click', e => {
  if(e.target.tagName === 'BUTTON'){
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute('id'))
    chatroom.getChats(chat => chatUI.render(chat));
  }
})

// Check Local Storage for a name
const username = localStorage.username ? localStorage.username : 'anon';

// Class Instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

// Get the chats and render
chatroom.getChats((data) => {
  chatUI.render(data);
});