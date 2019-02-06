import axios from 'axios'

export const actions = {
    async GET_PLAYLIST ({ commit }) {
        const { data } = await axios.get('http://172.22.0.144:8080/list')
        let list = [];
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                const obj = {}
                obj[key] = data[key];
                list.push(obj)
            }
        }
        commit('SET_PLAYLIST', list)
    }
}

export const state = () => ({
    playlist: {}
  })
  
  export const mutations = {
    SET_PLAYLIST (state, playlist) {
      state.playlist = playlist
    },
    remove (state, { todo }) {
      state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle (state, todo) {
      todo.done = !todo.done
    }
  }