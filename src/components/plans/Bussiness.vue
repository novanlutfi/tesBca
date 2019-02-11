<template>
    <button v-on:click="postBussiness" class="hover:bg-grey-darkest hover:text-white focus:bg-blue focus:text-white">
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
    getBussiness () {
      this.a = this.$store.state.planList[2]
    },
    postBussiness () {
      this.$store.commit('postBussiness', this.a)
    }
  },
  created () {
    this.getBussiness()
  }
}
</script>

<style>

</style>
