<template>
  <div class="input" :class="classList">
    <div
      v-if="inputLabel.length > 0"
      class="input__label"
    >{{ inputLabel }}</div>
    <input
      v-model="localValue"
      class="input__item"
      :placeholder="placeholder"
      :type="isPasswordIconHidden && isPasswordHidden ? 'password' : 'text'"
    >
    <img
      v-if="isPasswordIconHidden && isPasswordHidden"
      class="input__icon"
      src="../assets/svg/eye%20on.svg"
      alt="#"
      @click="showPassword"
    >
    <img
      v-if="isPasswordIconHidden && !isPasswordHidden"
      class="input__icon"
      src="../assets/svg/eye%20off.svg"
      alt="#"
      @click="showPassword"
    >
  </div>

</template>

<script>
  import {computed, ref} from 'vue';

  export default {
    name: 'VInput',
    props: {
      inputLabel: {
        type: String,
        default: '',
      },
      modelValue: {
        type: [String, Number],
        default: '',
      },
      placeholder: {
        type: String,
        default: 'Type something...',
      },
      error: {
        type: Boolean,
        default: false,
      },
      isPasswordIconHidden: {
        type: Boolean,
        default: false,
      },
      isDisabled: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['update:modelValue', 'showPassword'],
    setup(props, {emit}) {
      const localValue = computed({
        get: () => props.modelValue,
        set: (value) => emit('update:modelValue', value),
      });
      const classList = computed(() => ({
        disabled: props.isDisabled,
        error: props.error && !!props.modelValue.trim().length,
        'input_not-labeled': !props.inputLabel.length
      }))
      const isPasswordHidden = ref(true);
      function showPassword() {
        isPasswordHidden.value = !isPasswordHidden.value
      }
      return {
        localValue,
        isPasswordHidden,
        showPassword,
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

  .input {
    width: 382px;
    position: relative;
    &__label {
      @include BodyMedium-Bold;
      color: $Light-Blue-Hard;
      margin-bottom: 12px;
      &.disabled {
        color: $Grey-Normal;
      }
    }
    &__icon {
      cursor: pointer;
      position: absolute;
      top: 45px;
      right: 20px;
    }
    &__item {
      background: $Light-Blue-Light;
      color: $Black-Normal;
      width: 100%;
      height: 56px;
      outline: none;
      border: none;
      border-radius: 8px;
      @include BodyLarge-Medium;
      padding: 17px 40px 17px 16px;

      &:focus {
        color: $Black-Normal;
        background: $Light-Blue-Dark-Light;
        border: 1px solid $Light-Blue-Dark;
      }
      &::placeholder {
        color: $Grey-Medium;
      }
    }
    &.disabled {
      .input__label {
        color: $Grey-Normal;
      }
      .input__item {
        background: $Light-Blue-Light;
        cursor: default;
        &::placeholder {
          color: $Grey-Normal;
        }
      }
    }
    &.error {
      .input__item {
        background: $Red-Light;
        color: $Red-Easy;
        border: 1px solid $Red-Easy;
        &::placeholder {
          color: $Red-Easy;
        }
      }
    }
    &.input_not-labeled {
      .input__icon {
        top: 15px;
        right: 20px;
      }
    }
  }


</style>
