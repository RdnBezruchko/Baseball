<template>
  <div class="inputs">
    <VInput
      v-model="email"
      class="inputs__item"
      :input-name="'Email'"
      :placeholder-name="'Enter your Email'"
    ></VInput>
    <VInput
      v-model="firstName"
      class="inputs__item"
      :input-name="'First Name'"
      :placeholder-name="'Enter First Name'"
    ></VInput>
    <VInput
      v-model="middleName"
      class="inputs__item"
      :input-name="'Middle Name (optional)'"
      :placeholder-name="'Enter Middle Name (optional)'"
    ></VInput>
    <VInput
      
      v-model="lastName"
      class="inputs__item"
      :input-name="'Last Name'"
      :placeholder-name="'Enter Last Name'"
    ></VInput>
  </div>
</template>

<script>
  import {toRefs} from 'vue';
  import VInput from './VInput.vue';
  
  export default {
    name: 'VAboutMyself',
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
        margin: 0px;
      }
    }
  }
</style>