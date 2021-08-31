<template>
  <div>{{ remainingProps }} items left</div>
</template>

<script>
export default {
  name: "todo-items-remaining",
  props: {
    remainingProps: {
      type: Number,
      required: true,
    },
  },
};
</script>