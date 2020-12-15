import { ActionTree } from 'vuex'

export const state = () => ({
  user: null,
  backend: process.env.BACKEND_URL,
})

export const mutations = {
  SET_USER(state: any, user: any) {
    state.user = user
  },
}

export const actions: ActionTree<any, any> = {
  async nuxtServerInit({ commit }) {
    if (this.$cookies.get('_TOKEN'))
      commit(
        'SET_USER',
        await this.$axios
          .get(process.env.BACKEND_URL + '/me', {
            headers: {
              Authorization: this.$cookies.get('_TOKEN'),
            },
          })
          .then((res) => {
            if (res.data.newToken) {
              this.$cookies.set('_TOKEN', res.data.newToken)
              delete res.data.newToken
            }
            // eslint-disable-next-line no-console
            return res.data
          })
          .catch(() => {
            return null
          })
      )
  },
}
