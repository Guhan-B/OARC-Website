<template>
  <main>
    <div class="details">
      <div class="container">
        <div>
          <h1>Rubrics for winning</h1>
          <a target="_blank" class="btn btn-outline"
            href="https://docs.google.com/spreadsheets/d/1WJiYoe-BzCiQcyuqG4oh8BAAp_PoBTIuzUVGNHBFWo4/edit?usp=sharing"
            >Download</a
          >
        </div>
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTtMkBSx1lx7KRHsCDUKRGJYxwomRx3mswb2HPsS5RSiEyRNXgD5SR7uG23ouhUcr5DKKgEGctJWY5J/pubhtml?widget=true&amp;headers=false"
        ></iframe>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100%;
}

.container {
  width: 90%;
  margin: auto;
}

.container h1 {
  text-align: center;
  margin: 2rem 0;
  color: #333;
}

iframe {
  width: 100%;
  height: 90vh;
  display: block;
  margin: 1rem 0;
  border: none;
}

.container div{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btn {
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  margin-right: 1rem;
}

.btn-solid {
  border: 2px #508787 solid;
  background: #508787;
  color: white;
}

.btn-outline {
  border: 2px white solid;
  color: #508787;
  background: white;
}

</style>