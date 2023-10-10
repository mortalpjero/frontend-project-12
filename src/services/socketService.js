import { io } from 'socket.io-client';

const socket = io();

// Creating sunscriptions

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

export const emitNewMessage = (message) => socket.emit('newMessage', message);

export const emitNewChannel = (channelName) => socket.emit('newChannel', channelName);

export const emitRemoveChannel = (channelId) => socket.emit('removeChannel', channelId);

export const emitRenameChannel = (renameInfo) => socket.emit('renameChannel', renameInfo);
