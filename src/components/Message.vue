<template>
  <div class="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'MessageVue',
  props: {
    message: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.message {
  text-align: center;
}

p {
  color: red;
}
</style>
