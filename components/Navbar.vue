<template>
  <div class="navbar">
    <div class="nav-container">
      <div class="title">
        <img src="https://upload.wikimedia.org/wikipedia/en/0/0c/TUemblem.png" alt="">
        <div>WeCollect</div>
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
  z-index: 200;
}

.title img{
  width: 50px;
  height: 50px;
  margin-right: 1rem;
}


.title{
    color: white;
    font-weight: bold;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
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

@media only screen and (max-width: 650px) {
  .nav-container{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .title{
    width: 100%;
    text-align: center;
    padding: 1rem;
    justify-content: flex-start;
  }

  .nav{
    padding: 0.75rem 0;
    background: #447272;
    width: 100%;
  }

  .nav-links{
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
  }
  .navbar{
    height: max-content;
  }
}
</style>