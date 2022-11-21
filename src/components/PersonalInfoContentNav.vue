<template>
  <nav class="navigation">
    <h6
      v-for="(navItem, index) in navItems"
      :key="index"
      :class="{active: navItem.active}"
      class="navigation__item"
      @click="activateNavItem(navItem)"
    >{{ navItem.name }}</h6>
  </nav>
</template>

<script>

  export default {
    name: 'VPersonalInfoNav',
    props: {
      navItems: {
        type: Array,
        required: true,
      },
    },
    emits: ['activateNavItem'],
    setup(props, {emit}) {
      function activateNavItem(navItem) {
        emit('activateNavItem', navItem)
      }
      return {
        activateNavItem,
      };
    },
  };
</script>

<style scoped lang="scss">
  @import "/src/styles/main";
  .navigation {
    width: 280px;
    margin-right: 280px;
    &__item {
      @include Heading_6;
      margin-top: 32px;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: 1s all;
      
      &:first-child {
        margin: 0;
      }
      &.active {
        &:before {
          transition: 1s all;
          content: '';
          display: block;
          width: 4px;
          height: 32px;
          background: #1C3166;
          border-radius: 8px;
          margin: 0 16px 0 15px;
        }
      }
    }
  }
</style>