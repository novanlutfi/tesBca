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
    selectedPlan: {},
    hobbySelected: false,
    growthSelected: false,
    bussinessSelected: false,
    enterpriseSelected: false,
    deletedId: 0,
    dataTemp: {},
    isEditMode: false
  },
  mutations: {
    editMode (state, editMode) {
      state.isEditMode = editMode
      console.log('edit mode di store' + state.isEditMode)
    },
    editData (state, item) {
      state.dataTemp = item
    },
    deleteId (state, id) {
      state.deletedId = id
    },
    initPlan (state) {
      state.hobbySelected = false
      state.growthSelected = false
      state.bussinessSelected = false
      state.enterpriseSelected = false
    },
    selectHobby (state) {
      state.hobbySelected = true
      state.growthSelected = false
      state.bussinessSelected = false
      state.enterpriseSelected = false
    },
    selectGrowth (state) {
      state.hobbySelected = false
      state.growthSelected = true
      state.bussinessSelected = false
      state.enterpriseSelected = false
    },
    selectBussiness (state) {
      state.hobbySelected = false
      state.growthSelected = false
      state.bussinessSelected = true
      state.enterpriseSelected = false
    },
    selectEnterprise (state) {
      state.hobbySelected = false
      state.growthSelected = false
      state.bussinessSelected = false
      state.enterpriseSelected = true
    },
    postHobby (state) {
      state.selectedPlan = state.planList[0]
      console.log(state.selectedPlan)
    },
    postGrowth (state) {
      state.selectedPlan = state.planList[1]
      console.log(state.selectedPlan)
    },
    postBussiness (state) {
      state.selectedPlan = state.planList[2]
      console.log(state.selectedPlan)
    },
    postEnterprise (state) {
      state.selectedPlan = state.planList[3]
      console.log(state.selectedPlan)
    }
  }
})
