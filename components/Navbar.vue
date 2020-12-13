<template>
  <div class="navbar">
    <div class="nav-container">
      <div class="title">
        <div>Title</div>
      </div>
      <div class="nav">
        <ul class="nav-links">
          <li><nuxt-link exact to="/">Home</nuxt-link></li>
          <li><nuxt-link exact to="/submission">Submit OER</nuxt-link></li>
          <li><nuxt-link exact to="/review">Review</nuxt-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.navbar {
  height: 80px;
  width: 100%;
  background: #508787;
  position: sticky;
  top: 0;
  left: 0;
}

.title{
    color: white;
    font-weight: bold;
    font-size: 2rem;
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

.nav-links li a{
    text-decoration: none;
    color: white;
    font-weight: 700;
    display: inline-block;
    box-sizing: border-box;
    padding: 0 1rem;
    font-size: 1.05rem;
}
</style>