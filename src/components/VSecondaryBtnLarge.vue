<template>
  <div
    class="btn"
    @click="clickSecondaryBtnLarge"
  >{{ nameBtn }}</div>
</template>

<script>
  export default {
    name: 'VSecondaryBtnLarge',
    props: {
      nameBtn: {
        type: String,
        default: 'Type Something...',
      },
    },
    emits: ['clickSecondaryBtnLarge'],
    
    setup(props, {emit}) {
      function clickSecondaryBtnLarge() {
        emit('clickSecondaryBtnLarge');
      }
      
      return {
        clickSecondaryBtnLarge,
      };
    },
  };
</script>

<style
  scoped
  lang="scss"
>
  @import "/src/styles/main";
  
  .btn {
    @include BodyXLarge-SemiBold;
    color: $Light-Blue-Heavy;
    cursor: pointer;
    
    &:hover {
      color: $Light-Blue-Dark;
    }
    
    &:active {
      color: $Light-Blue-Heavy;
    }
    
  }
</style>