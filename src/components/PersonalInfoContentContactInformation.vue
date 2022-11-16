<template>
  <div class="inputs">
    <VInput
      v-model="phoneNumber"
      class="inputs__item"
      :input-name="'Player cell phone number*'"
      :placeholder="'phone'"
    ></VInput>
    <VInput
      v-model="instagram"
      class="inputs__item"
      :input-name="'Instagram (optional)'"
      :placeholder="'Instagram'"
    ></VInput>
    <VInput
      v-model="twitter"
      class="inputs__item"
      :input-name="'Twitter (optional)'"
      :placeholder="'Twitter'"
    ></VInput>
  </div>
</template>
<script>
  import {toRefs} from 'vue';
  import VInput from './VInput.vue';
  
  export default {
    name: 'PersonalInfoContentContactInformation',
    components:
      {
        VInput,
      },
    props: {
      itemsData: {
        type: Object,
        default: () => ({}),
      },
    },
    setup(props) {
      const {phoneNumber, instagram , twitter} = toRefs(props.itemsData)
      return {
        phoneNumber,
        instagram,
        twitter,
      }
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
    
    &__item {
      margin-top: 32px;
      
      &:first-child {
        margin: 0;
      }
    }
  }
</style>