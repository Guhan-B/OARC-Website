<template>
  <div class="evaluation">
    <div class="eval-header">
      <nuxt-link class="btn btn-solid" to="/rules/print">Print</nuxt-link>
    </div>
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
            v-html="pt.for"
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
};
</script>

<style>
*{
  /* outline: 1px solid yellow; */
}
.evaluation {
  flex: 1;
  width: 90%;
  margin: auto;
  padding: 2rem 0;
  overflow: auto;
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
  padding: 0.45rem 0.85rem;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  border-radius: 5px;
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

.eval-header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.input-col pre{
  /* white-space: pre; */
}
</style>