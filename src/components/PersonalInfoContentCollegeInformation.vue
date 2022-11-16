<template>
  <div class="inputs">
    <div class="committed">
      <VCheckBox class="committed__checkbox" @check="check"></VCheckBox>
      <div class="committed__description">I have already committed to a college</div>
    </div>
    <VInput
      v-model="collageName"
      :checked="checked"
      class="inputs__item"
      :input-name="'College Name'"
      :placeholder="'Enter College Name'"
    ></VInput>
    <VDropDown
      v-model="division"
      class="inputs__dropdown"
      :checked="checked"
      :drop-down-menus="divisions"
      :drop-down-title="'Division'"
    ></VDropDown>
  </div>
</template>



<script>
  import {ref, toRefs} from 'vue'
  import VInput from './VInput.vue';
  import VDropDown from './VDropDown.vue';
  import VCheckBox from './VCheckBox.vue';

  export default {
    name: 'PersonalInfoContentCollegeInformation',
    components: {
      VCheckBox,
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
      const divisions = [
        {
          name: 'Division 1',
        },
        {
          name: 'Division 2',
        },
        {
          name: 'Division 3',
        },
      ];

      const {collageName, division} = toRefs(props.itemsData)
      const someConst = ref('')
      const checked = ref(false)

      function check() {
        checked.value = !checked.value
      }

      return {
        collageName,
        division,
        divisions,
        someConst,
        check,
        checked,
      };
    },
  };
</script>

<style
    scoped
    lang="scss"
>
@import "/src/styles/main";

.committed {
  display: flex;
  align-items: center;

  &__description {
    margin-left: 16px;
  }
}

.inputs {
  display: flex;
  flex-direction: column;

  &__dropdown {
    margin-top: 32px;
  }

  &__item {
    margin-top: 40px;

    &:first-child {
      margin: 0;
    }
  }
}
</style>