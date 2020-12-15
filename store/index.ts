import { ActionTree } from 'vuex'

export const state = () => ({})

export const mutations = {}

export const actions: ActionTree<any, any> = {
  nuxtServerInit({ commit, dispatch }: any) {
    // eslint-disable-next-line no-console
    console.log(commit)
    // eslint-disable-next-line no-console
    console.log(dispatch)
  },
}
