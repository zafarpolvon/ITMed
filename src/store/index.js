import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const COUNTRIES = 'http://localhost:3000/countries'
const TYPES = 'http://localhost:3000/types'
const TRY = 'http://localhost:3000/try'
const TIMESPENT = 'http://localhost:3000/timespent'

export default new Vuex.Store({
  state: {
    user: {
      cost: ' ',
      countries: { },
      from: ' ',
      id: ' ',
      timespent: { },
      to: ' ',
      types: { }

    }
  },
  mutations: {
    addToCart (state, user) {
      if (state.user) {
        state.user = user
      } else {
        return state.user.push(user)
      }
    }
  },
  actions: {
    async loadCountries () {
      // eslint-disable-next-line no-useless-catch
      try {
        const info = await axios.get(COUNTRIES)
        return info.data
      } catch (e) {
        throw e
      }
    },
    async loadTypes () {
      // eslint-disable-next-line no-useless-catch
      try {
        const info = await axios.get(TYPES)
        return info.data
      } catch (e) {
        throw e
      }
    },
    async loadTry () {
      // eslint-disable-next-line no-useless-catch
      try {
        const info = await axios.get(TRY)
        return info.data
      } catch (e) {
        throw e
      }
    },
    async loadTimespent () {
      // eslint-disable-next-line no-useless-catch
      try {
        const info = await axios.get(TIMESPENT)
        return info.data
      } catch (e) {
        throw e
      }
    }
  },
  getters: {
    USER: state => {
      return state.user
    }
  },
  modules: {
  }
})
