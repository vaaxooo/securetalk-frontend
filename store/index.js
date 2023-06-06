import Vuex from 'vuex'


export const state = () => ({
    user: null,
    typingUsers: []
})

export const mutations = {
    SET_USER(state, user) {
        state.user = user
    },

    SET_TYPING_USERS(state, users) {
      state.typingUsers = users;
    },
	ADD_TYPING_USER(state, user) {
		if (!state.typingUsers.some((u) => u.address === user.address)) {
		  	state.typingUsers.push(user);
		}
	},
    REMOVE_TYPING_USER(state, user) {
      state.typingUsers = state.typingUsers.filter((u) => u.address !== user.address);
    }
}

export const actions = {
    setUser({ commit }, user) {
        commit('SET_USER', user)
    }
}
