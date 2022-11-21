<template>
  <div class="inputs">
    <VInput
      v-model="streetAddress"
      class="inputs__item"
      :input-name="'Street address'"
      :placeholder="'Street address'"
    ></VInput>
    <VInput
      v-model="city"
      class="inputs__item"
      :input-name="'City'"
      :placeholder="'Enter city'"
    ></VInput>
    <VDropDown
      v-model="state"
      :drop-down-size="'large'"
      class="inputs__dropdown"
      :drop-down-title="'State'"
    ></VDropDown>
    <VInput
      v-model="zipCode"
      class="inputs__item"
      :input-name="'Zip code'"
      :placeholder="'Zip code'"
    ></VInput>
  </div>
</template>

<script>
  import {toRefs} from 'vue';
  import VInput from './VInput.vue';
  import VDropDown from './VDropDown.vue';

  export default {
    name: 'PersonalInfoContentAddressAndZipInformation',
    components: {
      VDropDown,
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
      const {zipCode, city, streetAddress, state} = toRefs(props.itemsData)
      return {
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
        margin: 0;
      }
    }
  }
</style>