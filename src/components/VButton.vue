<template>
  <div>
    <button
      v-if="typeButton === 'primary'"
      :class="{disabled: inputData.mail === '' || inputData.password === '', large: sizeButton === 'large', small: sizeButton === 'small' }"
      class="btn">{{ button }}</button>
    <div
      v-if="typeButton === 'secondary'"
      class="secondaryBtn"
      @click="clickSecondaryBtnLarge"
    >{{ button }}</div>
  </div>
</template>

<script>
  export default {
    name: 'VButton',
    props: {
      inputData: {
        type: Object,
        default: () => ({}),
      },
      button: {
        type: String,
        default: 'Type something...',
      },
      sizeButton: {
        type: String,
        default: 'large',
      },
      typeButton: {
        type: String,
        default: 'primary'
      }
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
  lang="scss"
  scoped
>
  @import "/src/styles/main";
  
  .btn {
    padding: 16px 24px;
    height: 56px;
    background: $Red-Medium;
    color: $White-Normal;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    @include BodyXLarge-Bold;
    transition: 0.3s all;
    &.large {
      width: 382px;
    }
    &.small {
      width: 140px;
    }
    
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

  .secondaryBtn {
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