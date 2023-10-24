import { io } from 'socket.io-client';

const socket = io({
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

// Creating subscriptions

const createSocketSubscription = (event, callback) => {
  socket.on(event, (payload) => {
    callback(payload);
  });
};

export const subscribeToNewMessages = (callback) => {
  createSocketSubscription('newMessage', callback);
};

export const subscribeToNewChannels = (callback) => {
  createSocketSubscription('newChannel', callback);
};

export const subscribeToRemoveChannel = (callback) => {
  createSocketSubscription('removeChannel', callback);
};

export const subscribeToRenameChannel = (callback) => {
  createSocketSubscription('renameChannel', callback);
};

// creating emits

export const emitNewMessage = (message, confirmationCallback) => {
  socket.emit('newMessage', message, confirmationCallback);
};

export const emitNewChannel = (channelName, confirmationCallback) => {
  socket.emit('newChannel', channelName, confirmationCallback);
};

export const emitRemoveChannel = (channelId) => socket.emit('removeChannel', channelId);

export const emitRenameChannel = (renameInfo) => socket.emit('renameChannel', renameInfo);
