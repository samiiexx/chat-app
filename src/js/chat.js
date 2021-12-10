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

// Add new chat documents
// Set up a real time listener to get new chats
// Update the username
// Update the room

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = collection(db, 'chats');
    this.unsub;
  }

  async addChat(message) {
    // Format a chat object

    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: Timestamp.fromDate(now)
    };

    // save the chat document
    const response = await addDoc(this.chats, chat);
    return response;
  }

  // Set up Real time listener
  getChats(callback) {
    const q = query(collection(db, "chats"), where("room", "==", this.room), orderBy('created_at'));

    this.unsub = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          // Update the UI
          callback(change.doc.data());
        }
      })
    })
  }

  updateName(username) {
    this.username = username;
    localStorage.setItem('username', username);
  }

  updateRoom(room) {
    this.room = room;
    console.log('room updated');
    if (this.unsub) {
      this.unsub();
    }
  }
}

