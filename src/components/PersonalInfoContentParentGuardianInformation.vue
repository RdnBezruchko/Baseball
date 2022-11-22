<template>
  <div class="wrapper">
    <VButton
      v-if="isTwoParentActive"
      :button-type="'secondary'"
      @click="switchParent"
    >
      {{`${isFirstParentActive ? '2' : '1'}st Parent information`}}
    </VButton>
    <h3 class="wrapper__header">{{ `${isFirstParentActive ? '1' : '2'}st Parent information` }}</h3>
    <div
      v-if="isFirstParentActive"
      class="wrapper__inputs inputs"
    >
      <VInput
        v-model="firstParentFirstName"
        class="inputs__item"
        :input-label="'First Name*'"
        :placeholder="'Enter First Name*'"
      ></VInput>
      <VInput
        v-model="firstParentLastName"
        class="inputs__item"
        :input-label="'Last Name*'"
        :placeholder="'Enter Last Name*'"
      ></VInput>
      <VInput
        v-model="firstParentPhoneNumber"
        class="inputs__item"
        :input-label="'Cell phone number*'"
        :placeholder="'Enter phone number*'"
      ></VInput>
      <VInput
        v-model="firstParentEmail"
        class="inputs__item"
        :input-label="'Email'"
        :placeholder="'Email'"
      ></VInput>
      <VInput
        v-model="firstParentSocialNetwork"
        class="inputs__item"
        :input-label="'Instagram/Twitter/Facebook (optional)'"
        :placeholder="'Instagram/Twitter/Facebook'"
      ></VInput>
    </div>
    
    <div
      v-if="!isFirstParentActive"
      class="inputs"
    >
      <VInput
        v-model="secondParentFirstName"
        class="inputs__item"
        :input-label="'First Name*'"
        :placeholder="'Enter First Name*'"
      ></VInput>
      <VInput
        v-model="secondParentLastName"
        class="inputs__item"
        :input-label="'Last Name*'"
        :placeholder="'Enter Last Name*'"
      ></VInput>
      <VInput
        v-model="secondParentPhoneNumber"
        class="inputs__item"
        :input-label="'Cell phone number*'"
        :placeholder="'Enter phone number*'"
      ></VInput>
      <VInput
        v-model="secondParentEmail"
        class="inputs__item"
        :input-label="'Email'"
        :placeholder="'Email'"
      ></VInput>
      <VInput
        v-model="secondParentSocialNetwork"
        class="inputs__item"
        :input-label="'Instagram/Twitter/Facebook (optional)'"
        :placeholder="'Instagram/Twitter/Facebook'"
      ></VInput>
    </div>
    
    <VButton
      v-if="!isTwoParentActive"
      :button-type="'secondary'"
      @click="addParent"
    >
      + Add Parent(optional)
    </VButton>
  </div>

</template>

<script>
  import {ref, toRefs} from 'vue';
  import VInput from './VInput.vue';
  import VButton from "./VButton.vue";
  
  export default {
    name: 'PersonalInfoContentParentGuardianInformation',
    components: {
      VButton,
      VInput,
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
      const isFirstParentActive = ref(true);
      const isTwoParentActive = ref(false)
      
      function addParent() {
        isTwoParentActive.value = !isTwoParentActive.value;
      }
      
      function switchParent() {
        isFirstParentActive.value = !isFirstParentActive.value;
      }
      
      return {
        isFirstParentActive,
        isTwoParentActive,
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