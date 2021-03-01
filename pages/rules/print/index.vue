<template>
  <div class="evaluation">
    <table id="print">
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
            :v-html="pt.for"
          >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import criterias from "~/assets/data/criterias.json";

export default {
  layout: 'print',
  computed: {
    getCriterias() {
      return criterias;
    },
  },
  methods: {
    print() {
      window.print();
    },
  },
  mounted() {
    window.print();
    this.$router.back();
  }
};
</script>

<style scoped>
.evaluation {
  flex: 1;
  width: 100%;
  margin: auto;
  /* padding: 2rem 0; */
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