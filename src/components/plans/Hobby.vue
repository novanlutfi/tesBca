<template>
    <button v-on:click="postHobby" class="hover:bg-grey-darkest hover:text-white focus:bg-blue focus:text-white">
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
    getHobby () {
      this.a = this.$store.state.planList[0]
    },
    postHobby () {
      this.$store.commit('postHobby', this.a)
    }
  },
  created () {
    this.getHobby()
  }
}
</script>

<style>

</style>
