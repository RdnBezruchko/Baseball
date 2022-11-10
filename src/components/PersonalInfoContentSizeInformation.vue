<template>
  <div class="items">
    <div class="items__wrapper">
      <VDropDown
        v-model="primaryPosition"
        :drop-down-size="'small'"
        :drop-down-title="'Primary position*'"
        :drop-down-menus="test"
      ></VDropDown>
      <VDropDown
        v-model="secondaryPosition"
        :drop-down-size="'small'"
        :drop-down-title="'Secondary position*'"
      ></VDropDown>
    </div>
    <div class="items__wrapper">
      <VInput
        v-model="heightFT"
        :input-name="'Height, ft*'"
        class="items__input"
      ></VInput>
      <VInput
        v-model="heightIN"
        :input-name="'Height, in*'"
        class="items__input"
      ></VInput>
    </div>
    <div class="items__wrapper">
      <VInput
        v-model="weight"
        :input-name="'Weight, lb*'"
        class="items__input"
      ></VInput>
      <VDropDown
        v-model="thrower"
        :drop-down-size="'small'"
        :drop-down-title="'Thrower*'"
      ></VDropDown>
    </div>
    <div class="items__wrapper">
      <VDropDown
        v-model="batter"
        :drop-down-size="'small'"
        :drop-down-title="'Batter* '"
      ></VDropDown>
      <VDropDown
        v-model="pantsSize"
        :drop-down-size="'small'"
        :drop-down-title="'Shorts/Pants size*'"
      ></VDropDown>
    </div>
    <div class="items__wrapper">
      <VDropDown
        v-model="shirtSize"
        :drop-down-size="'small'"
        :drop-down-title="'Shirt size*'"
      ></VDropDown>
      <VDropDown
        v-model="hatSize"
        :drop-down-size="'small'"
        :drop-down-title="'Hat size*'"
      ></VDropDown>
    </div>
  
  </div>
</template>

<script>
  import {toRefs} from 'vue';
  import VInput from './VInput.vue';
  import VDropDown from "./VDropDown.vue";
  
  export default {
    name: 'PersonalInfoContentSizeInformation',
    components: {
      VDropDown,
      VInput,
    },
    props: {
      itemsData: {
        type: Object,
        default: () => ({}),
      },
    },
    setup(props) {
      // const items = [
      //   {
      //     title: '',
      //   },
      //   {
      //     title: '',
      //   },
      //   {
      //     title: '',
      //   },
      //   {
      //     title: '',
      //   },
      //   {
      //     title: '',
      //   },
      // ];
      const test = [
        {
          name: 'LHP',
        },
        {
          name: '13123131313131',
        },
      ];
      const {
        primaryPosition,
        secondaryPosition,
        heightFT,
        heightIN,
        weight,
        thrower,
        batter,
        pantsSize,
        shirtSize,
        hatSize,
      } = toRefs(props.itemsData);
      
      return {
        test,
        primaryPosition,
        secondaryPosition,
        heightFT,
        heightIN,
        weight,
        thrower,
        batter,
        pantsSize,
        shirtSize,
        hatSize,
      };
    },
  };
</script>

<style
  scoped
  lang="scss"
>
  @import "/src/styles/main";
  
  .items {
    width: 388px;
    
    &__wrapper {
      display: flex;
      justify-content: space-between;
      margin-top: 25px;
      
      &:first-child {
        margin: 0;
      }
    }
    
    &__input {
      width: 178px;
    }
  }
</style>