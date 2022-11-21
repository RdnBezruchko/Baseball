<template>
  <div class="content">
    <PersonalInfoContentNav
      :nav-items="navItems"
      @activate-nav-item="activateNavItem"
    ></PersonalInfoContentNav>
    
    <div class="content__information">
      <component
        :is="component"
        v-model="contentData"
        :items-data="contentData"
        class="content__inputs"
      />
      <VButton
        class="content__btn"
        :button-size="'small'"
      >
        Save
      </VButton>
    </div>
  </div>

</template>

<script>
  
  import {ref} from 'vue';
  import PersonalInfoContentNav from './PersonalInfoContentNav.vue';
  import PersonalInfoContentAboutMyself from './PersonalInfoContentAboutMyself.vue';
  import PersonalInfoContentAddressAndZipInformation from './PersonalInfoContentAddressAndZipInformation.vue';
  import PersonalInfoContentContactInformation from './PersonalInfoContentContactInformation.vue';
  import PersonalInfoContentSizeInformation from './PersonalInfoContentSizeInformation.vue';
  import PersonalInfoContentCollegeInformation from './PersonalInfoContentCollegeInformation.vue';
  import PersonalInfoContentParentGuardianInformation from './PersonalInfoContentParentGuardianInformation.vue';
  import PersonalInfoContentChangeEmailAndPassword from './PersonalInfoContentChangeEmailAndPassword.vue';
  import VButton from './VButton.vue'

  export default {
    name: 'PersonalInfoContent',
    components: {
      PersonalInfoContentNav,
      PersonalInfoContentAboutMyself,
      PersonalInfoContentAddressAndZipInformation,
      PersonalInfoContentChangeEmailAndPassword,
      PersonalInfoContentParentGuardianInformation,
      PersonalInfoContentCollegeInformation,
      PersonalInfoContentSizeInformation,
      PersonalInfoContentContactInformation,
      VButton,
    },
    setup() {
      const component = ref('PersonalInfoContentAboutMyself');
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
          component: 'PersonalInfoContentAboutMyself',
        },
        {
          name: 'Address and zip information',
          active: false,
          component: 'PersonalInfoContentAddressAndZipInformation',
        },
        {
          name: 'Contact information',
          active: false,
          component: 'PersonalInfoContentContactInformation',
        },
        {
          name: 'Size information',
          active: false,
          component: 'PersonalInfoContentSizeInformation',
        },
        {
          name: 'College information',
          active: false,
          component: 'PersonalInfoContentCollegeInformation',
        },
        {
          name: 'Parent/Guardian information',
          active: false,
          component: 'PersonalInfoContentParentGuardianInformation',
        },
        {
          name: 'Change email/password',
          active: false,
          component: 'PersonalInfoContentChangeEmailAndPassword',
        }]);
      
      function activateNavItem(navItem) {
        component.value = navItem.component;
        navItems.value.forEach((element) => {
          element.active = false;
        });
        navItem.active = !navItem.active;
      }
      
      return {
        navItems,
        component,
        activateNavItem,
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
      justify-content: space-between;
      width: calc(100% - 560px);
    }

    .content__btn {
      align-self: end;
    }
    
    &__inputs {
      margin-right: 116px;
    }
  }

</style>