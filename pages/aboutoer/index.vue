<template>
  <main>
    <div class="details">
      <div class="container">
        <div class="left">
          <div class="about">
            <h2>Some Information on OER</h2>
            <p>
              OER stands for "Open Educational Resources" and is associated with
              an educational movement that began about 20 years ago and has
              become a global educational movement. The open provision of
              educational resources, enabled by Information and Communication
              Technologies (ICT), for consultation, use and adaptation by the
              community of users for non-commercial purposes. OER are digitised
              materials offered freely and openly for educators, students and
              self learners to use and reuse for teaching, learning and
              research.
            </p>
            <p>
              The resource should be either in the public domain or released
              with an open license. An OPEN license is a type of license that
              grants permission to access, re-use and redistribute a work with
              few or no restrictions. These resources include complete online
              courses, course materials, modules, textbooks, streaming videos,
              tests, assessment tools, software, many other tools, materials &
              techniques that are useful for teaching, learning, as well as for
              research purposes.
            </p>
            <p>
              The terms “open content” and “open educational resources” describe
              any copyrightable work that is either (1) in the public domain or
              (2) licensed in a manner that provides users with free and
              perpetual permission to engage in the 5R activities:
            </p>
            <ul>
              <li>
                Retain – the right to make, own, and control copies of the
                content (e.g., download, duplicate, store, and manage)
              </li>
              <li>
                Reuse – the right to use the content in a wide range of ways
                (e.g., in a class, in a study group, on a website, in a video)
              </li>
              <li>
                Revise – the right to adapt, adjust, modify, or alter the
                content itself (e.g., translate the content into another
                language)
              </li>
              <li>
                Remix – the right to combine the original or revised content
                with other material to create something new (e.g., incorporate
                the content into a mash up)
              </li>
              <li>
                Redistribute – the right to share copies of the original
                content, your revisions, or your remixes with others (e.g., give
                a copy of the content to a friend)
              </li>
            </ul>
            <p>
              Example: <strong>MOOCS</strong>: MOOCs stands for Massive Open
              Online Courses. These are free online courses and any individual
              can enroll. MOOCs offer a wide range of courses in many different
              subjects for individuals to be able to evolve their knowledge and
              education in an affordable and easy manner.
            </p>
            <p>
              Many materials casually recognized as OER, technically, do not
              fall into that category. For example, a video that has a creative
              commons license might not necessarily be open; the agreement may
              instead allow it to be freely used but not altered or repurposed.
              . Other materials allow sharing and modifications but only within
              a paid subscription service. Materials thus restricted in one or
              more of the 5R aspects would not be considered OER.
            </p>
            <p>
              That does not mean OER has to be completely nonprofit. To make
              ongoing OER projects sustainable, some have allowed companies to
              offer organized “playlists” or other curated packages of materials
              for a fee. projects, such as the SciShow series on YouTube, allow
              donations through patronage websites such as Patreon and Subable.
            </p>
            <p>
              Inspired by an open source license move in the world of computing
              in 2001, a group of experts comprised of educators, technologists,
              legal scholars, investors, entrepreneurs, and philanthropists
              formed a not-for-profit organization called Creative Commons and
              developed the first set of open licenses in 2002. This brought a
              much needed clarity about sharing materials online.
            </p>
            <p>
              For more information on OERs, please refer to the
              <a
                target="_Blank"
                href="https://www.oercommons.org/static/staticpages/documents/FAQ-OER-K-12.pdf?f923a5a5e335"
                >FAQ link</a
              >.
            </p>
          </div>
          <div class="about">
            <h2>Some Example OER repositories</h2>
            <ul>
              <li>
                <a href="https://www.library.umass.edu/oer/oer-repositories/"
                  >https://www.library.umass.edu/oer/oer-repositories/</a
                >
              </li>
              <li>
                <a href="https://pitt.libguides.com/openeducation/biglist"
                  >https://pitt.libguides.com/openeducation/biglist</a
                >
              </li>
              <li>
                <a href="https://osf.io/">https://osf.io/</a>
              </li>
              <li>
                <a
                  href="https://open.bccampus.ca/browse-our-collection/find-open-textbooks/"
                  >https://open.bccampus.ca/browse-our-collection/find-open-textbooks/</a
                >
              </li>
              <li>
                <a href="https://www.oerknowledgecloud.org/"
                  >https://www.oerknowledgecloud.org/</a
                >
              </li>
              <li>
                <a href="https://unesdoc.unesco.org/home"
                  >https://unesdoc.unesco.org/home</a
                >
              </li>
              <li>
                <a href="https://open.umn.edu/opentextbooks/"
                  >https://open.umn.edu/opentextbooks/</a
                >
              </li>
            </ul>
          </div>
          <div class="about">
            <h2>Some Useful References / Inputs</h2>
            <ul>
              <li>
                <a href="https://libguides.pvcc.edu/oers/home"
                  >Open Educational Resources Playbook</a
                >
              </li>
              <li>
                <a href="https://pressbooks.bccampus.ca/facultyoertoolkit/"
                  >Faculty OER Toolkit</a
                >
              </li>
              <li>
                Use Google smartly with
                <a href="http://www.google.com/advanced_search"
                  >http://www.google.com/advanced_search</a
                >
              </li>
              <li>
                <a
                  href="https://courses.lumenlearning.com/suny-oercommunitycourse-understandingoer/"
                  >Understanding OER</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  width: 70%;
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
}

@media only screen and (max-width: 800px) {
  .details .container {
    flex-direction: column;
  }
}
</style>