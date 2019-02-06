import axios from 'axios'

const uri = 'http://172.22.0.144:8080';
export const actions = {
  async getPlaylist ({ commit }) {
    const { data } = await axios.get(`${uri}/list`);
    let list = [];
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        const obj = {}
        obj[key] = data[key];
        list.push(obj)
      }
    }
    commit('SET_PLAYLIST', list)
  },
  async playSound ({ commit }, data) {
    await axios.get(`${uri}/play/${data.type}`);
  }
}

export const state = () => ({
  playlist: {}
})

export const mutations = {
  SET_PLAYLIST (state, playlist) {
    state.playlist = playlist
  },
}