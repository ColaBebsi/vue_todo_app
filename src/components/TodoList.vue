<template>
  <div>
    <h2>todo-list</h2>
    <input type="text" class="todo-input" placeholder="What needs to be done?">

  </div>
</template>

<script>
export default {
  name: "todo-list",
};
</script>

<style lang="scss">
.todo-input {
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 16px;

    &:focus {
        outline: none;
    }
}
</style>
