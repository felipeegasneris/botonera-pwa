import axios from 'axios'

const rbUri = 'http://172.22.0.144:8080';
const functionUrl = 'https://us-central1-raspberry-instants.cloudfunctions.net/botonera';

const icons = ["🥀", "💥",
  "💥💥", "💦",
  "👋👋", "🐑",
  "carmina", "🐓", "🍌🐰",
  "👌🐰", "🥁",
  "❓💸", "❌💸",
  "🦗", "😻",
  "👩🍒", "🤵ffff",
  "🤵uhh", "⛪✝️",
  "🏟️🇨🇱🎉", "😥🎻",
  "💰💰", "🚿🎵",
  "👩AH", "yapo.cl",
  "🤷‍", "⚡",
  "⚡🔋", "⬛⬛"]

const filterPublic = (list) => {
  return list.filter( (value, index, array) => {
    return value.public === true;
  })
}
export const actions = {
  async getPlaylist ({ commit }) {
    const { data } = await axios.get(`${functionUrl}/song/list`);
    commit('SET_PLAYLIST', filterPublic(data.songs))
  },
  async playSong ({ commit }, data) {
    await axios.get(`${rbUri}/play/${data.type}`);
  },
  async stopSongs () {
    await axios.get(`${rbUri}/stop`);
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
