<template>
<section>
  <div class="m-5 flex justify-end">
<router-link to="/">
    <button class="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded">
  Change Plan
</button>
    </router-link>
    <button
      type="button"
      class="border bg-black hover:border-grey-darkest hover:bg-blue-lightest hover:text-grey-darkest text-white font-bold py-2 px-4 rounded ml-2"
      @click="showAddModal"
    >
      Add
    </button>
  </div>
    <table class="table">
    <thead class="bg-black text-white">
      <tr>
        <th scope="col">User ID
        </th>
        <th scope="col">ID
        </th>
        <th scope="col">Title
        </th>
        <th scope="col">Body
        </th>
        <th scope="col">#</th>
        <th scope="col">#</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in tabelList" v-bind:key="item.id">
        <td>{{item.userId}}
        </td>
        <td>{{item.id}}
        </td>
        <td>{{item.title}}
        </td>
        <td>{{item.body}}
        </td>
        <td>
          <button
      type="button"
      class="border bg-black hover:border-grey-darkest hover:bg-blue-lightest hover:text-grey-darkest text-white font-bold py-2 px-4 rounded ml-2"
      @click="showDeleteModal(item.id)"
    >
      Delete
    </button>
        </td>
        <td>
          <router-link to="/addeditform">
          <button
      type="button"
      class="border bg-black hover:border-grey-darkest hover:bg-blue-lightest hover:text-grey-darkest text-white font-bold py-2 px-4 rounded ml-2"
      @click="showEditModal(item)"
    >
      Edit
    </button>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
  <deleteModal
      v-show="isDeleteModalVisible"
      @close="closeDeleteModal"
    />
    <addEditModal
      v-show="isAddEditModalVisible"
      @close="closeAddEditModal"
    />
</section>
</template>

<script>
import DeleteModal from '@/components/DeleteModal.vue'
import AddEditModal from '@/components/AddEditModal.vue'
import Axios from 'axios'
export default {
  components: {
    'deleteModal': DeleteModal,
    'addEditModal': AddEditModal
  },
  data () {
    return {
      tabelList: [],
      isDeleteModalVisible: false,
      isAddEditModalVisible: false
    }
  },
  methods: {
    showEditModal (item) {
      this.$store.commit('editData', item)
      this.$store.commit('editMode', true)
      // this.isAddEditModalVisible = true
    },
    showAddModal () {
      this.$store.commit('editData', {})
      this.$store.commit('editMode', false)
      this.isAddEditModalVisible = true
    },
    closeAddEditModal () {
      this.$store.commit('editData', {})
      this.$store.commit('editMode', false)
      this.isAddEditModalVisible = false
    },
    showDeleteModal (id) {
      this.$store.commit('deleteId', id)
      this.isDeleteModalVisible = true
    },
    closeDeleteModal () {
      this.isDeleteModalVisible = false
    },
    getData () {
      Axios.get('http://jsonplaceholder.typicode.com/posts').then(
        response => {
          this.tabelList = response.data
          console.log(response.data)
        }
      )
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: separate;
  width: 98%;
  margin-left: 10px;
}

td, th {
  border: 1px solid grey;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
