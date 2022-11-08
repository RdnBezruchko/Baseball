<template>
  <div class="wrapper">
    
    <VSidebar
      :icons="icons"
      @active-side-bar="activeSideBar"
    ></VSidebar>
    
    <div class="wrapper__item">
      <VPersonalInfoHeader :title="headerTitle"></VPersonalInfoHeader>
      <component :is="component" />
    </div>
    
  </div>
</template>

<script>
  import {ref} from 'vue';
  import VSidebar from '../components/VSidebar.vue';
  import VPersonalInfoHeader from '../components/VPersonalInfoHeader.vue';
  import VPersonalInfoProfileContent from '../components/VPersonalInfoProfileContent.vue';
  
  export default {
    name: 'VPersonalInfo',
    components: {
      VPersonalInfoProfileContent,
      VSidebar,
      VPersonalInfoHeader,
    },
    setup() {
      const component = ref('VPersonalInfoProfileContent');
      const icons = ref([
        {
          // icon: '/src/assets/svg/PersonalInfo/users.svg',
          name: 'Personal info',
          icon: '/src/assets/svg/PersonalInfo/user%20check.svg',
          component: 'VPersonalInfoProfileContent',
          active: true,
        },
        {
          name: 'Pay',
          icon: '/src/assets/svg/PersonalInfo/payments.svg',
          component: '',
          active: false,
        },
        {
          name: 'My teams',
          icon: '/src/assets/svg/PersonalInfo/users.svg',
          component: '',
          active: false,
        },
      ]);
      const headerTitle = ref(icons.value[0].name);
      function activeSideBar(icon) {
        component.value = icon.component;
        icons.value.forEach((element) => {
          element.active = false;
        });
        icon.active = !icon.active;
        headerTitle.value = icon.name;
      }
      
      return {
        icons,
        component,
        headerTitle,
        activeSideBar,
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