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
        <p class="menu__title">{{ selectedName }}</p>
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
        default: true,
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

      function switchMenu() {
        if (props.isDisabled) {
          isOpen.value = !isOpen.value;
        }
      }

      const classList = computed(() => ({
        disabled: !props.isDisabled,
        large: props.dropDownSize === 'large',
        small: props.dropDownSize === 'small',
      }))
      function chosenOption(optionName) {
        selectedName.value = optionName;
        isOpen.value = !isOpen.value;
        emit('update:modelValue', selectedName.value)
      }

      return {
        isOpen,
        selectedName,
        classList,
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
    height: 130px;
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

//.title {
//  @include BodyMedium-Bold;
//  color: $Light-Blue-Hard;
//
//  &.disabled {
//    color: $Grey-Normal;
//  }
//}


</style>