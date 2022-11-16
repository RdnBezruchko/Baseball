<template>
  <div class="inputs">
    <VInput
      v-model="email"
      class="inputs__item"
      :input-name="'Email'"
      :placeholder="'Enter your Email'"
    ></VInput>
    <VInput
      v-model="firstName"
      class="inputs__item"
      :input-name="'First Name'"
      :placeholder="'Enter First Name'"
    ></VInput>
    <VInput
      v-model="middleName"
      class="inputs__item"
      :input-name="'Middle Name (optional)'"
      :placeholder="'Enter Middle Name (optional)'"
    ></VInput>
    <VInput
      
      v-model="lastName"
      class="inputs__item"
      :input-name="'Last Name'"
      :placeholder="'Enter Last Name'"
    ></VInput>
  </div>
</template>

<script>
  import {toRefs} from 'vue';
  import VInput from './VInput.vue';
  
  export default {
    name: 'PersonalInfoContentAboutMyself',
    components: {
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
      const {email, firstName, middleName, lastName} = toRefs(props.itemsData);
      return {
        email,
        firstName,
        middleName,
        lastName,
      };
    },
  };
</script>

<style
  scoped
  lang="scss"
>
  @import "/src/styles/main";
  
  .inputs {
    display: flex;
    flex-direction: column;
    
    &__dropdown {
      margin-top: 32px;
    }
    
    &__item {
      margin-top: 32px;
      
      &:first-child {
        margin: 0;
      }
    }
  }
</style>