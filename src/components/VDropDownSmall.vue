<template>
  <div>
    <div class="title">{{ dropDownTitle }}</div>
    <div class="menu">
      <div
        class="menu__wrapper"
        @click="switchMenu"
      >
        <p class="menu__title">{{ selectedName }}</p>
        <img
          class="menu__dropdown"
          src="../assets/Vector.png"
          alt="#"
        >
      </div>
      <div
        v-if="isOpen"
        class="SubMenu"
      >
        <div
          v-for="(dropDownMenu, index) in dropDownMenus"
          :key="index"
          class="SubMenu__item"
          @click="isChosen(dropDownMenu.name)"
        >
          {{ dropDownMenu.name }}
        </div>
        <!-- /.menuItem -->
      </div>
    </div>
  </div>
</template>

<script>
  import {ref} from 'vue';
  
  export default {
    name: 'VDropDownSmall',
    props: {
      dropDownTitle: {
        type: String,
        default: 'Type Something',
      },
      dropDownMenus: {
        type: (Array, Object),
        default: undefined,
      },
      // selectedName: {
      //   type: String,
      //   default: '',
      // },
    },
    
    setup() {
      const isOpen = ref(false);
      const selectedName = ref('')
      
      function switchMenu() {
        isOpen.value = !isOpen.value;
      }
      function isChosen(dropDownMenuName) {
        selectedName.value = dropDownMenuName
        isOpen.value = !isOpen.value
      }
      return {
        isOpen,
        selectedName,
        isChosen,
        switchMenu,
      };
    },
  };
</script>

<style
  scoped
  lang="scss"
>
  @import "/src/styles/main";
  .title {
    @include BodyMedium-Bold;
    color: $Light-Blue-Hard;
  }
  .menu {
    margin-top: 15px;
    
    &__wrapper {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 17px 16px;
      justify-content: space-between;
      width: 178px;
      height: 56px;
      background: $Light-Blue-Light;
      border-radius: 8px;
    }
    
    &__title {
      margin-right: 15px;
    }
    
    &__dropdown {
      width: 14px;
      height: 8px;
      cursor: pointer;
    }
  }
  
  .SubMenu {
    display: block;
    margin-top: 12px;
    background: $Light-Blue-Dark-Light;
    
    
    width: 178px;
    height: 130px;
    
    border-radius: 8px;
    border: 1px solid #7792D7;
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
</style>