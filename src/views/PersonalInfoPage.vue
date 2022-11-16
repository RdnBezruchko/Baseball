<template>
  <div class="wrapper">
    
    <PersonalInfoSidebar
      :menu-items="menu"
      @activate-side-bar="activateSideBar"
    ></PersonalInfoSidebar>
    
    <div class="wrapper__item">
      <PersonalInfoHeader :title="headerTitle"></PersonalInfoHeader>
      <component :is="component" />
    </div>
    
  </div>
</template>

<script>
  import {ref} from 'vue';
  import PersonalInfoSidebar from '../components/PersonalInfoSidebar.vue';
  import PersonalInfoHeader from '../components/PersonalInfoHeader.vue';
  import PersonalInfoContent from '../components/PersonalInfoContent.vue';
  
  export default {
    name: 'PersonalInfoPage',
    components: {
      PersonalInfoContent,
      PersonalInfoSidebar,
      PersonalInfoHeader,
    },
    setup() {
      const component = ref('PersonalInfoContent');
      const menu = ref([
        {
          // icon: '/src/assets/svg/PersonalInfo/users.svg',
          name: 'Personal info',
          icon: '/src/assets/svg/PersonalInfo/userCheckWhite.svg',
          iconWhite: '/src/assets/svg/PersonalInfo/userСheck.svg',
          component: 'PersonalInfoContent',
          active: true,
        },
        {
          name: 'Pay',
          icon: '/src/assets/svg/PersonalInfo/paymentsWhite.svg',
          iconWhite: '/src/assets/svg/PersonalInfo/payments.svg',
          component: '',
          active: false,
        },
        {
          name: 'My teams',
          icon: '/src/assets/svg/PersonalInfo/usersWhite.svg',
          iconWhite: '/src/assets/svg/PersonalInfo/users.svg',
          component: '',
          active: false,
        },
      ]);
      const headerTitle = ref(menu.value[0].name);
      function activateSideBar(menuItem) {
        component.value = menuItem.component;
        menu.value.forEach((element) => {
          element.active = false;
        });
        menuItem.active = !menuItem.active;
        headerTitle.value = menuItem.name;
      }
      
      return {
        menu,
        component,
        headerTitle,
        activateSideBar,
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
    display: flex;
    
    
    &__item {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    
  }
</style>