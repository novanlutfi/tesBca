<template>
    <button v-on:click="postEnterprise" class="hover:bg-grey-darkest hover:text-white focus:bg-blue focus:text-white">
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
    getEnterprise () {
      this.a = this.$store.state.planList[3]
    },
    postEnterprise () {
      this.$store.commit('postEnterprise', this.a)
    }
  },
  created () {
    this.getEnterprise()
  }
}
</script>

<style>

</style>
