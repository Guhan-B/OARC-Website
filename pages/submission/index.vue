<template>
  <div class="submission">
    <h2 class="form-title">Please fill out this form to add your submission</h2>
    <div class="container">
      <form class="form" @submit.prevent="saveWork">
        <h2 class="form-group-title">Personal Infromation</h2>
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
              <option value="Masters">Masters</option>
              <option value="M.Phil">M.Phil</option>
              <option value="Doctoral">Doctoral</option>
              <option value="Staff Member">Staff Memeber</option>
            </select>
          </div>
        </div>

        <h2 class="form-group-title">Open Educational Resource(OER)</h2>
        <div class="form-group grid-cols-1">
          <AppTextInput
            type="text"
            name="title"
            label="Title"
            v-model="formData.title"
          />
          <AppTextInput
            type="url"
            name="material-url"
            label="Material Url"
            subtitle="Please upload your materials in google drive and share the public url. If you have more than 1 OER please upload it as a zip file."
            v-model="formData.url"
          />

          <AppTextInput
            type="number"
            name="number-oer"
            label="Number of OER"
            v-model="formData.number"
          />

          <div class="input-select-group">
            <label for="unit">Unit</label>
            <select required id="unit" v-model="formData.unit">
              <option value="1">unit 1 - Research</option>
              <option value="2">unit 2 - Research Ethics</option>
              <option value="3">unit 3 - Experimental Research</option>
              <option value="4">unit 4</option>
              <option value="5">unit 5 - Research Writing</option>
            </select>
          </div>
          <div class="input-check-group">
            <label>Outcomes (Please select a unit to view outcomes)</label>
            <div class="checkbox" v-for="outcome in outcomes" :key="outcome.id">
              <input
                type="checkbox"
                :id="outcome.id"
                :value="outcome.value"
                v-model="formData.outcomes"
              />
              <label :for="outcome.id">{{ outcome.value }}</label>
            </div>
          </div>
        </div>

        <AppTextInput
          type="textarea"
          name="description"
          label="Description"
          v-model="formData.description"
        />

        <div class="form-controls">
          <ButtonPrimary type="submit" title="Add Submission" />
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
import outcomesJson from "@/assets/outcome.json";
import { fireDb } from "~/plugins/firebase.js";

export default {
  components: {
    AppTextInput,
  },
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        designation: "",
        department: "",
        status: "",
        university: "",
        title: "",
        description: "",
        url: "",
        unit: "",
        outcomes: [],
        email: "",
        number: ""
      },
    };
  },
  methods: {
    async saveWork() {
      await fireDb
        .collection("Work")
        .add({
          firstName: this.formData.firstName,
          lastName: this.formData.lastName,
          designation: this.formData.designation,
          department: this.formData.department,
          status: this.formData.status,
          university: this.formData.university,
          title: this.formData.title,
          description: this.formData.description,
          url: this.formData.url,
          unit: this.formData.unit,
          outcomes: this.formData.outcomes,
          email: this.formData.email,
          number: this.formData.number
        })
        .then((docRef) => {
          console.log("Work added: ", docRef.id);
          alert("Your Submission Has Been Saved");
          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Error adding Work: ", error);
          alert("Unable to save submission try again later");
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
  },

  computed: {
    outcomes() {
      this.formData.outcomes = [];

      if (this.formData.unit === "") {
        return null;
      } else {
        return outcomesJson[this.formData.unit];
      }
    },
  },
};
</script>

<style scoped>
.submission {
  padding: 1rem 0;
}

.submission .form-title{
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

@media only screen and (max-width: 1050px) {
  .container{
    width: 80%;
  }
}
@media only screen and (max-width: 900px) {
  .container{
    width: 90%;
  }
}
@media only screen and (max-width: 700px) {
  .grid-cols-2{
    grid-template-columns: 1fr;
  }
}
</style>