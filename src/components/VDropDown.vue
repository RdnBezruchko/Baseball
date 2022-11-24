<template>
  <div class="wrapper" :class="classList">
    <div
      v-if="dropDownTitle"
      class="wrapper__title"
    >{{ dropDownTitle }}
    </div>
    <div class="wrapper__menu menu">
      <div
        class="menu__wrapper"
        @click="switchMenu"
      >
        <p class="menu__label">{{`${selectedName ? selectedName : placeholder}`}}</p>
        <img
          alt="#"
          class="menu__icon"
          src="../assets/Vector.png"
        >
      </div>
      <div
        v-if="isOpen"
        class="wrapper__sub-menu sub-menu"
      >
        <div
          v-for="(option, index) in options"
          :key="index"
          class="sub-menu__item"
          @click="chosenOption(option.name)"
        >
          {{ option.name }}
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import {computed, ref} from 'vue';

  export default {
    name: 'VDropDown',
    props: {
      dropDownTitle: {
        type: String,
        default: '',
      },
      options: {
        type: Array,
        default: () => ([]),
      },
      modelValue: {
        type: [Number, String],
        default: '',
      },
      isDisabled: {
        type: Boolean,
        default: false,
      },
      dropDownSize: {
        type: String,
        default: 'large',
      },
      placeholder: {
        type: String,
        default: 'Select anything',
      },
    },
    emits: ['update:modelValue'],
    setup(props, {emit}) {
      const isOpen = ref(false);
      const selectedName = ref('');
      const test = ref(true)

      function switchMenu() {
        if (!props.isDisabled && props.options.length > 0) {
          isOpen.value = !isOpen.value;
        }
      }

      const classList = computed(() => ({
        disabled: props.isDisabled,
        large: props.dropDownSize === 'large',
        small: props.dropDownSize === 'small',
        placeholderColor: !selectedName.value,

      }))
      function chosenOption(optionName) {
        selectedName.value = optionName;
        isOpen.value = !isOpen.value;
        test.value = false
        emit('update:modelValue', selectedName.value)
      }

      return {
        isOpen,
        selectedName,
        classList,
        test,
        chosenOption,
        switchMenu,
      };
    },
  };
</script>

<style
  lang="scss"
  scoped
>
@import "/src/styles/main";


.wrapper {
  &__title {
    @include BodyMedium-Bold;
    color: $Light-Blue-Hard;
    margin-bottom: 12px;
  }
  .menu {
    &__wrapper {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 17px 16px;
      justify-content: space-between;
      height: 56px;
      background: $Light-Blue-Light;
      border-radius: 8px;
      position: relative;
      z-index: 1;
    }
    &__label {
      margin-right: 15px;
    }
    &__icon {
      width: 14px;
      height: 8px;
      cursor: pointer;
    }
  }

  .sub-menu {
    display: block;
    background: $Light-Blue-Dark-Light;
    max-height: 130px;
    border-radius: 8px;
    border: 1px solid #7792D7;
    position: absolute;
    z-index: 2;
    margin-top: 15px;
    &__item {
      @include BodyLarge-Medium;
      color: $Black-Normal;
      padding: 8px 44px 8px 16px;
      cursor: pointer;

      &:hover {
        background: $Light_Blue-Medium;
      }
      &:last-child {
        border-radius: 0 0 8px 8px;
      }
      &:first-child {
        border-radius: 8px 8px 0 0;
      }
    }
  }
  &.disabled {
    .wrapper__title {
      color: $Grey-Normal;
    }
    .menu__label {
      color: $Grey-Normal;
    }
  }
  &.placeholderColor {
    .menu__label {
      color: $Grey-Medium;
    }
  }
  &.large {
    .menu__wrapper {
      width: 382px;
    }
    .sub-menu {
      width: 382px;
    }
  }
  &.small {
    .menu__wrapper {
      width: 178px
    }
    .sub-menu {
      width: 178px;
    }
  }
}



</style>