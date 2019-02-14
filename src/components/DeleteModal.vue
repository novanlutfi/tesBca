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
          Are you sure want to delete?
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="bg-blue-light rounded mr-1 p-1 border border-grey-darkest text-grey-darkest"
              @click="submit"
              aria-label="Close modal"
            >
              Yes
          </button>
            <button
              type="button"
              class="bg-blue-light rounded ml-1 pl-2 pr-2 p-1 border border-grey-darkest text-grey-darkest"
              @click="close"
              aria-label="Close modal"
            >
              No
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
  methods: {
    close () {
      this.$emit('close')
    },
    submit () {
      Axios.delete('http://jsonplaceholder.typicode.com/posts/' + this.$store.state.deletedId).then(
        console.log('BERHASIL DELETE POST ' + this.$store.state.deletedId)
      )
        .catch(
          error => {
            console.log(error)
          }
        )
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
