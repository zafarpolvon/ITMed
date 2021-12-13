<template>
  <div class="med__input">
    <h5 class="title">{{ title }}</h5>
    <input v-bind:value="value" v-on:input="updateValue($event.target.value)" :placeholder="placeholder" type="text">
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  name: 'Input',
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>
  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    margin-bottom: 10px;
  }
  .med__input input {
    width: 100%;
    background: #273795;
    border-radius: 4px;
    height: 40px;
    padding: 0 10px;
    color: #FFFFFF;
    outline: none;
    text-transform: capitalize;
  }
  .med__input input::placeholder {
    color: #FFFFFF;
  }
</style>
