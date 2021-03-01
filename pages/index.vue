<template>
  <main>
    <div class="showcase">
      <div class="container">
        <div class="text-content">
          <p>
            Collecting useful and awesome <strong>O</strong>pen
            <strong>E</strong>ducational <strong>R</strong>esources (OER) <br />
            for Research Methods and Research Ethics
          </p>
          <div class="links">
            <nuxt-link class="btn btn-solid" exact to="/rules">Rubrics</nuxt-link>
            <nuxt-link class="btn btn-outline" to="/aboutoer"
              >About OER</nuxt-link
            >
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
        <div class="left">
          <div class="about">
            <div>
              <blockquote>
                இலகு சீருடை நாற்றிசை நாடுகள் யாவுஞ் சென்று புதுமை கொணர்ந்து
                இங்கே திலக வாணுதலார் தங்கள் பாரத தேசம் ஓங்க உழைத்திடல்
                வேண்டுமாம்
              </blockquote>
              <cite>-பாரதியார்</cite>
            </div>
            <p>
              The legendary poet Bharathi wants us to explore the globe, bring
              all latest knowledge to strengthen the country. We all know the
              famous expression by Sir Isaac Newton “If I have seen further it is by
              standing on the shoulders of Giants”.
            </p>
            <p>
              WeCollect is an effort to literally stand on the shoulders of
              giants and bring back the knowledge from across the globe!!!
              Thanks to the internet and technology, there is so much wealth of
              presentable knowledge that is freely available, curated, and ready
              to be consumed on almost all topics in the world. We do not even
              have to travel to different countries!! However, these rich
              resources are not leveraged by the needy for several reasons -
              lack of a catalog and the difficulty of finding what is needed are
              the most-often cited barriers. Our initiative aims to create a
              repository of all such <nuxt-link to="/aboutoer">Open Educational Resources (OERs)</nuxt-link> related
              to Research Methods relevant for researchers from multiple
              disciplines and multidisciplinary, interdisciplinary and
              transdisciplinary researchers to alleviate the barrier.
            </p>
            <p>
              This is a competition open to all the members of Science departments from Thiruvalluvar University, especially to researchers who are  passionate about Research Methods - inclusive of research supervisors or teaching staff members or doctoral students or an MPhil students. You can <nuxt-link to="/submission">submit</nuxt-link>
              any number of resources. Each submission will be assessed by
              experts based on the <nuxt-link to="/rules">rubrics</nuxt-link>. If you <nuxt-link to="/submission">submit</nuxt-link> more than one
              resource, your score will be the sum of all the scores of your
              submissions. Resources in English or Tamil are only eligible for
              this competition. Other languages are out of scope at this point
              in time.
            </p>
            <p style="background-color: #508787; color: #ffffff; padding: 1rem">
              <strong
                >Any PhD or Post Doctoral student or faculty members  from any Science department can participate in this initiative.</strong
              >
            </p>
            <p>
              <strong
                >Please note, any prohibited content will disqualify your
                candidature.</strong
              >
            </p>
          </div>
          <div class="about">
            <h2>Some Points to be noted for the competition</h2>
            <p>
              For the competition, please do NOT submit the entire <nuxt-link to="/aboutoer">OER</nuxt-link>
              repository. Instead, <nuxt-link to="/submission">submit</nuxt-link> specific content from any such <nuxt-link to="/aboutoer">OER</nuxt-link>
              repository relevant for the identified learning outcomes. For
              example, you can <nuxt-link to="/submission">submit</nuxt-link>
              <strong>
                "Qualitative case study methodology: Study design and
                implementation for novice researchers."
              </strong>
              "The Qualitative Report, 13 (4)" by Baxter, P. & Jack, S. with the
              URL
              <strong
                ><a href="http://www.nova.edu/ssss/QR/QR13-4/baxter.pdf"
                  >http://www.nova.edu/ssss/QR/QR13-4/baxter.pdf</a
                ></strong
              >
              but <strong>NOT</strong> the entire journal or The Quality Report
              / TQR (<a href="https://nsuworks.nova.edu/tqr/"
                >https://nsuworks.nova.edu/tqr/</a
              >) repository as such.
            </p>
            <p>
              When you <nuxt-link to="/submission">submit</nuxt-link> the <nuxt-link to="/aboutoer">OER</nuxt-link>, please specify the type of content
              (reading material, quiz, assignment question etc. ) along with the
              author details. If you are the author, please provide your full
              name, organization. For the example given
              above, the type of content would be "reading material" and the
              author name would be “Pamela Baxter, McMaster University and Susan
              Jack, McMaster University”.
            </p>
          </div>
          <div class="about">
            <h2>Rubrics for Winning</h2>
            <ul>
              <h4><li>Number of OER submitted</li></h4>
              <h4><li>Complexity of the topic</li></h4>
              <h4><li>Uniqueness of the OER</li></h4>
              <h4><li>Clarity of the content</li></h4>
              <h4><li>Expert review based on the <nuxt-link to="/rules">detailed rubrics</nuxt-link></li></h4>
            </ul>
            <div class="rules-links">
              <nuxt-link
                to="/rules/print"
                class="btn btn-solid"
                >Download Rubrics</nuxt-link
              >
            </div>
          </div>
        </div>
        <div class="right">
          <div class="schedule">
            <h3 class="title">Important Dates</h3>
            <div class="date">
              <div class="icon">
                <img src="@/assets/svg/submit.svg" alt="" />
              </div>
              <div class="date-text">
                <h4>Submission Starts</h4>
                <p>2nd March 2021</p>
              </div>
            </div>
            <div class="date">
              <div class="icon">
                <img src="@/assets/svg/submit.svg" alt="" />
              </div>
              <div class="date-text">
                <h4>Submission Ends</h4>
                <p>31st March 2021</p>
              </div>
            </div>
            <div class="date">
              <div class="icon">
                <img src="@/assets/svg/success.svg" alt="" />
              </div>
              <div class="date-text">
                <h4>Results</h4>
                <p>23rd April 2021</p>
              </div>
            </div>
          </div>
          <div class="schedule sponser">
            <h3 class="title">Sponsered By</h3>
            <div class="sponser-image">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/0/0c/TUemblem.png"
                alt=""
              />
            </div>
          </div>
          <div class="schedule">
            <h3 class="title">Winners Get</h3>
            <div class="prize">
              <div class="icon">
                <img src="@/assets/svg/medal.svg" alt="" />
              </div>
              <div class="text">
                <h4>Certificate</h4>
                <p>
                  Certificate Signed by the Vice Chancellor of Thiruvalluvar
                  University
                </p>
              </div>
            </div>
            <div class="prize">
              <div class="icon">
                <img src="@/assets/svg/mentorship.svg" alt="" />
              </div>
              <div class="text">
                <h4>Mentorship</h4>
                <p>
                  Mentoring and networking with international expert researchers
                </p>
              </div>
            </div>
            <div class="prize">
              <div class="icon">
                <img src="@/assets/svg/seo.svg" alt="" />
              </div>
              <div class="text">
                <h4>Research Collaboration</h4>
                <p>
                  Potential research collaboration and MoU with international
                  research communities
                </p>
              </div>
            </div>
          </div>
          <div class="schedule">
            <h3 class="title">Talk With Mentors</h3>
            <div class="mentor">
              <img src="@/assets/img/rory.jpg" alt="" />
              <h4>Dr. Rory McGreal</h4>
              <p>
                UNESCO/International Council for Open and Distance Education
                Chair in Open Educational Resources
              </p>
              <a
                class="btn btn-solid"
                target="_blank"
                href="http://cde.athabascau.ca/ourpeople/faculty/rmcgreal.php"
                >Learn More</a
              >
            </div>
            <div class="mentor">
              <img src="@/assets/img/vivekumar.jpg" alt="" />
              <h4>Dr. Vivekanandan Suresh Kumar</h4>
              <p>
                Associate Dean, Research and Innovation, Faculty of Science and
                Technology, Athabasca University, Canada
              </p>
              <a
                class="btn btn-solid"
                target="_blank"
                href="https://vivek.athabascau.ca/"
                >Learn More</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mail-footer">
      <h2 style="margin-bottom: 0.5rem">
        For any clarification, please contact
      </h2>
      <h2 style="margin-bottom: 0.5rem; text-decoration: underline">
        oercoreteam@googlegroups.com
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

.mentor {
  text-align: center;
}

.rules-links {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;
}

.mentor img {
  width: 50%;
  /* height: 200px; */
  object-fit: cover;
  object-position: bottom;
  margin: 1rem auto;
  display: block;
  border-radius: 10px;
}

.mentor a {
  margin: 1rem 0;
}

.mentor p {
  margin-top: 0.5rem;
  color: #555;
  text-align: center;
}

.link {
  font-weight: bold;
  margin-right: 1rem;
  font-size: 1.15rem;
  color: aliceblue;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.25);
  padding: 0.65rem 1rem;
}

.details .container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.left {
  flex: 1;
  margin-right: 2rem;
}

.right {
  flex: 0.5;
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

.schedule {
  background: white;
  padding: 2rem 2rem;
  margin-bottom: 2rem;
  border-top: #508787 5px solid;
  /* text-align: center; */
}

.schedule .title {
  display: block;
  text-align: center;
  margin-bottom: 1rem;
  color: #555;
  font-size: 1.35rem;
}

.schedule .image {
  width: 180px;
  height: 180px;
  margin: 2rem auto;
}

.schedule .prize {
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 0.5rem 0;
}

.schedule .prize .icon {
  height: 50px;
  width: 50px;
  overflow: hidden;
  /* margin-right: 1.5rem; */
  border-radius: 25px;
  padding: 10px;
  background: whitesmoke;
  margin-bottom: 0.75rem;
}

.prize .text{
  margin-bottom: 0.5rem;
}

.prize .text h4 {
  font-size: 1.05rem;
  margin-bottom: 4px;
  color: #508787;
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

.date-text h4 {
  font-size: 1.05rem;
  margin-bottom: 4px;
  color: #508787;
}

.date-text p,
.prize p {
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
  height: 50vh;
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
  font-size: 1.5rem;
  color: #ffffff;
}

.btn {
  padding: 0.45rem 0.85rem;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  margin-right: 1rem;
  border-radius: 5px;
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

.mail-footer {
  text-align: center;
  padding: 1rem 0;
  background: #508787;
  color: #ffffff;
}

.back-to-top {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.sponser-image {
  width: 80%;
  margin: auto;
}

.sponser {
  display: none;
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
  .about {
    text-align: left;
  }
  .date{
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  .date .icon{
    margin: 1rem 0;
  }
  .showcase .container {
    justify-content: center;
  }
}

@media only screen and (max-width: 800px) {
  .details .container {
    flex-direction: column;
    text-align: center;
  }
  .image {
    display: none;
  }
  .sponser {
    display: block;
  }
  .left {
    margin: 0;
  }
  .text-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .text-content p {
    text-align: center;
  }
}
</style>