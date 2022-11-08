<template>
  <div class="inputs">
    <div class="committed">
      <VCheckBox @checkFunc="checkFunc" class="committed__checkbox"></VCheckBox>
      <div class="committed__description">I have already committed to a college</div>
    </div>
    <VInput
      :checked="checked"
      v-model="collageName"
      class="inputs__item"
      :input-name="'College Name'"
      :placeholder-name="'Enter College Name'"
    ></VInput>
    <VDropDownLarge
      v-model="division"
      class="inputs__dropdown"
      :checked="checked"
      :drop-down-menus="divisions"
      :drop-down-title="'Division'"
    ></VDropDownLarge>
  </div>
</template>


<script>
import {ref, toRefs} from 'vue'
import VInput from './VInput.vue';
import VDropDownLarge from './VDropDownLarge.vue';
import VCheckBox from './VCheckBox.vue';

export default {
  name: 'VCollageInformation',
  components: {
    VCheckBox,
    VDropDownLarge,
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

    function checkFunc() {
      checked.value = !checked.value
      console.log(checked.value)
    }

    return {
      collageName,
      division,
      divisions,
      someConst,
      checkFunc,
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
      margin: 0px;
    }
  }
}
</style>