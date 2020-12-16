<template>
  <div>
    <Navbar />
    <Nuxt />
    <footer>
      <p>Copyrights &copy; 2020 , Lorem ipsum dolor.</p>
    </footer>
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

footer p {
  font-size: 1.05rem;
}

footer {
  text-align: center;
  color: white;
  padding: 1.5rem 0;
  background: #508787;
}

body {
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
