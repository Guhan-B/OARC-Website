<template>
  <main>
    <div class="details">
      <div class="container">
        <div class="left">
          <div class="about">
            <h2>Rubrics for Winning</h2>
            <ul>
              <li>
                Number of OERs submitted by the student that meet the OER
                criteria: this is just the number of entries submitted by the
                student
              </li>
              <li>
                Complexity of the topic covered by the OER
                <ul>
                  <li>Not relevant - 0 points</li>
                  <li>Basic introduction type of OER - gets 5 points</li>
                  <li>Intermediate level OER - 10 points</li>
                  <li>Advanced OER gets 15 points</li>
                  <li>Not open content or ethical violation- -5 points</li>
                </ul>
              </li>
              <li>
                <p>Uniqueness of the OER</p>
                <ul>
                  <li>
                    No other student has submitted the same OER - 15 points
                  </li>
                  <li>
                    Less than 10% of participants submitted the same OER - 10
                    points
                  </li>
                  <li>
                    Less than 25% of participants submitted the same OER - 5
                    points
                  </li>
                  <li>
                    More than 50% of participants submitted the same OER - 0
                    points
                  </li>
                </ul>
              </li>
              <li>
                Depth of knowledge expressed in the topic (added as per Dr
                Selvi’s suggestion)

                <ul>
                  <li>Blooms level 1</li>
                  <li>Blooms level 2</li>
                  <li>Blooms level 3</li>
                  <li>Blooms level 4</li>
                  <li>Blooms level 5</li>
                </ul>
              </li>
              <li>Votes received by the OER by peers</li>
              <li>Expert review rating</li>
              <li>Number of fair reviews provided by the student</li>
            </ul>
          </div>
          <div class="about">
            <h2>OER Self Evaluation Criteria for Declaration</h2>
            <ul>
              <li>
                Matches one of the Learning outcomes for Research Methods or
                Research Ethics for the syllabus attached below
              </li>
              <li>Easy to understand</li>
              <li>Reputation of the authors and/or the organizations</li>
              <li>Suitable for masters and doctoral students</li>
              <li>Good aesthetics</li>
              <li>Level of interactiveness</li>
              <li>Coverage of the learning outcome</li>
              <li>Submission has APA Reference format</li>
              <li>Does not contain any prohibited or adult content</li>
              <li>No religious and political content permissible</li>
              <li>No discriminative / anti-social content is permissibl</li>
              <li>No gender bias is introduced thru the content</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  width: 100%;
  margin: auto;
}

.details .container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.left {
  flex: 1;
}

a {
  color: #508787;
}

.about {
  padding: 2rem;
  color: #333;
  border-top: #508787 5px solid;
  margin-bottom: 2rem;
  background: white;
}

.about h2 {
  margin-bottom: 2rem;
}

.about p {
  line-height: 1.8;
  font-size: 1.025rem;
  margin-block: 1rem;
}

.about p a {
  color: #508787;
}

.about blockquote {
  color: #508787;
  font-weight: bold;
}

.about cite {
  text-align: right;
  margin-top: 0.75rem;
  display: block;
  color: #508787;
}

.about ul {
  margin-left: 2rem;
  line-height: 1.8;
  list-style: decimal;
}

.about ul li {
  list-style: decimal;
  list-style-position: inside;
}

.details .container {
  padding: 2rem 0;
}


@media only screen and (max-width: 1160px) {
  .container {
    width: 90%;
  }
}

@media only screen and (max-width: 950px) {
  .container {
    width: 95%;
  }

  .showcase .container {
    justify-content: center;
  }
}

@media only screen and (max-width: 800px) {
  .details .container {
    flex-direction: column;
  }
}
</style>