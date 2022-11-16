<template>
  <div class="input">
    <div
      v-if="inputName.length > 0"
      class="input__name"
      :class="{disabled: !checked}"
    >{{ inputName }}</div>
    <input
      v-model="localValue"
      class="input__item"
      :class="{error: !error && mailString.length > 0, disabled: !checked}"
      :placeholder="placeholder"
      :type="passwordHide ? 'password' : 'text'"
    >
  </div>
</template>

<script>
  import {computed} from 'vue';

  export default {
    name: 'VInput',
    props: {
      inputName: {
        type: String,
        default: '',
      },
      mailString: {
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
      passwordHide: {
        type: Boolean,
        default: false,
      },
      checked: {
        type: Boolean,
        default: true,
      },
    },
    emits: ['update:modelValue'],
    setup(props, {emit}) {
      const localValue = computed({
        get: () => props.modelValue,
        set: (value) => emit('update:modelValue', value),
      });
      return {
        localValue,
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
    &__name {
      @include BodyMedium-Bold;
      color: $Light-Blue-Hard;
      &.disabled {
        color: $Grey-Normal;
      }
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
      margin-top: 12px;


      &:focus {
        color: $Black-Normal;
        background: $Light-Blue-Dark-Light;
        border: 1px solid $Light-Blue-Dark;

      }

      &::placeholder {
        color: $Grey-Medium;
      }

      &.disabled {
        background: $Light-Blue-Light;
        cursor: default;

        &::placeholder {
          color: $Grey-Normal;
        }
      }

      &.error {
        background: $Red-Light;
        color: $Red-Easy;
        border: 1px solid $Red-Easy;

        &::placeholder {
          color: $Red-Easy;
        }
      }

    }
  }

</style>
