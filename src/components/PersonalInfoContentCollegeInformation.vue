<template>
  <div class="inputs">
    <div class="inputs__collage-committed collage-committed">
      <VCheckBox
        сlass="collage-committed__checkbox"
        @check="check"
      ></VCheckBox>
      <div class="collage-committed__description">I have already committed to a college</div>
    </div>
    <VInput
      v-model="collageName  "
      :is-disabled="checked"
      class="inputs__item"
      :input-label="'College Name'"
      :placeholder="'Enter College Name'"
    ></VInput>
    <VDropDown
      v-model="division"
      class="inputs__dropdown"
      :is-disabled="checked"
      :options="divisions"
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
      const checked = ref(true)

      function check() {
        checked.value = !checked.value
      }

      return {
        collageName,
        division,
        divisions,
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

.collage-committed {
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