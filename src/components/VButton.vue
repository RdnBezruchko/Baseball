<template>
  <button
    :class="{disabled: input.mail === '' && input.password === ''}"
    class="btn">{{ button }}</button>
</template>

<script>
  export default {
    name: 'VButton',
    props: {
      input: {
        type: Object,
        default() {
          return {};
        },
      },
      button: {
        type: String,
        default: 'Type something...',
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
  
  .btn {
    padding: 16px 24px;
    width: 382px;
    height: 56px;
    background: $Red-Medium;
    color: $White-Normal;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    @include BodyXLarge-Bold;
    transition: 0.3s all;
    
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