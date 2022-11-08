<template>
  <div class="inputs">
    <VInput
      class="inputs__item"
      :input-name="'Email*'"
      :placeholder-name="'Enter email'"
    ></VInput>
    <VButton class="btn" :button="'Change Email'"></VButton>
    <div class="password">
      <p class="password__title">Password</p>
      <p class="password__descr">If you want to change the existing password, please click the button “Change
        password”</p>
    </div>
    <VButton class="btn" :button="'Change Password'"></VButton>
  </div>
</template>

<script>
  import VInput from './VInput.vue';
  import VButton from './VButton.vue';
  
  export default {
    name: 'VChangeEmailAndPassword',
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
        margin: 0px;
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
  .btn {
    margin-top: 32px;
  }
</style>