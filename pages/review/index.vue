<template>
  <div class="review">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>University</th>
          <th>Department</th>
          <th>Designation</th>
          <th>Number of OER</th>
          <th>View OERs</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="oer in oers" :key="oer.id">
          <td>{{ oer.firstName + " " + oer.lastName }}</td>
          <td>{{ oer.email }}</td>
          <td>{{ oer.university }}</td>
          <td>{{ oer.department }}</td>
          <td>{{ oer.status }}</td>
          <td>{{ oer.number }}</td>
          <td>
            <nuxt-link class="btn" :to="'/review/' + oer.id">View</nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.review {
  width: 100%;
  flex: 1;
}
table {
  width: 90%;
  margin: 1rem auto;
  border-collapse: collapse;
  text-align: left;
}

tbody tr:nth-of-type(even) {
  background: white;
}

.btn {
  display: block;
  margin: auto;
  color: #508787;
  width: fit-content;
  text-decoration: none;
}

th {
  padding: 0.5rem 0.5rem;
  background: #508787;
  color: white;
}

td {
  padding: 0.5rem 0.5rem;
  color: #333;
}
table,
th,
td {
  border: 1px solid #ccc;
}
</style>

<script>
import {fireAuth} from "~/plugins/firebase.js";
import { getUserFromCookie, getUserFromSession } from '@/helpers';
export default {
  data() {
    return {
      oers: this.$store.getters.oersByDept,
    };
  },
  asyncData({ req, redirect,store }) {
    console.log("Called")
    if (process.server) {
      console.log('server', req.headers)
      const user = getUserFromCookie(req)
      // console.log(user.email);
      // store.dispatch('setEmail',{email:user.email})
      //   console.log('b', getUserFromCookie(req))
      if (!user) {
        console.log('redirecting server')
        redirect('/review/auth')
      }else{
        store.dispatch('setEmail',{email:user.email})
      }
    } else {
      var user = fireAuth.currentUser
      console.log(user)
  
      if (!user) {
        redirect('/review/auth')
      }
      else{
        store.dispatch('setEmail',{email:user.email})
      }
      //   console.log($nuxt.$router)
    }
  },
  
};
</script>

<style>
</style>
