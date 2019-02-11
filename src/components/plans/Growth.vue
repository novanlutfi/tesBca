<template>
    <button v-on:click="postGrowth" class="hover:bg-grey-darkest hover:text-white focus:bg-blue focus:text-white">
        <h4>{{a.plan}}</h4>
        <h3>{{a.size}} GB</h3>
        <h5>$ {{a.price}} / mo</h5>
    </button>
</template>

<script>
export default {
  data () {
    return {
      a: {}
    }
  },
  methods: {
    getGrowth () {
      this.a = this.$store.state.planList[1]
    },
    postGrowth () {
      this.$store.commit('postGrowth', this.a)
    }
  },
  created () {
    this.getGrowth()
  }
}
</script>

<style>

</style>
