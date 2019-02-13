<template>
<section>
  <div class="m-5 flex justify-end">
<router-link to="/">
    <button class="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded">
  Change Plan
</button>
    </router-link>
  </div>
    <table class="table">
    <thead class="bg-black text-white">
      <tr>
        <th scope="col">Post ID
        </th>
        <th scope="col">ID
        </th>
        <th scope="col">Title
        </th>
        <th scope="col">Body
        </th>
        <th scope="col">#
        </th>
        <!-- <th scope="col">#
        </th> -->
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
          <button v-on:click="deleteData(item.id)" class="bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded">
            Delete
          </button>
        </td>
        <!-- <td>
          <button v-on:click="editData(item)" class="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded">
            Edit
          </button>
        </td> -->
      </tr>
    </tbody>
  </table>
</section>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      tabelList: []
    }
  },
  methods: {
    getData () {
      Axios.get('http://jsonplaceholder.typicode.com/posts').then(
        response => {
          this.tabelList = response.data
          console.log(response.data)
        }
      )
    },
    deleteData (id) {
      Axios.delete('http://jsonplaceholder.typicode.com/posts/' + id).then(
        response => {
          console.log('berhasil delete post ' + id)
        }
      ).catch(
        error => {
          console.log(error)
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
