<template>
  <main>
    <div class="container eval">
      <h2>Rubrics for Winning</h2>
      <ul>
        <li>
          <p>
            Number of OERs submitted by the student that meet the OER criteria:
            this is just the number of entries submitted by the student
          </p>
        </li>
        <li>
          <p>Complexity of the topic covered by the OER</p>
          <ul>
            <li><p>Not relevant - 0 points</p></li>
            <li><p>Basic introduction type of OER - gets 5 points</p></li>
            <li><p>Intermediate level OER - 10 points</p></li>
            <li><p>Advanced OER gets 15 points</p></li>
            <li><p>Not open content or ethical violation- -5 points</p></li>
          </ul>
        </li>
        <li>
          <p>Uniqueness of the OER</p>
          <ul>
            <li><p>No other student has submitted the same OER - 15 points</p></li>
            <li><p>Less than 10% of participants submitted the same OER - 10 points</p></li>
            <li><p>Less than 25% of participants submitted the same OER - 5 points</p></li>
            <li><p>More than 50% of participants submitted the same OER - 0 points</p></li>
          </ul>
        </li>
        <li>
          <p>
            Depth of knowledge expressed in the topic (added as per Dr Selvi’s
            suggestion)
          </p>
          <ul>
              <li><p>Blooms level 1</p></li>
              <li><p>Blooms level 2</p></li>
              <li><p>Blooms level 3</p></li>
              <li><p>Blooms level 4</p></li>
              <li><p>Blooms level 5</p></li>
          </ul>
        </li>
        <li><p>Votes received by the OER by peers</p></li>
        <li><p>Expert review rating</p></li>
        <li><p>Number of fair reviews provided by the student</p></li>
      </ul>
    </div>
    <div class="container self-eval">
      <h2>OER Self Evaluation Criteria for Declaration</h2>
      <ul>
          <li><p>Matches one of the Learning outcomes for Research Methods or Research Ethics for the syllabus attached below</p></li>
          <li><p>Easy to understand</p></li>
          <li><p>Reputation of the authors and/or the organizations</p></li>
          <li><p>Suitable for masters and doctoral students</p></li>
          <li><p>Good aesthetics</p></li>
          <li><p>Level of interactiveness</p></li>
          <li><p>Coverage of the learning outcome</p></li>
          <li><p>Submission has APA Reference format</p></li>
          <li><p>Does not contain any prohibited or adult content</p></li>
          <li><p>No religious and political content permissible</p></li>
          <li><p>No discriminative / anti-social content is permissibl</p></li>
          <li><p>No gender bias is introduced thru the content</p></li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
main{
    padding: 1rem 0;
}
.container {
  width: 60%;
  color: #333;
  margin: auto;
  padding: 2rem 0;
}

.container h2 {
  margin-bottom: 1rem;
}

.container ul {
  list-style: numbers;
  margin-left: 2rem;
  font-size: 1.05rem;
  line-height: 1.8;
}

.container ul li {
  list-style: numbers;
}

@media only screen and (max-width:900px){
    .container{
        width: 80%;
    }
}

@media only screen and (max-width:500px){
    .container{
        width: 90%;
    }

    ul{
        margin: 0;
    }
}
</style>