<template>
    <h2 class="todo-header">{{ titleProps }}</h2>
</template>

<script>
export default {
    name: "todo-header", 
    props: {
        titleProps: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
.todo-header {
  text-align: center;
}
</style>