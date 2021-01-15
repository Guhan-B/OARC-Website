<template>
  <div class="input-group">
    <label :for="name">{{ label }}</label>
    <textarea required v-if="type == 'textarea'"  :id="name" @input="emitEvent" :value="value" ></textarea>
    <input required v-else :type="type" :id="name" @input="emitEvent" :value="value"/>
    <p class="subtitle">{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.input-group {
  margin: 0.75rem 2rem;
}

textarea{
    min-height: 200px;
}

.input-group input:hover,.input-group textarea:hover{
    border: 1px solid cadetblue;
}

.input-group input:focus,.input-group textarea:focus{
    border: 1px solid cadetblue;
    box-shadow: 0px 0px 0px 3px rgba(95, 158, 160, 0.3);
}

.subtitle{
  margin: 8px 0;
  color: #777;
  font-size: 0.95rem;
}

.input-group label {
  display: inline-block;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.05rem;
}

.input-group input,
.input-group select,
.input-group textarea {
  border: 1px solid rgba(51, 51, 51, 0.5);
  padding: 0.35rem 0.5rem;
  color: #222;
  width: 100%;
  border-radius: 3px;
  font-size: 1.05rem;
  resize: vertical;
}

@media only screen and (max-width: 700px){
  .input-group{
    margin: 0.75rem 1rem;
  }
}
</style>

<script>
export default {
  props: {
      type: {},
      name: {},
      value: {},
      label: {},
      subtitle: {},
      change: {

      }
  },
  methods: {
    emitEvent(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>