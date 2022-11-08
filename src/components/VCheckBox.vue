<template>
  <input @click="check()" class="checkbox" type="checkbox">
</template>

<script>
  export default {
    name: 'VCheckBox',
    setup(props, {emit}) {
      function check() {
        emit('checkFunc')
      }
      return {
        check
      }
    }
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
    border-radius: 4px;
  }
</style>


