import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    planList: [
      {
        id: 1,
        plan: 'Hobby',
        size: 1,
        price: 5
      },
      {
        id: 2,
        plan: 'Growth',
        size: 5,
        price: 10
      },
      {
        id: 3,
        plan: 'Business',
        size: 10,
        price: 15
      },
      {
        id: 4,
        plan: 'Enterprise',
        size: 20,
        price: 20
      }
    ],
    selectedPlan: {}
  },
  mutations: {
    postHobby (state, hobby) {
      state.selectedPlan = hobby
      console.log(state.selectedPlan)
    },
    postGrowth (state, growth) {
      state.selectedPlan = growth
      console.log(state.selectedPlan)
    },
    postBussiness (state, bussiness) {
      state.selectedPlan = bussiness
      console.log(state.selectedPlan)
    },
    postEnterprise (state, enterprise) {
      state.selectedPlan = enterprise
      console.log(state.selectedPlan)
    }
  }
})
