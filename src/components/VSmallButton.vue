<template>
  <button class="btn_small">{{ button }}</button>
</template>

<script>
  export default {
    name: 'VSmallButton',
    props: {
      button: {
        type: String,
        default: '',
      },
    },
    setup() {
      
      return {};
    },
  };
</script>

<style
  lang="scss"
  scoped
>
  @import "/src/styles/main";
  
  .btn_small {
    padding: 16px 24px;
    
    width: 140px;
    height: 56px;
    
    background: $Red-Medium;
    color: $White-Normal;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    @include BodyXLarge-Bold;
    transition: 0.3s all;
    text-align: center;
    
    &:hover {
      background: $Red-Normal;
    }
    
    &:active {
      background: $Red-Heavy;
    }
    
    &.disabled {
      background: $Grey-Light;
      cursor: default;
    }
  }
</style>