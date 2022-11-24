<template>
  <input
    class="checkbox"
    type="checkbox"
    @click="check"
  >
</template>

<script>
  export default {
    name: 'VCheckBox',
    emits:['check'],
    setup(props, {emit}) {
      function check() {
        emit('check')
      }
      return {
        check,
      }
    },
  };

</script>

<style scoped lang="scss">
  @import "/src/styles/main";
  .checkbox {
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background: blue;
    border: 1px solid $Light-Blue-Hard;
  }
</style>


