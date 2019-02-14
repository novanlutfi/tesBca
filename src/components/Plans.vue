<template>
    <div>
        <div class="title font-sans text-grey-darkest font-medium">
            <p class="change-plan">Change Plan</p>
            <router-link to="/poststable">
                <button class="text-grey-darkest cancel-plan hover:text-red font-medium">Cancel your Plan</button>
            </router-link>
        </div>
    <hr>
    <li class="flex flex-row">
        <hobby></hobby>
        <growth></growth>
        <bussiness></bussiness>
        <enterprise></enterprise>
    </li>
    <button
      type="button"
      class="border bg-grey-darkest hover:border-grey-darkest hover:bg-blue-lightest hover:text-grey-darkest text-white font-bold py-2 px-4 rounded ml-2"
      @click="showModal"
    >
      Submit
    </button>

    <modal2
      v-show="isModalVisible"
      @close="closeModal"
    />
    </div>
</template>

<script>
import Bussiness from '@/components/plans/Bussiness.vue'
import Enterprise from '@/components/plans/Enterprise.vue'
import Growth from '@/components/plans/Growth.vue'
import Hobby from '@/components/plans/Hobby.vue'
import modal2 from '@/components/PlanModal.vue'
export default {
  components: {
    'bussiness': Bussiness,
    'enterprise': Enterprise,
    'growth': Growth,
    'hobby': Hobby,
    modal2
  },
  data () {
    return {
      isModalVisible: false
    }
  },
  methods: {
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    }
  },
  created () {
    this.$store.commit('initPlan')
  }
}
</script>

<style>
.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;

}
hr {
    display: block;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-left: 10px;
    margin-right: 10px;
    border-style: inset;
    border-width: 2px;
}
.cancel-plan {
    font-size: 20px;
    /* font-weight: bold; */
}
.change-plan {
  font-size: 30px;
}
</style>
