<template>
  <div>
    <button v-if="computedSelected" class="border border-blue-lighter bg-blue-lightest font-sans text-grey-darkest button w-32 text-grey-darkest text-center px-4 py-2 ml-2 mt-2 mb-6 rounded">
        <h3 class="flex justify-end text-blue-light">&#x2714;</h3>
        <h4 class="pb-1">{{a.plan}}</h4>
        <div class="flex">
          <h3>{{a.size}}</h3>
          <h4 class="flex content-end">&nbsp;GB</h4>
        </div>
        <h5>$ {{a.price}} / mo</h5>
    </button>
    <button v-else v-on:click="selectEnterprise" class="border border-grey-light bg-white font-sans hover:bg-grey-darkest hover:text-white button w-32 text-grey-darkest text-center px-4 py-2 ml-2 mt-2 mb-6 rounded">
        <h3 class="text-transparent">&#x2714;</h3>
        <h4 class="pb-1">{{a.plan}}</h4>
        <div class="flex">
          <h3>{{a.size}}</h3>
          <h4 class="flex content-end">&nbsp;GB</h4>
        </div>
        <h5>$ {{a.price}} / mo</h5>
    </button>
  </div>
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
    selectEnterprise () {
      this.$store.commit('selectEnterprise')
    }
  },
  created () {
    this.getEnterprise()
  },
  computed: {
    computedSelected: function () {
      console.log('ENTERPRISE ' + this.$store.state.enterpriseSelected)
      return this.$store.state.enterpriseSelected
    }
  }
}
</script>

<style>

</style>
