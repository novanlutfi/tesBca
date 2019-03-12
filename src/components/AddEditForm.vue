<template>
    <section>
        <form class="mt-2 rounded px-3">
    <div class="mb-3">
      <label class="block text-grey-darker text-sm font-bold mb-2">
        User ID
      </label>
      <input v-model="userIdTemp" class="shadow appearance-none border rounded w-1/3 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="User ID">
    </div>
    <div class="mb-3">
      <label class="block text-grey-darker text-sm font-bold mb-2">
        Title
      </label>
      <input v-model="titleTemp" class="shadow appearance-none border rounded w-1/3 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Title">
    </div>
    <div class="mb-3">
      <label class="block text-grey-darker text-sm font-bold mb-2">
        Body
      </label>
      <input v-model="bodyTemp" class="shadow appearance-none border rounded w-1/3 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Body">
    </div>
  </form>
  <button
              type="button"
              class="hover:bg-black font-bold rounded ml-3 mr-1 p-1 border border-grey-darker text-grey-darker"
              @click="submitData"
            >
              Submit
          </button>
            <button
              type="button"
              class="font-bold rounded ml-1 pl-2 pr-2 p-1 border border-grey-darker text-grey-darker"
              @click="cancel"
            >
              Cancel
          </button>
    </section>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      idTemp: 0,
      userIdTemp: '',
      titleTemp: '',
      bodyTemp: ''
    }
  },
  created () {
    this.getData()
  },
  methods: {
    submitData () {
      console.log(this.userIdTemp)
      Axios.put('http://jsonplaceholder.typicode.com/posts/' + this.idTemp, {
        userId: this.userIdTemp,
        title: this.titleTemp,
        body: this.bodyTemp
      }).then(
        response => {
          console.log('berhasil edit data')
          console.log(response.data)
          this.$router.push('/poststable')
        }
      ).catch(
        e => {
          console.log(e)
        }
      )
    },
    getData () {
      this.idTemp = this.$store.state.dataTemp.id
      this.userIdTemp = this.$store.state.dataTemp.userId
      this.titleTemp = this.$store.state.dataTemp.title
      this.bodyTemp = this.$store.state.dataTemp.body
    },
    cancel () {
      this.$store.commit('editData', {})
      console.log('dataTempnya ' + this.$store.state.dataTemp.userId)
      this.$router.push('/poststable')
    }
  }
}
</script>

<style>

</style>
