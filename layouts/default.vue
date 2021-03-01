<template>
  <div class="layout">
    <Navbar id="top" />
    <Nuxt />
    <footer>
      <p>Copyrights &copy; 2021 , OARC</p>
    </footer>
  </div>
</template>

<style>
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
  width: 100%;
}

body {
  background: #f7f7f7;
}
.layout{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
