<template>
  <div class="inputs">
    <VInput
      v-model="streetAddress"
      class="inputs__item"
      :input-name="'Street address'"
      :placeholder-name="'Street address'"
    ></VInput>
    <VInput
      v-model="city"
      class="inputs__item"
      :input-name="'City'"
      :placeholder-name="'Enter city'"
    ></VInput>
    <VDropDownLarge v-model="state" class="inputs__dropdown" :drop-down-title="'State'"></VDropDownLarge>
    <VInput
      v-model="zipCode"
      class="inputs__item"
      :input-name="'Zip code'"
      :placeholder-name="'Zip code'"
    ></VInput>
  </div>
</template>

<script>
  import {ref, toRefs} from 'vue';
  import VInput from './VInput.vue';
  import VDropDownLarge from './VDropDownLarge.vue';
  
  export default {
    name: 'VAddressAndZipInformation',
    components: {
      VDropDownLarge,
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
      
      const someData = ref(props.itemsData)
      const {zipCode, city, streetAddress, state} = toRefs(props.itemsData)
      
      
      
      return {
        someData,
        state,
        zipCode,
        city,
        streetAddress,
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