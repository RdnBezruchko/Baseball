<template>
  <div class="wrapper" :class="classList">
    <div
      class="title"
    >{{ dropDownTitle }}
    </div>
    <div class="menu">
      <div
        class="menu__wrapper"

        @click="switchMenu"
      >

        <p class="menu__title">{{`${selectedName ? selectedName : 'Select anything'}`}}</p>
        <img
          alt="#"
          class="menu__icon"
          src="../assets/Vector.png"
        >
      </div>
      <div
        v-if="isOpen"
        class="subMenu"
      >
        <div
          v-for="(option, index) in options"
          :key="index"
          class="subMenu__item"
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
        default: 'Type Something',
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
  .menu {
    margin-top: 12px;
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

      &.large {
        width: 382px;
      }
      &.small {
        width: 178px;
      }
    }

    &__title {
      margin-right: 15px;

      &.disabled {
        color: $Grey-Normal;
      }
    }

    &__icon {
      width: 14px;
      height: 8px;
      cursor: pointer;
    }
  }

  .subMenu {
    display: block;
    margin-top: 15px;
    background: $Light-Blue-Dark-Light;
    max-height: 130px;
    border-radius: 8px;
    border: 1px solid #7792D7;
    position: absolute;
    z-index: 2;
    &.large {
      width: 382px;
    }
    &.small {
      width: 178px;
    }

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
  .title {
    @include BodyMedium-Bold;
    color: $Light-Blue-Hard;
  }
  &.disabled {
    .title {
      color: $Grey-Normal;
    }
    .menu__title {
      color: $Grey-Normal;
    }
  }
  &.placeholderColor {
    .menu__title {
      color: $Grey-Medium;
    }
  }
  &.large {
    .menu__wrapper {
      width: 382px;
    }
    .subMenu {
      width: 382px;
    }
  }
  &.small {
    .menu__wrapper {
      width: 178px
    }
    .subMenu {
      width: 178px;
    }
  }
}



</style>