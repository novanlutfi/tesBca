<template>
    <transition name="modal-fade">
<div class="modal-backdrop flex">
    <div class="modal rounded" role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription">
      <header class="modal-header" id="modalTitle">
        <slot name="header">

          <button
            type="button"
            class="text-grey-darkest font-medium"
            @click="close"
            aria-label="Close modal"
          >
            x
          </button>
        </slot>
      </header>
      <section class="modal-body font-sans text-grey-darkest font-medium" id="modalDescription">
        <slot name="body">
          <form class="bg-white rounded px-8">
    <div class="mb-3">
      <label class="block text-grey-darker text-sm font-bold mb-2">
        User ID
      </label>
      <input v-model="$store.state.dataTemp.userId" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="User ID">
    </div>
    <div class="mb-3">
      <label class="block text-grey-darker text-sm font-bold mb-2">
        Title
      </label>
      <input v-model="$store.state.dataTemp.title" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Title">
    </div>
    <div class="mb-3">
      <label class="block text-grey-darker text-sm font-bold mb-2">
        Body
      </label>
      <input v-model="$store.state.dataTemp.body" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Body">
    </div>
  </form>
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="font-bold rounded mr-1 p-1 border border-grey-darker text-grey-darker"
              @click="submitData"
              aria-label="Close modal"
            >
              Submit
          </button>
            <button
              type="button"
              class="font-bold rounded ml-1 pl-2 pr-2 p-1 border border-grey-darker text-grey-darker"
              @click="close"
              aria-label="Close modal"
            >
              Cancel
          </button>
        </slot>
      </footer>
    </div>
  </div>
    </transition>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'modal',
  data () {
    return {
      idTemp: 0,
      userIdTemp: '',
      titleTemp: '',
      bodyTemp: ''
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    submitData () {
      if (this.$store.state.isEditMode) {
        Axios.put('http://jsonplaceholder.typicode.com/posts/' + this.$store.state.dataTemp.id, {
          userId: this.$store.state.dataTemp.userId,
          title: this.$store.state.dataTemp.title,
          body: this.$store.state.dataTemp.body
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
      } else {
        Axios.post('http://jsonplaceholder.typicode.com/posts', {
          userId: this.$store.state.dataTemp.userId,
          title: this.$store.state.dataTemp.title,
          body: this.$store.state.dataTemp.body
        }).then(
          response => {
            console.log('berhasil add data')
            console.log(response.data)
          }
        ).catch(
          e => {
            console.log(e)
          }
        )
      }
      this.$emit('close')
    }
  }
}
</script>

<style>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(144, 145, 189, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: rgb(255, 255, 255);
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 10px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: flex-end;
    margin-left: 5px;
    margin-right: 5px;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
    margin-left: 5px;
    margin-right: 5px;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }
</style>
