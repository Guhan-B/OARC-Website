<template>
  <div>
      <h2>Downloads</h2>
    <div class="container">
      <a href="">Rubrics</a>
      <a href="">Research Methods for Science Syllabus</a>
      <a href="">Research Publication Ethics Syllabus</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  flex-direction: column;
}

a {
  display: block;
  width: 100%;
  background: #508787;
  color: #fff;
  padding: 1rem 2rem;
  text-decoration: none;
  font-size: 1.15rem;
  margin: 1rem 0;
  border-radius: 5px;
}

h2{
    color: #333;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
}
</style>