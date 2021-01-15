<template>
  <div class="container">
    <h3 style="margin-bottom:1rem;color: #333;">OERs Submitted By: {{ oer.firstName + " " + oer.lastName }}</h3>
    <div class="oers">
      <div class="oer" v-for="(o, index) in oer.oers" :key="index">
        <h3>{{ o.title }} &nbsp;&nbsp; | &nbsp;&nbsp; Unit: {{ o.unit }}</h3>
        <h4>Author:&nbsp; {{ o.authorFname + " " + o.authorLname }}</h4>
        <h4>Organization:&nbsp; {{ o.authorOrg }}</h4>
        <h4 style="color: #333; margin-bottom: 0.25rem">Description:</h4>
        <p>{{ o.desc }}</p>
        <h4 style="color: #333; margin-bottom: 0.25rem; margin-top:1.5rem;">Material Type:</h4>
        <p>{{ o.type === "0" ? o.otherType : o.type }}</p>
        <a target="_blank" :href="o.url">Download OER</a>
      </div>
    </div>
  </div>
</template>

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

.oer a{
    position: absolute;
    right: 2rem;
    bottom: 1rem;
}

.oer p,
.oer h4,
.oer h3 {
  margin-bottom: 0.5rem;
}

.oer h4 {
  color: #777;
}
</style>

<script>
export default {
  computed: {
    oer() {
      const oers = this.$store.getters.oers;
      console.log(oers);
      const oer = oers.filter((el) => {
        return el.id === this.$route.params.id;
      });
      return oer[0];
    },
  },
};
</script>