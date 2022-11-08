<template>
  <header class="header">
    <h3 class="header__title">{{ title }}</h3>
    <div class="profile">
      <h5 class="profile__name">{{ 'SomeName...' }}</h5>
      <div class="profile__round">
        <img class="profile__logo" src="../assets/svg/PersonalInfo/Softball.svg" alt="">
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'VPersonalInfoHeader',
    props: {
      title: {
        type: String,
        default: '',
      },
    },
  };
</script>

<style scoped lang="scss">
  @import "/src/styles/main";
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    width: 100%;
    padding: 0 64px;
    border-bottom: 1px $Light-Blue-Medium solid;
    &__title {
      @include Heading_3;
      color: $Black-Normal;
    }
  }
  .profile {
    display: flex;
    align-items: center;
    &__name {
      @include Heading_5;
      color: $Black-Normal;
      margin-right: 24px;
    }
    &__round {
      width: 48px;
      height: 48px;
      background-color: $Light-Blue-Hard;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>