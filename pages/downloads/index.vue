<template>
  <div>
      <h2>Downloads</h2>
    <div class="container">
      <a target="_blank" href="https://drive.google.com/file/d/1gJHgqD2fq02v5BhKOsEvjN9Oqyugq0Oe/view?usp=sharing">Research Methods for Science Syllabus</a>
      <a target="_blank" href="https://drive.google.com/file/d/1whnY89cNqQN-Y5Qnme7_osCMJR9OoPZn/view?usp=sharing">Research Publication Ethics Syllabus</a>
      <nuxt-link class="btn btn-solid" to="/rules/print">Download Rubrics</nuxt-link>
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