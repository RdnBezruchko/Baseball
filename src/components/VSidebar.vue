<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <img
        class="sidebar__PrimeLogo"
        src="../assets/svg/PersonalInfo/PrimeB-Logo.svg"
        alt=""
      >
    </div>
    <div class="sidebar__logos">
      <!--      <div class="sidebar__round" :class="{active: true}">-->
      <!--        <img class="sidebar__logo" src="../assets/svg/PersonalInfo/user%20check.svg" alt="#">-->
      <!--      </div>-->
      <!--      <div class="sidebar__round" :class="{active: false}">-->
      <!--        <img class="sidebar__logo" src="../assets/svg/PersonalInfo/payments.svg" alt="#">-->
      <!--      </div>-->
      <!--      <div class="sidebar__round" :class="{active: false}">-->
      <!--        <img class="sidebar__logo" src="../assets/svg/PersonalInfo/users.svg" alt="#">-->
      <!--      </div>-->
      <div
        v-for="(icon, index) in icons"
        :key="index"
        class="sidebar__round"
        :class="{active: icon.active}"
        @click="activeSideBar(icon)"
      >
        <img class="sidebar__logo" :src="icon.icon" alt="">
      </div>
    </div>
    <!-- /.sidebar__log -->
    <div class="sidebar__round">
      <img
        class="sidebar__logo"
        src="../assets/svg/PersonalInfo/login.svg"
        alt="#"
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VSidebar',
    props: {
      icons: {
        type: Array,
        default() {
          return undefined;
        },
      },
    },
    emits: ['activeSideBar'],
    
    setup(props, {emit}) {
      function activeSideBar(icon) {
        emit('activeSideBar', icon)
      }
      return {
        activeSideBar,
      }
    },
  };
</script>

<style
  scoped
  lang="scss"
>
  @import "/src/styles/main";
  
  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: $Light-Blue-Hard;
    width: 120px;
    height: 100vh;
    padding: 24px 24px 81px 24px;
    
    &__header {
    
    }
    
    &__round {
      width: 48px;
      height: 48px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-top: 40px;
      transition: .3s all;
      
      &:hover {
        background: $Light-Blue-Heavy;
      }
      
      &:first-child {
        margin: 0;
      }
      
      &.active {
        background: white;
      }
    }
    
    &__logos {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    
    &__logo {
      cursor: pointer;
      
      &:hover {
      
      }
      
      &:first-child {
        margin: 0;
      }
    }
    
    &__PrimeLogo {
      border: 2px $White-Normal solid;
      border-radius: 50%;
    }
  }
</style>