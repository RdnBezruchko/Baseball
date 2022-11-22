<template>
  <div class="inputs">
    <VInput
      class="inputs__item"
      :input-label="'Email*'"
      :placeholder="'Enter email'"
    ></VInput>
    <VButton
      class="inputs_btn"
    >
      Change Email
    </VButton>
    <div class="inputs__password password">
      <p class="password__title">Password</p>
      <p class="password__description">If you want to change the existing password, please click the button “Change
        password”</p>
    </div>
    <VButton
      class="inputs_btn"
    >
      Change Password
    </VButton>
  </div>
</template>

<script>
  import VInput from './VInput.vue';
  import VButton from './VButton.vue';
  
  export default {
    name: 'PersonalInfoContentChangeEmailAndPassword',
    components: {
      VButton,
      VInput,
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
  .password {
    width: 350px;
    margin-top: 40px;
  
    &__title {
      @include BodyMedium-Bold;
      color: $Light-Blue-Hard;
    }
    &__descr {
      @include BodyLarge-Medium;
      color: $Grey-Medium;
      margin-top: 12px;
    }
  }
  .inputs_btn {
    margin-top: 32px;
  }
</style>