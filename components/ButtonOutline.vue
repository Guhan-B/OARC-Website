<template>
    <div class="button-primary">
        <button :type="type">{{title}}</button>
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
        }
    }
}
</script>

<style scoped>
.button-primary button{
    border: 2px #508787 solid;
    background: white;
    padding: 0.5rem 1rem;
    color: #508787;
    font-weight: bold;
    font-size: 1rem;
    margin: 0 0.5rem;
    cursor: pointer;
}
</style>