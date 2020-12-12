<template>
  <div>
    <Navbar/>
    <Nuxt />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato";
}

body{
  background: #f7f7f7;
}
</style>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>
