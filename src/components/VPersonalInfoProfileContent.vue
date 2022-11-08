<template>
  <div class="content">
    <VPersonalInfoNav
      :nav-items="navItems"
      @active="active"
    ></VPersonalInfoNav>
    
    <div class="content__information">
      <component
        :is="component"
        v-model="contentData"
        :items-data="contentData"
        class="content__inputs"
      />
      <VSmallButton
        :button="'Save'"
        class="content__btn"
      ></VSmallButton>
    </div>
  </div>

</template>

<script>
  
  import {ref} from 'vue';
  import VPersonalInfoNav from './VPersonalInfoNav.vue';
  import VSmallButton from './VSmallButton.vue';
  import VAboutMyself from './VAboutMyself.vue';
  import VAddressAndZipInformation from './VAddressAndZipInformation.vue';
  import VContactInformation from './VContactInformation.vue';
  import VSizeInformation from './VSizeInformation.vue';
  import VCollegeInformation from './VCollegeInformation.vue';
  import VParentGuardianInformation from './VParentGuardianInformation.vue';
  import VChangeEmailAndPassword from './VChangeEmailAndPassword.vue';
  
  export default {
    name: 'VPersonalInfoProfileContent',
    components: {
      VSmallButton,
      VPersonalInfoNav,
      VAboutMyself,
      VAddressAndZipInformation,
      VChangeEmailAndPassword,
      VParentGuardianInformation,
      VCollegeInformation,
      VSizeInformation,
      VContactInformation,
    },
    setup() {
      const component = ref('VAboutMyself');
      const contentData = ref({
        // About myself
        email: '',
        firstName: '',
        middleName: '',
        lastName: '',
        // Address and zip information
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        // Contact information
        phoneNumber: '',
        instagram: '',
        twitter: '',
        // Size information
        primaryPosition: '',
        secondaryPosition: '',
        heightFT: '',
        heightIN: '',
        weight: '',
        thrower: '',
        batter: '',
        pantsSize: '',
        shirtSize: '',
        hatSize: '',
        // College information
        collageName: '',
        division: '',
        // Parent/Guardian information
        firstParentFirstName: '',
        firstParentMiddleName: '',
        firstParentLastName: '',
        firstParentPhoneNumber: '',
        firstParentEmail: '',
        firstParentSocialNetwork: '',
        secondParentFirstName: '',
        secondParentMiddleName: '',
        secondParentLastName: '',
        secondParentPhoneNumber: '',
        secondParentEmail: '',
        secondParentSocialNetwork: '',
      });
      
      const navItems = ref([
        {
          name: 'About myself',
          active: true,
          component: 'VAboutMyself',
        },
        {
          name: 'Address and zip information',
          active: false,
          component: 'VAddressAndZipInformation',
        },
        {
          name: 'Contact information',
          active: false,
          component: 'VContactInformation',
        },
        {
          name: 'Size information',
          active: false,
          component: 'VSizeInformation',
        },
        {
          name: 'College information',
          active: false,
          component: 'VCollegeInformation',
        },
        {
          name: 'Parent/Guardian information',
          active: false,
          component: 'VParentGuardianInformation',
        },
        {
          name: 'Change email/password',
          active: false,
          component: 'VChangeEmailAndPassword',
        }]);
      
      function active(navItem) {
        component.value = navItem.component;
        navItems.value.forEach((element) => {
          element.active = false;
        });
        navItem.active = !navItem.active;
      }
      
      return {
        navItems,
        component,
        active,
        contentData,
      };
    },
  };
</script>

<style
  scoped
  lang="scss"
>
  @import "/src/styles/main";
  
  .content {
    display: flex;
    height: calc(100% - 120px);
    justify-content: space-between;
    padding: 40px 64px 64px 64px;
    
    &__information {
      display: flex;
    }
    
    .content__input {
      margin-right: 116px;
    }
    
    .content__btn {
      align-self: end;
    }
    
    &__inputs {
      margin-right: 116px;
    }
  }

</style>