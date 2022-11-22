<template>
  <div>
    <button
      :class="classList"
      @click="clickBtn"
    >
      <slot>
        submit
      </slot>
    </button>

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
      buttonSize: {
        type: String,
        default: 'large',
      },
      buttonType: {
        type: String,
        default: 'primary',
      },
      isDisabled: {
        type: Boolean,
        default: false,
      },

    },
    emits: ['click'],
    setup(props, {emit}) {
      function clickBtn() {
        if(!props.isDisabled) {
          emit('click');
        }
      }
      const classList = computed(() => ({
        btn: props.buttonType === 'primary',
        secondaryBtn: props.buttonType === 'secondary',
        btn_large: props.buttonSize === 'large',
        btn_small: props.buttonSize === 'small',
        disabled: props.isDisabled,
      }))
      return {
        clickBtn,
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
    display: flex;
    justify-content: center;
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