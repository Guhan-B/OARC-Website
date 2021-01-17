<template>
  <div class="container">
    <h3 style="margin-bottom: 1rem; color: #333">
      OERs Submitted By: {{ oer.firstName + " " + oer.lastName }}
    </h3>
    <div class="oers">
      <div class="oer" v-for="(o, index) in oer.oers" :key="index">
        <h3 style="color:#508787;margin-bottom:1rem;">Points: {{ o.points == -1 ? "Not Evaluted" : o.points }}</h3>
        <h3>{{ o.title }} &nbsp;&nbsp; | &nbsp;&nbsp; Unit: {{ o.unit }}</h3>
        <h4>Author:&nbsp; {{ o.authorFname + " " + o.authorLname }}</h4>
        <h4>Organization:&nbsp; {{ o.authorOrg }}</h4>
        <h4 style="color: #333; margin-bottom: 0.25rem">Description:</h4>
        <p>{{ o.desc }}</p>
        <h4 style="color: #333">
          Material Type:
          <span>{{ o.type === "0" ? o.otherType : o.type }}</span>
        </h4>
        <div class="actions">
          <nuxt-link :to="'/review/' + $route.params.id + '/' + index"
            >{{o.points === -1?"Evaluate":"Revaluate"}}</nuxt-link
          >
          <a target="_blank" :href="o.url">Download</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {fireAuth} from "~/plugins/firebase.js";
import { getUserFromCookie, getUserFromSession } from '@/helpers'
export default {

asyncData({ req, redirect }) {
    console.log("Called")
    if (process.server) {
      console.log('server', req.headers)
      const user = getUserFromCookie(req)
      console.log(user)
      //   console.log('b', getUserFromCookie(req))
      if (!user) {
        console.log('redirecting server')
        redirect('/home')
      }
    } else {
      var user = fireAuth.currentUser
      console.log(user)
      if (!user) {
        redirect('/home')
      }
      //   console.log($nuxt.$router)
    }
  },
}
</script>

<style scoped>
.container {
  flex: 1;
  width: 70%;
  margin: auto;
  padding: 2rem 0rem;
}
.oers {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.oer {
  background: #fff;
  border-top: 5px #508787 solid;
  color: #333;
  padding: 1rem;
  position: relative;
}

.oer span {
  display: flex;
}

.oer .actions {
  position: absolute;
  right: 2rem;
  bottom: 1rem;
}

a {
  text-decoration: none;
  color: #508787;
  font-weight: bold;
  margin: 0 8px;
}

.oer p,
.oer h4,
.oer h3 {
  margin-bottom: 0.5rem;
}

.oer h4 {
  color: #777;
}

.oers h4 span {
  display: inline;
  font-weight: normal;
}
</style>

<script>
export default {
  data() {
    return {
      oer: this.$store.getters.oerById(this.$route.params.id),
    };
  },
};
</script>