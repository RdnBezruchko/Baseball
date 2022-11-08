<template>
  <div class="wrapper">
    <VSecondaryBtnLarge
      v-if="parent.addParent"
      :name-btn="`${parentTitle ? '2' : '1'}st Parent information`"
      @click-secondary-btn-large="switchParent"
      
    ></VSecondaryBtnLarge>
    <h3 class="wrapper__header">{{ `${parentTitle ? '1' : '2'}st Parent information` }}</h3>
    <div
      v-if="parent.switchParent"
      class="inputs"
    >
      <VInput
        v-model="firstParentFirstName"
        class="inputs__item"
        :input-name="'First Name*'"
        :placeholder-name="'Enter First Name*'"
      ></VInput>
      <VInput
        v-model="firstParentMiddleName"
        class="inputs__item"
        :input-name="'Middle Name*'"
        :placeholder-name="'Enter Middle Name*'"
      ></VInput>
      <VInput
        v-model="firstParentLastName"
        class="inputs__item"
        :input-name="'Last Name*'"
        :placeholder-name="'Enter Last Name*'"
      ></VInput>
      <VInput
        v-model="firstParentPhoneNumber"
        class="inputs__item"
        :input-name="'Cell phone number*'"
        :placeholder-name="'Enter phone number*'"
      ></VInput>
      <VInput
        v-model="firstParentEmail"
        class="inputs__item"
        :input-name="'Email'"
        :placeholder-name="'Email'"
      ></VInput>
      <VInput
        v-model="firstParentSocialNetwork"
        class="inputs__item"
        :input-name="'Instagram/Twitter/Facebook (optional)'"
        :placeholder-name="'Instagram/Twitter/Facebook'"
      ></VInput>
    
    
    </div>
    
    <div
      v-if="!parent.switchParent"
      class="inputs"
    >
      <VInput
        v-model="secondParentFirstName"
        class="inputs__item"
        :input-name="'First Name*'"
        :placeholder-name="'Enter First Name*'"
      ></VInput>
      <VInput
        v-model="secondParentMiddleName"
        class="inputs__item"
        :input-name="'Middle Name*'"
        :placeholder-name="'Enter Middle Name*'"
      ></VInput>
      <VInput
        v-model="secondParentLastName"
        class="inputs__item"
        :input-name="'Last Name*'"
        :placeholder-name="'Enter Last Name*'"
      ></VInput>
      <VInput
        v-model="secondParentPhoneNumber"
        class="inputs__item"
        :input-name="'Cell phone number*'"
        :placeholder-name="'Enter phone number*'"
      ></VInput>
      <VInput
        v-model="secondParentEmail"
        class="inputs__item"
        :input-name="'Email'"
        :placeholder-name="'Email'"
      ></VInput>
      <VInput
        v-model="secondParentSocialNetwork"
        class="inputs__item"
        :input-name="'Instagram/Twitter/Facebook (optional)'"
        :placeholder-name="'Instagram/Twitter/Facebook'"
      ></VInput>
    </div>
    
    <VSecondaryBtnLarge
      v-if="!parent.addParent"
      :name-btn="'+ Add Parent(optional) '"
      @click-secondary-btn-large="addParent"
    ></VSecondaryBtnLarge>
  </div>

</template>

<script>
  import {ref, toRefs} from 'vue';
  import VSecondaryBtnLarge from './VSecondaryBtnLarge.vue';
  import VInput from './VInput.vue';
  
  export default {
    name: 'VParentGuardianInformation',
    components: {
      VInput,
      VSecondaryBtnLarge,
    },
    props: {
      itemsData: {
        type: Object,
        required: true,
        default: () => ({}),
      },
    },
    setup(props) {
      
      const {
        firstParentFirstName,
        firstParentMiddleName,
        firstParentLastName,
        firstParentPhoneNumber,
        firstParentEmail,
        firstParentSocialNetwork,
        secondParentFirstName,
        secondParentMiddleName,
        secondParentLastName,
        secondParentPhoneNumber,
        secondParentEmail,
        secondParentSocialNetwork,
      } = toRefs(props.itemsData);
      const parentTitle = ref(true);
      const parent = ref({
        addParent: false,
        switchParent: true,
      });
      
      function addParent() {
        parent.value.addParent = !parent.value.addParent;
      }
      
      function switchParent() {
        parent.value.switchParent = !parent.value.switchParent;
        parentTitle.value = !parentTitle.value;
      }
      
      return {
        parent,
        parentTitle,
        addParent,
        switchParent,
        firstParentFirstName,
        firstParentMiddleName,
        firstParentLastName,
        firstParentPhoneNumber,
        firstParentEmail,
        firstParentSocialNetwork,
        secondParentFirstName,
        secondParentMiddleName,
        secondParentLastName,
        secondParentPhoneNumber,
        secondParentEmail,
        secondParentSocialNetwork,
      };
    },
  };
</script>

<style
  scoped
  lang="scss"
>
  @import "/src/styles/main";
  
  .wrapper {
    display: flex;
    flex-direction: column;
    
    &__header {
      @include Heading_3;
      color: $Black-Normal;
    }
    
    &__item {
      margin-top: 32px;
      
      &:first-child {
        margin: 0;
      }
    }
  }
  
  .inputs {
    display: flex;
    flex-direction: column;
    
    &__item {
      margin-top: 32px;
      
      &:first-child {
        margin: 0;
      }
    }
  }
</style>