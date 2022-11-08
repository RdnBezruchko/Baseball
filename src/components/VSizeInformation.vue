<template>
  <div class="items">
    <div class="items__wrapper">
      <VDropDownSmall
        v-model="primaryPosition"
        :drop-down-title="'Primary position*'"
        :drop-down-menus="test"
      ></VDropDownSmall>
      <VDropDownSmall
        v-model="secondaryPosition"
        :drop-down-title="'Secondary position*'"
      ></VDropDownSmall>
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
      <VDropDownSmall
        v-model="thrower"
        :drop-down-title="'Thrower*'"
      ></VDropDownSmall>
    </div>
    <div class="items__wrapper">
      <VDropDownSmall
        v-model="batter"
        :drop-down-title="'Batter* '"
      ></VDropDownSmall>
      <VDropDownSmall
        v-model="pantsSize"
        :drop-down-title="'Shorts/Pants size*'"
      ></VDropDownSmall>
    </div>
    <div class="items__wrapper">
      <VDropDownSmall
        v-model="shirtSize"
        :drop-down-title="'Shirt size*'"
      ></VDropDownSmall>
      <VDropDownSmall
        v-model="hatSize"
        :drop-down-title="'Hat size*'"
      ></VDropDownSmall>
    </div>
  
  </div>
</template>

<script>
  import {toRefs} from 'vue';
  import VDropDownSmall from './VDropDownSmall.vue';
  import VInput from './VInput.vue';
  
  export default {
    name: 'VSizeInformation',
    components: {
      VInput,
      VDropDownSmall,
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