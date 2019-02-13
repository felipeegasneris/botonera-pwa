import axios from 'axios'

const uri = 'http://172.22.0.144:8080';

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

const matchIcons = (list) => {
  return icons.map((v, k) => {
    return {icon: v, id: list[k].id, value: list[k].value}
  })

}
export const actions = {
  async getPlaylist ({ commit }) {
    const { data } = await axios.get(`${uri}/list`);
    console.log(data)
    const list = Object.values(data)
    const mapList = list.map((v, k) => {
      return {id: k, value: v}
    })

    const listWithIcons = matchIcons(mapList)
    console.log(listWithIcons)
    commit('SET_PLAYLIST', listWithIcons)
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
