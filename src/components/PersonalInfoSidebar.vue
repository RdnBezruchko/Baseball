<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <img
        class="sidebar__prime-logo"
        src="../assets/svg/PersonalInfo/PrimeB-Logo.svg"
        alt=""
      >
    </div>
    <div class="sidebar__logos logos">
      <div
        v-for="(menuItem, index) in menuItems"
        :key="index"
        class="logos__round"
        :class="{active: menuItem.active}"
        @click="activateSideBar(menuItem)"
      >
        <img v-if="!menuItem.active " class="logos__logo" :src="menuItem.icon" alt="">
        <img v-else class="logos__logo" :src="menuItem.iconWhite" alt="">
      </div>
    </div>
    <router-link
      to="/login"
      class="sidebar__round">
      <img
        class="sidebar__logo"
        src="../assets/svg/PersonalInfo/logOutWhite.svg"
        alt="#"
      >
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'PersonalInfoSidebar',
    props: {
      menuItems: {
        type: Array,
        default: () => ([]),
      },
    },
    emits: ['activateSideBar'],

    setup(props, {emit}) {
      function activateSideBar(icon) {
        emit('activateSideBar', icon)
      }
      return {
        activateSideBar,
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
    &__prime-logo {
      border: 2px $White-Normal solid;
      border-radius: 50%;
    }
  }
  .logos {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    &__logo {
      cursor: pointer;
      &:hover {

      }
      &:first-child {
        margin: 0;
      }
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
  }
</style>