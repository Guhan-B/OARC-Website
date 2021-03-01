<template>
  <div class="evaluation">
    <div class="eval-header">
      <button class="btn btn-solid" @click="saveEval">Save</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Criteria</th>
          <th>0 Points</th>
          <th>5 Points</th>
          <th>10 Points</th>
          <th>15 Points</th>
          <th>-5 Points</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(crt, cindex) in getCriterias" :key="cindex">
          <td class="crt-col">{{ crt.name }}</td>
          <td
            class="input-col"
            v-for="(pt, pindex) in crt.points"
            :key="pindex"
          >
            <div>
              <input
                :disabled="pt.for == 'NA' ? true : false"
                :name="cindex"
                :id="pt.for + cindex"
                type="radio"
                :value="pt.point"
                v-model="allotedPoints[cindex]"
              />
              <label :for="pt.for + cindex" v-html="pt.for"></label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import criterias from "~/assets/data/criterias-review.json";
import { fireAuth } from "~/plugins/firebase.js";
import { getUserFromCookie, getUserFromSession } from "@/helpers";
export default {
  data() {
    return {
      allotedPoints: this.$store.getters.allotedPointsByIdIndex({
        id: this.$route.params.id,
        index: this.$route.params.index,
      }),
    };
  },
  asyncData({ req, redirect }) {
    console.log("Called");
    if (process.server) {
      console.log("server", req.headers);
      const user = getUserFromCookie(req);
      console.log(user);
      //   console.log('b', getUserFromCookie(req))
      if (!user) {
        console.log("redirecting server");
        redirect("/home");
      }
    } else {
      var user = fireAuth.currentUser;
      console.log(user);
      if (!user) {
        redirect("/home");
      }
      //   console.log($nuxt.$router)
    }
  },

  methods: {
    saveEval() {
      let totalPoints = 0;
      let count = 0;
      this.allotedPoints.forEach(item => count++)
      if (count !== criterias.length) {
        alert("please fill all criterias!");
        return;
      }
      totalPoints = this.allotedPoints.reduce((a, b) => a + b);
      console.log(totalPoints);
      this.$store.dispatch("updateEvaluation", {
        id: this.$route.params.id,
        index: this.$route.params.index,
        allotedPoints: this.allotedPoints,
        points: totalPoints,
      });
      this.$router.replace("/review/" + this.$route.params.id);
    },
  },
  computed: {
    getCriterias() {
      return criterias;
    },
  },
};
</script>

<style scoped>
.evaluation {
  flex: 1;
  width: 90%;
  margin: auto;
  padding: 2rem 0;
}
.crt-col {
  width: 200px;
}
table {
  width: 100%;
  margin: 1rem auto;
  border-collapse: collapse;
  text-align: left;
}

tbody tr:nth-of-type(even) {
  background: white;
}

.btn {
  padding: 0.5rem 2rem;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

.btn-solid {
  border: 2px #508787 solid;
  background: #508787;
  color: white;
}

th {
  padding: 0.5rem 0.5rem;
  background: #508787;
  color: white;
  text-align: center;
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

.input-col div {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.input-col div input {
  margin-bottom: 0.5rem;
}

.eval-header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>