<template>
  <div class="submission">
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
              @input="emailChanging"
            />
            <button
              v-if="!emailVerified"
              type="button"
              class="btn btn-solid"
              @click="verifyEmail"
            >
              Verify Your Email
            </button>
          </div>
          <div class="email-group">
            <AppTextInput
              type="text"
              name="otp"
              label="Enter OTP"
              v-model="enteredOTP"
            />
            <button
              :disabled="emailVerified"
              type="button"
              class="btn btn-solid"
              @click="verifyOTP"
            >
              {{ emailVerified ? "OTP Verified" : "Verfiy OTP" }}
            </button>
          </div>
          <div style="grid-column: span 2">
            <AppTextInput
              type="text"
              name="department"
              label="Department"
              v-model="formData.department"
            />
          </div>
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
              <option value="Faculty Member">Faculty Member</option>
            </select>
          </div>
        </div>

        <div class="file-grp">
          <label for="photo">Select a bonafide certificate</label>
          <div>
            <input class="file" type="file" id="photo" />
            <button
              type="button"
              class="btn btn-solid"
              @click.prevent="uploadImage"
            >
              Upload Image
            </button>
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
            type="text"
            name="others"
            label="Others"
            v-model="oer.otherType"
          />

          <div class="input-select-group">
            <label for="unit">Subject</label>
            <select required id="department" v-model="oer.subject" @change="() => {
                oer.unit = ''
              }">
              <option value="" selected disabled>
                Please Select A Subject to View Units
              </option>
              <option value="methods">Research Methods for Science</option>
              <option value="ethics">Research Publication Ethics</option>
            </select>
          </div>

          <div class="input-select-group" v-if="oer.subject !== ''">
            <label for="unit">Unit</label>
            <select required id="unit" v-model="oer.unit">
              <option value="" selected disabled>
                Please Select A Unit to View Outcomes
              </option>
              <option
                v-for="unit in units(oer.subject)"
                :key="unit.id"
                :value="unit.id"
              >
                {{ unit.unit }}
              </option>
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
            label="Description - Please provide a summary (within 250 words) on what is covered in the OER"
            v-model="oer.desc"
          />

          <AppTextInput
            type="textarea"
            name="note"
            label="Optional notes to the reviewer or the organizing committee (max 250 words)"
            v-model="oer.note"
            :req="false"
          />

          <div class="two-input">
            <AppTextInput
              type="text"
              name="material-url"
              label="First Author First Name"
              v-model="oer.authorFname"
            />
            <AppTextInput
              type="text"
              name="material-url"
              label="First Author Last Name"
              v-model="oer.authorLname"
            />
          </div>

          <AppTextInput
            type="text"
            name="material-url"
            label="First Author Affiliation"
            v-model="oer.authorOrg"
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
                >Does <strong>NOT</strong> contain any religious / political
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
            v-if="
              allowSubmit.length === 5 &&
              hasUploaded === true &&
              emailVerified === true
            "
          />
          <button type="button" class="btn btn-solid" @click="addOer">
            Add Another OER
          </button>
          <button type="reset" class="btn btn-outline" @click="resetForm">
            Reset
          </button>
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
import unitsJson from "@/assets/data/units.json";
import { fireDb, fStorage } from "~/plugins/firebase.js";
import { emailToken } from "@/Mailer/index.js";
import emailjs from "emailjs-com";

export default {
  components: {
    AppTextInput,
  },
  mounted() {
    this.getData();
  },
  data() {
    return {
      enteredOTP: "",
      allowSubmit: [],
      emailVerified: false,
      OTP: "",
      hasUploaded: false,
      formData: {
        firstName: "",
        lastName: "",
        department: "",
        status: "",
        university: "",
        email: "",
        imageUrl: "",
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
            subject: "",
            note: "",
            allottedPoints: [],
            points: -1,
          },
        ],
        number: 1,
        user: 0,
      },
    };
  },
  methods: {
    emailChanging() {
      this.emailVerified = false;
      this.OTP = "";
      this.enteredOTP = "";
    },
    resetForm() {
      console.log("resetting");
      this.enteredOTP = "";
      this.allowSubmit = [];
      this.emailVerified = false;
      this.OTP = "";
      this.formData = {
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
            dept: "",
            allottedPoints: [],
            points: -1,
            note: "",
          },
        ],
        number: 1,
      };
    },
    verifyOTP() {
      if (this.enteredOTP == this.OTP) {
        this.emailVerified = true;
      }
    },
    async getData() {
      const Ref = fireDb.collection("Reviewer").doc("UserID");
      const doc = await Ref.get();
      if (!doc.exists) {
        console.log("No such document!");
      } else {
        const no = doc.data().AppNo;
        this.formData.user=no;
      }
    },
    async saveWork() {
      if (this.emailVerified === true) {
        await fireDb
          .collection("Work")
          .add(this.formData)
          .then((docRef) => {
            const Ref = fireDb.collection("Reviewer").doc("UserID");
            const doc = await Ref.get();
            const no = doc.data().AppNo+1;
            fireDb.collection("Reviewer").doc("UserID").update({AppNo:no});
            alert("Form has been submitted");
            this.$router.push("/");
          })
          .catch((error) => {
            console.error("Error adding Work: ", error);
            alert("Unable to save submission try again later");
          });
      } else {
        alert("Email Not Verified");
      }
    },
    async verifyEmail() {
      this.OTP = emailToken();
      const templateParams = {
        otp: this.OTP,
        email: this.formData.email,
      };
      emailjs
        .send(
          "service_tmqhgad",
          "template_eheknue",
          templateParams,
          "user_3CJJxWpNBrgopWpRHkpDM"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
          },
          (err) => {
            console.log("FAILED...", err);
          }
        );
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
    units(dept) {
      if (dept === "") {
        return null;
      } else {
        return unitsJson[dept];
      }
    },
    removeThisOer(index) {
      if (this.formData.oers.length !== 1) this.formData.oers.splice(index, 1);
    },
    closeModal() {
      this.showModal = false;
      this.$router.push("/");
    },
    uploadImage() {
      const ref = fStorage.ref();
      const file = document.querySelector("#photo").files[0];
      const name = +new Date() + "-" + file.name;
      const metadata = {
        contentType: file.type,
      };
      const task = ref.child(name).put(file, metadata);
      task
        .then((snapshot) => snapshot.ref.getDownloadURL())
        .then((url) => {
          console.log(url);
          this.formData.imageUrl = url;
          console.log(this.formData.imageUrl);
          this.hasUploaded = true;
          alert("Image has been uploaded");
        })
        .catch(console.error);
    },
  },

  computed: {},
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

.file-grp {
  margin: 0.75rem 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.btn {
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  border-radius: 5px;
  margin: 0 0.25rem;
}

.btn-solid {
  border: 2px #508787 solid;
  background: #508787;
  color: white;
}

.btn-outline {
  border: 2px #508787 solid;
  background: #ffffff;
  color: #508787;
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

.submission {
  width: 100%;
}

.file-grp {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.file-grp label{
  margin-bottom: 1rem;
  color: #333;
  font-size: 1.15rem;
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