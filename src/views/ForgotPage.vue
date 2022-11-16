<template>
  <div class="wrapper">
    <div class="wrapper__background"></div>
    <div class="forgot">
      <div>
        <h2 class="forgot__header">Forgot password</h2>
        <div class="forgot__description">Enter your email to receive a link to reset your password</div>
        <VInput
          v-model="input.mail"
          class="forgot__input"
          :placeholder="'Enter your Email'"
        ></VInput>
        <VButton
          class="forgot__btn"
          :class="{disabled: input.mail === '' && input.password === ''}"
          :button="'Send Reset link'"
        ></VButton>
      </div>
    </div>
  </div>
</template>

<script>
  import {ref} from 'vue';
  import VInput from '../components/VInput.vue';
  import VButton from '../components/VButton.vue';
 
  
  export default {
    name: 'VForgotPage',
    components:
      {
        VInput,
        VButton,
      },
    setup() {
      
      const input = ref({
        mail: '',
        password: '',
      });
      return {
        input,
      };
    },
  };
</script>

<style
  lang="scss"
  scoped
>
  @import "/src/styles/main";

  .wrapper {
    display: flex;
    align-items: center;
    &__background {
      background: url("../assets/bg.jpg") center center/cover no-repeat;
      width: 568px;
      height: 100vh;
    }
  }


  .forgot {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 872px;
    
    & > div {
      display: flex;
      flex-direction: column;
    }
    &__btn {
      margin: 0 auto;
      margin-top: 32px;
    }
    &__input {
      margin: 0 auto;
      margin-top: 32px;
    }
    
    
    &__header {
      text-align: center;
      @include Heading_3;
      color: $Black-Normal;
    }
    
    &__description {
      @include BodyXLarge-Medium;
      color: $Grey-Hard;
      margin-top: 20px;
    }
  }
  
 
  .checkbox {
    margin-right: 15px;
  }
</style>