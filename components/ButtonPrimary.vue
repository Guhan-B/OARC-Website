<template>
    <div class="button-primary">
        <button :disabled="!disabled" :type="type">{{title}}</button>
    </div>
</template>

<script>
export default {
    props:{
        title: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        disabled: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped>
.button-primary button{
    border: 2px #508787 solid;
    background: #508787;
    padding: 0.5rem 1rem;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    margin: 0 0.5rem;
    cursor: pointer;
    border-radius: 5px;
}

button:disabled{
    opacity: 0.5;
}
</style>