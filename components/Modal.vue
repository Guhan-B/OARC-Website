<template>
  <div>
    <div class="backdrop"></div>
    <div class="modal" :class="type">
      <h2>{{ title }}</h2>
      <h3>{{ message }}</h3>
      <button @click="callback">OKAY</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    callback: {
      type: Function,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.backdrop {
  z-index: 400;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}

.modal h2 {
  margin-bottom: 1rem;
  font-size: 1.75rem;
}

.modal {
  z-index: 500;
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 2rem 4rem;
  text-align: center;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  width: max-content;
}

.success h2 {
  color: rgba(4, 172, 4, 0.8);
}

.error h2 {
    color: rgba(172, 4, 4, 0.8);
}

.modal h3 {
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  color: #555;
}

.modal button {
  padding: 0.35rem 0.65rem;
  font-size: 1.15rem;
  border: none;
  background: #508787;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
</style>