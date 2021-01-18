<template>
  <div class="container">
    <h2>WeCollect - Review Panel</h2>
    <h3>Authentication</h3>
    <div class="auth-form">
      <div class="username">
        <label for="username">Username</label>
        <input type="text" name="username" id="username" autocomplete="false" v-model="email"/>
      </div>
      <div class="password">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" autocomplete="false" v-model="password"/>
      </div>
      <button type="submit" class="btn btn-solid" @click.prevent="pressed">Login</button>
    </div>
  </div>
</template>

<script>
import {fireAuth} from "~/plugins/firebase.js";
import { getUserFromCookie, getUserFromSession } from '@/helpers';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  asyncData({ req, redirect }) {
    console.log("Called")
    if (process.server) {
      console.log('server', req.headers)
      const user = getUserFromCookie(req)
      console.log(user)
      if (user) {
        console.log('redirecting server')
        redirect('/review')
      }
    } else {
      var user = fireAuth.currentUser
      console.log(user)
      if (user) {
        redirect('/review')
      }
    }
  },
  methods: {
    pressed() {
     fireAuth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data)
          this.$router.replace({ name: 'review' })
        })
        .catch(error => {
          this.error = error
          console.log(error);
        })
    }
  }

};
</script>

<style scoped>
.container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  color: #333;
  width: 25%;
  margin: auto;
  padding: 2rem 0;
}
.username,
.password {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
}
.auth-form {
  background: #f0f0f0;
  width: 100%;
  padding: 1rem;
}
label {
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
  display: block;
}

input {
  border: 1px solid rgba(51, 51, 51, 0.5);
  padding: 0.35rem 0.5rem;
  color: #222;
  width: 100%;
  border-radius: 4px;
  font-size: 1.05rem;
  resize: vertical;
}
.input-group input:hover,
.input-group textarea:hover {
  border: 1px solid cadetblue;
}

h3{
    margin-top: 0.5rem;
    margin-bottom: 2rem;
}

.input-group input:focus,
.input-group textarea:focus {
  border: 1px solid cadetblue;
  box-shadow: 0px 0px 0px 3px rgba(95, 158, 160, 0.3);
}
.btn {
  padding: 0.45rem 1rem;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  margin-top: 2rem;
}

.btn-solid {
  border: 2px #508787 solid;
  background: #508787;
  color: white;
}
</style>