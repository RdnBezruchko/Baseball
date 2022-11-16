<template>
  <div>
    <button
      :class="classList"
      @click="clickSecondaryBtnLarge"
    >{{ buttonName }}</button>

  </div>
</template>

<script>
  import {computed} from "vue";

  export default {
    name: 'VButton',
    props: {
      inputData: {
        type: Object,
        default: () => ({}),
      },
      buttonName: {
        type: String,
        default: 'Type something...',
      },
      buttonSize: {
        type: String,
        default: 'large',
      },
      buttonType: {
        type: String,
        default: 'primary',
      },
    },
    emits: ['clickSecondaryBtnLarge'],
    setup(props, {emit}) {
      function clickSecondaryBtnLarge() {
        emit('clickSecondaryBtnLarge');
      }
      const classList = computed(() => ({
        btn: props.buttonType === 'primary',
        secondaryBtn: props.buttonType === 'secondary',
        btn_large: props.buttonSize === 'large',
        btn_small: props.buttonSize === 'small',
        disabled: props.inputData.mail && props.inputData.password ? !props.inputData.mail.length && props.inputData.password.length : true,
      }))
      return {
        clickSecondaryBtnLarge,
        classList,
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
    &.btn_large {
      width: 382px;
    }
    &.btn_small {
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
    border: none;
    background: none;
    padding: 0;

    &:hover {
      color: $Light-Blue-Dark;
    }

    &:active {
      color: $Light-Blue-Heavy;
    }

  }
</style>