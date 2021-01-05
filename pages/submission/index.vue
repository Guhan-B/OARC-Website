<template>
  <div class="submission">
    <Modal v-show="showModal" :title="modalTitle" :message="modalMessage" :type="modalType" :callback="closeModal"/>
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
          <AppTextInput
            type="email"
            name="email"
            label="Email"
            v-model="formData.email"
          />
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
              <option value="M.Phil">M.Phil</option>
              <option value="Doctoral">Ph.D</option>
              <option value="Staff Member">Staff Memeber</option>
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
              @click="() => removeThisOer(index)"
            >
              Remove
            </button>
          </div>
          <AppTextInput
            type="text"
            name="title"
            label="Title"
            v-model="oer.title"
          />

          <AppTextInput
            type="url"
            name="material-url"
            label="Url"
            v-model="oer.url"
          />

          <AppTextInput
            type="url"
            name="material-url"
            label="Type"
            v-model="oer.type"
          />

          <AppTextInput
            type="url"
            name="material-url"
            label="Author"
            v-model="oer.author"
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

          <div class="input-check-group">
            <label>Outcomes (Please select a unit to view outcomes)</label>
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

        <div class="form-controls">
          <ButtonPrimary type="submit" title="Submit" />
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
import { fireDb } from "~/plugins/firebase.js";

export default {
  components: {
    AppTextInput,
  },
  data() {
    return {
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
            author: "",
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
          this.modalMessage = "Unable to submit thr form. Try again";
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
    closeModal(){
      this.showModal = false;
      this.$router.push("/")
    }
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
  padding: 0.5rem;
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

.new-oer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
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