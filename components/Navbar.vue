<template>
  <div class="navbar">
    <div class="nav-container">
      <div class="title">
        <img src="https://upload.wikimedia.org/wikipedia/en/0/0c/TUemblem.png" alt="">
        <div>Organic Agile Research Culture</div>
      </div>
      <div class="nav">
        <ul class="nav-links">
          <li><nuxt-link exact to="/">Home</nuxt-link></li>
          <li><nuxt-link exact to="/aboutoer">About OER</nuxt-link></li>
          <li><nuxt-link exact to="/downloads">Downloads</nuxt-link></li>
          <li><nuxt-link exact to="/submission">Submit OER</nuxt-link></li>
          <li class="auth" v-if="loggedIn" @click="logout">Logout</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Cookies from 'js-cookie';
import {fireAuth} from "~/plugins/firebase.js";
export default {
  data() {
    return {
      loggedIn: false
    }
  },
  mounted() {
    this.setupFirebase()
  },
  asyncData() {},
  methods: {
    setupFirebase() {
     fireAuth.onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log('signed in')
          fireAuth
            .currentUser.getIdToken(true)
            .then(token => Cookies.set('access_token', token))
          this.loggedIn = true
        } else {
          Cookies.remove('access_token')
          // if (Cookies.set('access_token', 'blah')) {
          // }
          // No user is signed in.
          this.loggedIn = false
          console.log('signed out', this.loggedIn)
        }
      })
    },
    logout() {
        fireAuth
        .signOut()
        .then(() => {
          this.$router.replace("/");
          this.$store.dispatch("setEmail",{email:""})
        })
    }
  }
}
</script>
<style>
.navbar {
  height: 80px;
  width: 100%;
  background: #508787;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 200;
}

.title img{
  width: 50px;
  height: 50px;
  margin-right: 1rem;
}


.title{
    color: white;
    font-weight: bold;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  height: 100%;
  /* background: green; */
  margin: 0 auto;
}

ul,
li {
  list-style: none;
}

.nav-links {
  display: flex;
}

.nav-links li{
    height: 100%;
}

.nav-links li a,.auth{
    text-decoration: none;
    color: white;
    font-weight: 700;
    display: inline-block;
    box-sizing: border-box;
    padding: 0 1rem;
    font-size: 1.05rem;
    cursor: pointer;
}

@media only screen and (max-width: 650px) {
  .nav-container{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .title{
    width: 100%;
    text-align: center;
    padding: 1rem;
    justify-content: flex-start;
  }

  .nav{
    padding: 0.75rem 0;
    background: #447272;
    width: 100%;
  }

  .nav-links{
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
  }
  .navbar{
    height: max-content;
  }
}
</style>