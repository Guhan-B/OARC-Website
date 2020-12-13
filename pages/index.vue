<template>
  <main>
    <div class="showcase">
      <div class="container">
        <h1>Lorem Ipsum Dolor</h1>
        <p>Collecting useful and awesome open educational resources</p>
        <div class="links">
          <nuxt-link class="btn btn-solid" exact to="/submission"
            >Participate</nuxt-link
          >
          <nuxt-link
            class="btn btn-outline"
            exact
            to="/"
            v-scroll-to="{element:'#learn-more',offset:-80}"
            >Learn More</nuxt-link
          >
        </div>
      </div>
    </div>

    <div class="who-can" id="learn-more">
      <div class="container">
        <h2>Who Can Participate?</h2>
        <div class="card-container">
          <div class="card">
            <div class="image">
              <img src="@/assets/graduate.svg" alt="" />
            </div>
            <p>Any masters or Mphil or doctoral student from any department</p>
          </div>
          <div class="card">
            <div class="image">
              <img src="@/assets/graduate.svg" alt="" />
            </div>
            <p>Any staff members who are in early stages of their career</p>
          </div>
        </div>
      </div>
    </div>

    <div class="date">
      <h2>Important Dates</h2>
      <div class="container">
        <div>
          <h3>Submisson</h3>
          <p>20th Dec to 20th Jan</p>
        </div>
        <div>
          <h3>Review and Vote</h3>
          <p>20th Jan to 10th Feb</p>
        </div>
        <div>
          <h3>Results</h3>
          <p>27th Feb</p>
        </div>
      </div>
    </div>

    <div class="evaluation">
      <h2>Rubrics For Winning</h2>
      <div class="container">
        <ul>
          <li>
            Number of OERs submitted by the student that meet the OER criteria
          </li>
          <li>Complexity of the topic covered by the OER</li>
          <li>Uniqueness of the OER</li>
          <li>Depth of knowledge expressed in the topic</li>
          <li>Votes received by the OER by peers</li>
          <li>Expert review rating</li>
          <li>Number of fair reviews provided by the student</li>
        </ul>
        <div class="evaluation-image">
          <img
            src="https://images.pexels.com/photos/4792498/pexels-photo-4792498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="prize">
      <h2>Winners Get</h2>
      <div class="container">
        <div>
          <h3>Certificate from TVU</h3>
        </div>
        <div>
          <h3>Mentorship expert researchers</h3>
        </div>
        <div>
          <h3>Monetary reward</h3>
        </div>
        <div>
          <h3>Sponsorship from corporates</h3>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h2 {
  font-size: 2rem;
}

h1 {
  margin: 0.75rem 0;
  font-size: 2.5rem;
}

p {
  line-height: 1.2;
  font-size: 1.25rem;
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

.container {
  height: 100%;
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.showcase {
  height: 70vh;
  color: white;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.links {
  margin: 2rem 0;
}

.who-can {
  text-align: center;
  padding: 2rem 0;
}

.who-can h2 {
  color: #508787;
  margin: 1rem 0;
}

.card {
  background: #508787;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 70%;
  padding: 1rem 2rem;
  margin: 2rem auto;
  border-radius: 5px;
}

.card .image {
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50px;
  overflow: hidden;
  padding: 1rem;
  margin: 0 1rem;
}

.date {
  padding: 2rem 0;
  text-align: center;
  background: #508787;
}

.date h2 {
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: #fff;
}

.date .container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}

.date .container div {
  text-align: center;
  padding: 3rem 0rem;
  font-size: 1.5rem;
  line-height: 2;
  background: #ffffff;
  color: #508787;
  border-radius: 5px;
}

.evaluation {
  padding: 2rem 0;
}

.evaluation .container {
  display: flex;
  flex-direction: row;
}

.evaluation h2 {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: #333;
}

.evaluation .container ul {
  flex: 2;
  line-height: 1.2;
  list-style: inside;
  color: #333;
}

.evaluation .container ul li {
  list-style: inherit;
  margin: 1rem 0;
  font-size: 1.1rem;
}

.evaluation .container .evaluation-image {
  flex: 1;
  border-radius: 5px;
  overflow: hidden;
}

.prize {
  padding: 2rem 0;
  text-align: center;
  background: #ffffff;
}

.prize h2 {
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: #508787;
  text-align: center;
}

.prize .container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
}

.prize .container div {
  text-align: center;
  padding: 3rem 1rem;
  font-size: 1.2rem;
  background: #508787;
  color: #ffffff;
  border-radius: 5px;
}

@media only screen and (max-width: 1000px) {
  .prize .container,
  .date .container {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (max-width: 850px) {
  .evaluation .container {
    display: flex;
    flex-direction: column;
  }

  .evaluation .container .evaluation-image {
    flex: 1;
    border-radius: 5px;
    overflow: hidden;
    margin: 1rem 0;
  }
  .card {
    flex-direction: column;
    padding: 2rem;
  }

  .card .image {
    margin-bottom: 1rem;
  }
}

@media only screen and (max-width: 650px) {
  .prize .container,
  .date .container {
    grid-template-columns: 1fr;
  }
}

@media only screen and (max-width: 500px) {
  .card {
    width: 100%;
  }
  .showcase .container {
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .btn {
    margin: 0 5px;
  }
}
</style>