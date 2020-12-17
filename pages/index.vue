<template>
  <main>
    <div class="showcase">
      <div class="container">
        <h1>WeCollect</h1>
        <p>Collecting useful and awesome <strong>O</strong>pen <strong>E</strong>ducational <strong>R</strong>esources (OER)</p>
        <p>for research methods and research ethics</p>
        <div class="links">
          <nuxt-link class="btn btn-solid" exact to="/submission"
            >Participate</nuxt-link
          >
          <nuxt-link
            class="btn btn-outline"
            exact
            to="/"
            v-scroll-to="{ element: '#learn-more', offset: -80 }"
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
            <p>Any Mphil or doctoral students from any department</p>
          </div>
          <div class="card">
            <div class="image">
              <img src="@/assets/graduate.svg" alt="" />
            </div>
            <p>Any faculty members who are in early stages of their career</p>
          </div>
        </div>
      </div>
    </div>

    <div class="date">
      <h2>Important Dates</h2>
      <div class="container">
        <div>
          <div class="image">
            <img src="@/assets/submit.svg" alt="" />
          </div>
          <h3>Submisson</h3>
          <p>20th Dec to 20th Jan</p>
        </div>
        <div>
          <div class="image">
            <img src="@/assets/vote.svg" alt="" />
          </div>
          <h3>Review and Rate</h3>
          <p>20th Jan to 10th Feb</p>
        </div>
        <div>
          <div class="image">
            <img src="@/assets/success.svg" alt="" />
          </div>
          <h3>Results</h3>
          <p>27th Feb</p>
        </div>
      </div>
    </div>

    <div class="evaluation">
      <h2>Rubrics For Winning</h2>
      <div class="container">
        <div class="criteria">
          <div>
            <p>Number of OER submitted</p>
          </div>
          <div>
            <p>Complexity of the topic</p>
          </div>
          <div>
            <p>Uniqueness of the OER</p>
          </div>
          <div>
            <p>Depth of knowledge expressed</p>
          </div>
          <div>
            <p>Votes and reviews recieved</p>
          </div>

          <div class="btn-group">
            <nuxt-link class="btn btn-solid" exact to="/rules"
            >More Details</nuxt-link>
            <nuxt-link class="btn btn-outline" exact to="/rules"
            >Download</nuxt-link
          >
          </div>
          <!-- <nuxt-link class="btn btn-solid" exact to="/rules">Download</nuxt-link> -->
        </div>
        <div class="evaluation-image">
          <img src="@/assets/winning.jpg" alt="" />
        </div>
      </div>
    </div>

    <div class="prize">
      <h2>Get a Chance to Win</h2>
      <div class="bg"></div>
      <div class="container">
        <div class="prize-card">
          <div class="prize-card-top">
            <img src="@/assets/cetf.jpg" alt="" />
          </div>
          <div class="prize-card-bottom">
            <h3>Certificate</h3>
            <p>
              Certificate Signed by the Vice Chancellor of Thiruvalluvar
              University
            </p>
          </div>
        </div>
        <div class="prize-card">
          <div class="prize-card-top">
            <img src="@/assets/mentor.jpg" alt="" />
          </div>
          <div class="prize-card-bottom">
            <h3>Mentorship</h3>
            <p>
              Interaction with international researchers and networking with
              international expert researchers
            </p>
          </div>
        </div>
        <div class="prize-card">
          <div class="prize-card-top">
            <img src="@/assets/sponser.jpg" alt="" />
          </div>
          <div class="prize-card-bottom">
            <h3>Sponsorship</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              iusto!
            </p>
          </div>
        </div>
        <div class="prize-card">
          <div class="prize-card-top">
            <img src="@/assets/reward.jpg" alt="" />
          </div>
          <div class="prize-card-bottom">
            <h3>Cash Prize</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              iusto!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="talk">
      <h2>Talk With Mentors</h2>
      <div class="container">
        <div class="mentor">
          <div class="top">
            <img src="@/assets/mentor 1.jpg" alt="" />
          </div>
          <div class="bottom">
            <h3>Dr. Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, impedit?
            </p>
          </div>
        </div>
        <div class="mentor">
          <div class="top">
            <img src="@/assets/mentor 1.jpg" alt="" />
          </div>
          <div class="bottom">
            <h3>Dr. Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, impedit?
            </p>
          </div>
        </div>
        <div class="mentor">
          <div class="top">
            <img src="@/assets/mentor 1.jpg" alt="" />
          </div>
          <div class="bottom">
            <h3>Dr. Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, impedit?
            </p>
          </div>
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
  border: 2px #508787 solid;
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
  position: relative;
  text-align: center;
  padding: 3rem 0rem;
  font-size: 1.5rem;
  line-height: 2;
  background: #ffffff;
  color: #508787;
  border-radius: 5px;
  margin-top: 40px;
}

.date .container div .image {
  width: 80px;
  height: 80px;
  background: #f4f4f4;
  border-radius: 50px;
  overflow: hidden;
  padding: 1rem;
  margin: 0 1rem;
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-70%);
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

.evaluation .container .criteria {
  flex: 1;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.evaluation .container .criteria div:nth-child(even) {
  color: #508787;
  background: #fff;
}

.evaluation .container .criteria div {
  background: #71bdbd;
  color: #fff;
  padding: 0.75rem;
  width: 100%;
  border-radius: 3px;
}

.evaluation .btn-group{
  background: transparent !important;
  text-align: center;
}

.evaluation .container .criteria a {
  margin: 1rem 0;
  align-self: center;
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
  position: relative;
  z-index: 100;
}

.prize .bg{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background: #508787;
  z-index: 5;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
}

.prize h2 {
  position: relative;
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: #fff;
  text-align: center;
  z-index: 200;
}

.prize .container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  z-index: 20;
  position: relative;
}

.prize .container .prize-card {
  text-align: center;
  font-size: 1.2rem;
  border-radius: 5px;
  color: #333;
  overflow: hidden;
  border: 1px solid #ddd;
}

.prize-card .prize-card-top {
  height: 180px;
}

.prize-card .prize-card-bottom {
  text-align: center;
  padding: 1.15rem 1.15rem;
  background: #ffffff;
  position: relative;
}

.prize-card-bottom h3 {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 1rem;
}

.prize-card-bottom p {
  font-size: 1rem;
  color: #999;
}

.talk {
  padding: 2rem 0;
}

.talk .container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}

.talk h2 {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: #333;
}

.mentor {
  padding: 1.5rem;
  background: #fff;
  border: #ddd solid 1px;
  border-radius: 5px;
}

.mentor .top img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto;
}

.mentor .top {
  text-align: center;
}

.mentor .bottom {
  text-align: center;
  position: relative;
}

.mentor .bottom h3 {
  margin: 1rem 0;
  font-size: 1.2rem;
}

.mentor .bottom p {
  font-size: 1rem;
  color: #999;
}

@media only screen and (max-width: 1000px) {
  .prize .container,
  .date .container,
  .talk .container {
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

  .evaluation .container .criteria {
    padding: 0;
  }
}

@media only screen and (max-width: 650px) {
  .prize .container,
  .date .container,
  .talk .container {
    grid-template-columns: 1fr;
  }
  .container {
    width: 90%;
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