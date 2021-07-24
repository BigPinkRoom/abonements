export const state = () => ({
  messages: [],
});

export const mutations = {
  add(state, data) {
    state.messages.push({
      id: Math.round(Math.random() * 1e6),
      message: data.message,
      type: data.type,
      duration: data.duration,
    });
  },

  remove(state, id) {
    const messageIndex = state.messages.findIndex((message) => message.id === id);

    if (messageIndex !== -1) {
      state.messages.splice(messageIndex, 1);
    }
  },
};

export const actions = {};

export const getters = {
  allMessages(state) {
    return state.messages;
  },
};
