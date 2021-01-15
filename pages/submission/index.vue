<template>
  <div class="submission">
    <Modal
      v-show="showModal"
      :title="modalTitle"
      :message="modalMessage"
      :type="modalType"
      :callback="closeModal"
    />
    <h2 class="form-title">Please fill out this form to add your submission</h2>
    <div class="container">
      <form class="form" @submit.prevent="saveWork">
        <h2 class="form-group-title">Personal Information</h2>
        <div class="form-group grid-cols-2">
          <AppTextInput
            type="text"
            name="first-name"
            label="First Name"
            v-model="formData.firstName"
          />
          <AppTextInput
            type="text"
            name="last-name"
            label="Last Name"
            v-model="formData.lastName"
          />
          <div class="email-group">
            <AppTextInput
              type="email"
              name="email"
              label="Email"
              v-model="formData.email"
            />

            <button type="button" class="btn btn-solid" @click="verifyEmail">
              verifyEmail
            </button>
          </div>
          <AppTextInput
            type="text"
            name="department"
            label="Department"
            v-model="formData.department"
          />
          <AppTextInput
            type="text"
            name="university"
            label="University"
            v-model="formData.university"
          />

          <div class="input-select-group">
            <label for="designation">Designation</label>
            <select required id="designation" v-model="formData.status">
              <option value="" selected disabled>Please Select a Value</option>
              <option value="M.Phil Student">M.Phil Student</option>
              <option value="PhD Student">Ph.D Student</option>
              <option value="Post Doctoral Student">
                Post Doctoral Student
              </option>
              <option value="Faculty Member">Faculty Memeber</option>
            </select>
          </div>
        </div>

        <div class="f-t-g">
          <h2 class="form-group-title">Open Educational Resource(OER)</h2>
          <div class="oer-control"></div>
        </div>

        <div
          class="oer-group form-group grid-cols-1"
          v-for="(oer, index) in formData.oers"
          :key="index"
        >
          <div class="new-oer-header">
            <h3>Material {{ index + 1 }}</h3>
            <button
              class="btn btn-red"
              type="button"
              v-if="formData.oers.length > 1"
              @click="() => removeThisOer(index)"
            >
              Remove
            </button>
          </div>
          <AppTextInput
            type="text"
            name="title"
            label="Title of OER"
            v-model="oer.title"
          />

          <AppTextInput
            type="url"
            name="material-url"
            label="Url of OER"
            v-model="oer.url"
          />

          <div class="input-select-group">
            <label for="type">Type of OER</label>
            <select required id="type" v-model="oer.type">
              <option value="" selected disabled>Please Select A Type</option>
              <option value="Reading material">Reading material</option>
              <option value="Quiz">Quiz</option>
              <option value="Assignment question">Assignment question</option>
              <option value="Video">Video</option>
              <option value="Audio">Audio</option>
              <option value="Animation">Animation</option>
              <option value="Simulation">Simulation</option>
              <option value="Augmented Reality content">
                Augmented Reality content
              </option>
              <option value="Virtual Reality content">
                Virtual Reality content
              </option>
              <option value="Blog">Blog</option>
              <option value="Social Media Content">Social Media Content</option>
              <option value="0">Others (Specify Below)</option>
            </select>
          </div>

          <AppTextInput
            v-if="oer.type === '0'"
            type="textarea"
            name="others"
            label="Others"
            v-model="oer.otherType"
          />

          <div class="two-input">
            <AppTextInput
              type="text"
              name="material-url"
              label="Author First Name"
              v-model="oer.authorFname"
            />
            <AppTextInput
              type="text"
              name="material-url"
              label="Author Last Name"
              v-model="oer.authorLname"
            />
          </div>

          <AppTextInput
            type="text"
            name="material-url"
            label="Organization"
            v-model="oer.authorOrg"
          />

          <div class="input-select-group">
            <label for="unit">Unit</label>
            <select required id="unit" v-model="oer.unit">
              <option value="" selected disabled>
                Please Select A Unit to View Outcomes
              </option>
              <option value="1">Unit 1 - Research</option>
              <option value="2">Unit 2 - Research Ethics</option>
              <option value="3">Unit 3 - Experimental Research</option>
              <option value="4">Unit 4</option>
              <option value="5">Unit 5 - Research Writing</option>
            </select>
          </div>

          <div class="input-check-group" v-if="oer.unit !== ''">
            <label>Outcomes</label>
            <div
              class="checkbox"
              v-for="outcome in outcomes(oer.unit)"
              :key="outcome.id"
            >
              <input
                type="checkbox"
                :id="outcome.id"
                :value="outcome.value"
                v-model="oer.outcomes"
              />
              <label :for="outcome.id">{{ outcome.value }}</label>
            </div>
          </div>

          <AppTextInput
            type="textarea"
            name="description"
            label="Description"
            v-model="oer.desc"
          />

          <hr />
        </div>
        <p style="margin-bottom: 20px; text-align: left; font-weight: bold">
          I confirm that the OER entry submitted by me
        </p>
        <div class="decleration_wrapper">
          <div class="points">
            <div class="decleration">
              <input
                type="checkbox"
                name="dec"
                id="dec1"
                :value="1"
                v-model="allowSubmit"
              />
              <label for="dec1"
                >Does <strong>NOT</strong> contain any adult content</label
              >
            </div>
            <div class="decleration">
              <input
                type="checkbox"
                name="dec"
                id="dec2"
                :value="2"
                v-model="allowSubmit"
              />
              <label for="dec2"
                >Does <strong>NOT</strong> contain any religious and political
                content</label
              >
            </div>
            <div class="decleration">
              <input
                type="checkbox"
                name="dec"
                id="dec3"
                :value="3"
                v-model="allowSubmit"
              />
              <label for="dec3"
                >Does <strong>NOT</strong> contain any discriminative /
                anti-social content is permissible</label
              >
            </div>
            <div class="decleration">
              <input
                type="checkbox"
                name="dec"
                id="dec4"
                :value="4"
                v-model="allowSubmit"
              />
              <label for="dec4"
                >Does <strong>NOT</strong> contain any gender bias / racial bias
                content</label
              >
            </div>
            <div class="decleration">
              <input
                type="checkbox"
                name="dec"
                id="dec5"
                :value="5"
                v-model="allowSubmit"
              />
              <label for="dec5"
                >Does <strong>NOT</strong> contain any other forms for
                prohibited contents</label
              >
            </div>
          </div>
        </div>

        <div class="form-controls">
          <ButtonPrimary
            type="submit"
            title="Submit"
            v-if="allowSubmit.length === 5"
          />
          <button type="button" class="btn btn-solid" @click="addOer">
            Add OER
          </button>
          <ButtonOutline type="reset" title="Reset" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AppTextInput from "@/components/AppTextInput";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonOutline from "@/components/ButtonOutline";
import Modal from "@/components/Modal";
import outcomesJson from "@/assets/data/outcome.json";
import { fireDb, fireAuth } from "~/plugins/firebase.js";

export default {
  components: {
    AppTextInput,
  },
  data() {
    return {
      allowSubmit: [],
      showModal: false,
      modalTitle: "",
      modalMessage: "",
      modalType: "",
      formData: {
        firstName: "",
        lastName: "",
        department: "",
        status: "",
        university: "",
        email: "",
        oers: [
          {
            title: "",
            url: "",
            desc: "",
            outcomes: [],
            unit: "",
            type: "",
            authorFname: "",
            authorLname: "",
            otherType: "",
            authorOrg: "",
          },
        ],
        number: 1,
      },
    };
  },
  methods: {
    async saveWork() {
      await fireDb
        .collection("Work")
        .add(this.formData)
        .then((docRef) => {
          console.log("Work added: ", docRef.id);
          this.modalTitle = "Success";
          this.modalMessage = "Form has been submitted";
          this.modalType = "success";
          this.showModal = true;
        })
        .catch((error) => {
          console.error("Error adding Work: ", error);
          alert("Unable to save submission try again later");
          this.modalTitle = "Error";
          this.modalMessage = "Unable to submit the form. Try again";
          this.modalType = "error";
          this.showModal = true;
        });
    },
    async getData() {
      const Ref = fireDb.collection("Work");
      const snapshot = await Ref.get();
      if (snapshot.empty) {
        console.log("No matching documents.");
        return;
      }

      snapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      });
    },
    async verifyEmail() {
      if(fireAuth.currentUser){
        console.log("Loggin out")
        await fireAuth.signOut();
        this.verifyEmail();
      }
      else{
      await fireAuth.signInAnonymously().then(() => {
        if (fireAuth.currentUser.emailVerified === false) {
          fireAuth.currentUser.updateEmail(this.formData.email).then(() => {
            fireAuth.currentUser.sendEmailVerification();
            console.log("GG");
          });
        } else {
          console.log("no GG");
        }
        
      });
      }

    },
    addOer() {
      this.formData.number += 1;
      this.formData.oers.push({
        title: "",
        url: "",
        desc: "",
        outcomes: [],
        unit: "",
      });
    },
    removeOer() {
      if (this.formData.number === 1) {
        return;
      }
      this.formData.number -= 1;
      this.formData.oers.pop();
    },
    outcomes(unit) {
      if (unit === "") {
        return null;
      } else {
        console.log(outcomesJson[unit]);
        return outcomesJson[unit];
      }
    },
    removeThisOer(index) {
      if (this.formData.oers.length !== 1) this.formData.oers.splice(index, 1);
    },
    closeModal() {
      this.showModal = false;
      this.$router.push("/");
    },
  },

  computed: {
    
  },
};
</script>

<style scoped>
hr {
  border: 0;
  border-bottom: 1px dashed #ccc;
  background: #999;
}

.email-group button {
  margin: 0.75rem 2rem;
}

.oer-group {
  padding: 1rem 0;
}

.oer-group h3 {
  color: #333;
  text-align: center;
}

.submission {
  padding: 1rem 0;
}

.oer-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.btn {
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

.btn-solid {
  border: 2px #508787 solid;
  background: #508787;
  color: white;
}

.btn-red {
  border: none;
  color: white;
  background: rgb(255, 63, 29);
  margin-left: 1rem;
}

.f-t-g {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.submission .form-title {
  text-align: center;
  color: #333;
  margin: 1rem;
  margin-bottom: 4rem;
}
.container {
  width: 60%;
  margin: 0 auto;
}

.form-group-title {
  margin: 1rem 0;
  color: #333;
}

.two-input {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.input-select-group,
.input-check-group {
  margin: 0.75rem 2rem;
}

.input-select-group select:hover {
  border: 1px solid cadetblue;
}

.input-select-group select:focus {
  border: 1px solid cadetblue;
  box-shadow: 0px 0px 0px 3px rgba(95, 158, 160, 0.3);
}

.input-select-group label,
.input-check-group label {
  display: inline-block;
  color: #333;
  margin-bottom: 0.5rem;
  line-height: 1.5;
  font-size: 1.05rem;
}

.checkbox {
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.checkbox label {
  margin: 0 1rem;
}

.input-select-group select {
  border: 1px solid rgba(51, 51, 51, 0.5);
  padding: 0.35rem 0.5rem;
  color: #222;
  width: 100%;
  border-radius: 3px;
  font-size: 1.05rem;
  resize: vertical;
}

.grid-cols-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.grid-cols-1 {
  display: grid;
  grid-template-columns: 1fr;
}

.form-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
}

.decleration_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #555;
}
.decleration {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #555;
}

.decleration input {
  margin: 0 10px;
}

.new-oer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.submission{
  width: 100%;
}

@media only screen and (max-width: 1050px) {
  .container {
    width: 80%;
  }
}
@media only screen and (max-width: 900px) {
  .container {
    width: 90%;
  }
}
@media only screen and (max-width: 700px) {
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
  .input-select-group,
  .input-check-group {
    margin: 0.75rem 1rem;
  }
}
</style>