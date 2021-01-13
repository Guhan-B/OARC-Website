<template>
  <main>
    <div class="showcase">
      <div class="container">
        <div class="text-content">
          <h1>WeCollect</h1>
          <p>
            Collecting useful and awesome <strong>O</strong>pen
            <strong>E</strong>ducational <strong>R</strong>esources (OER) <br />
            for research methods and research ethics
          </p>
          <div class="links">
            <nuxt-link class="btn btn-solid" exact to="/submission"
              >Participate</nuxt-link
            >
            <nuxt-link class="btn btn-outline" to="/">About OER</nuxt-link>
          </div>
        </div>
        <div class="image">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/0/0c/TUemblem.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="details">
      <div class="container">
        <div class="who-can">
          <h2 style="color: #555; font-size: 1.65rem">Who Can Participate</h2>
          <div class="elegibility">
            <div class="el">
              <div class="icon">
                <img src="@/assets/svg/graduate.svg" alt="" />
              </div>
              <p class="text">
                Any MPhil or PhD or Post Doctoral student from any department
              </p>
            </div>
            <div class="el">
              <div class="icon">
                <img src="@/assets/svg/faculty.svg" alt="" />
              </div>
              <p class="text">
                Any faculty members who are in early stages of their career
              </p>
            </div>
          </div>
        </div>
        <div class="schedule">
          <h3 class="title">Important Dates</h3>
          <div class="date">
            <div class="icon"><img src="@/assets/svg/submit.svg" alt="" /></div>
            <div class="date-text">
              <h3>Submission Starts</h3>
              <p>27th January 2020</p>
            </div>
          </div>
          <div class="date">
            <div class="icon"><img src="@/assets/svg/submit.svg" alt="" /></div>
            <div class="date-text">
              <h3>Submission Ends</h3>
              <p>27th January 2020</p>
            </div>
          </div>
          <div class="date">
            <div class="icon">
              <img src="@/assets/svg/success.svg" alt="" />
            </div>
            <div class="date-text">
              <h3>Results</h3>
              <p>27th January 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mail-footer">
      <h2 style="margin-bottom: 0.5rem">
        For Any Clarification, Please Contact
      </h2>
      <h2 style="margin-bottom: 0.5rem; text-decoration: underline">
        sample@gmail.com
      </h2>
    </div>
  </main>
</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
.container {
  width: 70%;
  margin: auto;
}

.details .container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.schedule {
  background: white;
  padding: 0.5rem 2rem;
  align-self: stretch;
  border-top: #508787 5px solid;
}

.schedule .title {
  text-align: center;
  margin: 1rem 0;
  color: #555;
  font-size: 1.35rem;
}

.schedule .date {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
}

.date .icon {
  height: 50px;
  width: 50px;
  overflow: hidden;
  margin-right: 1.5rem;
  border-radius: 25px;
  padding: 10px;
  background: whitesmoke;
}

.date-text h3 {
  font-size: 1.05rem;
  font-weight: 500;
  margin-bottom: 4px;
}

.date-text p {
  color: #555;
  font-size: 0.9rem;
}

.elegibility .el {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 2rem;
  background: #508787;
  color: #ffffff;
  font-size: 1.1rem;
  margin-top: 2rem;
}

.elegibility .el .icon {
  width: 50px;
  height: 50px;
  overflow: hidden;
  margin-right: 1rem;
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

.showcase .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.showcase .text-content {
  text-align: left;
  line-height: 1.5;
}

.showcase .text-content h1 {
  font-size: 2.25rem;
}

.showcase .text-content p {
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  font-size: 1.15rem;
  color: #ffffffdd;
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

.details .container {
  padding: 2rem 0;
}

.mail-footer{
  text-align: center;
  padding: 1rem 0;
  background: #508787;
  color: #ffffff;
}
</style>