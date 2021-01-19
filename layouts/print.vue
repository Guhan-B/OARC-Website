<template>
  <div class="layout">
    <Nuxt />
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
