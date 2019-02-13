<template>
  <div>
    <button v-if="computedSelected" class="border border-blue-lighter font-sans bg-blue-lightest text-grey-darkest button w-32 text-grey-darkest text-center px-4 py-2 ml-2 mt-2 mb-6 rounded">
        <h3 class="flex justify-end text-blue-light">&#x2714;</h3>
        <h4 class="pb-1">{{a.plan}}</h4>
        <div class="flex">
          <h3>{{a.size}}</h3>
          <h4 class="flex content-end">&nbsp;GB</h4>
        </div>
        <h5>$ {{a.price}} / mo</h5>
    </button>
    <button v-else v-on:click="selectGrowth" class="border border-grey-light font-sans bg-white hover:bg-grey-darkest hover:text-white button w-32 text-grey-darkest text-center px-4 py-2 ml-2 mt-2 mb-6 rounded">
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
    getGrowth () {
      this.a = this.$store.state.planList[1]
    },
    selectGrowth () {
      this.$store.commit('selectGrowth')
    }
  },
  created () {
    this.getGrowth()
  },
  computed: {
    computedSelected: function () {
      console.log('GROWTH ' + this.$store.state.growthSelected)
      return this.$store.state.growthSelected
    }
  }
}
</script>

<style>

</style>
