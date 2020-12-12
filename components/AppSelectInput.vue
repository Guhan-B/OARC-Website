<template>
  <div class="input-group">
    <label :for="name">{{ label }}</label>
    <select :id="name" @input="emitEvent">
      <option value="Masters">Masters</option>
      <option value="M.Phil">M.Phil</option>
      <option value="Doctoral">Doctoral</option>
      <option value="Staff Member">Staff Memeber</option>
    </select>
  </div>
</template>

<style scoped>
.input-group {
  margin: 0.75rem 2rem;
}
.input-group label {
  display: inline-block;
  color: #333;
  margin-bottom: 0.5rem;
}
.input-group input[type="text"],
.input-group select,
.input-group textarea {
  border: 1px solid rgba(51, 51, 51, 0.5);
  padding: 0.5rem;
  color: #222;
  width: 100%;
  border-radius: 3px;
  font-size: 1.05rem;
  resize: vertical;
}
</style>

<script>
export default {
  props: {
    options: {},
    name: {},
    label: {},
    value: {}
  },
  methods: {
    emitEvent(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>