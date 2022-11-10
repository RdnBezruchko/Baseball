<template>
  <div class="wrapper">
    <div class="wrapper__background"></div>
    <div class="login">
      <div>
        <h2 class="login__header">Log in</h2>
        <div class="login__description">Please enter your credentials to access your account</div>

        <VInput
          v-model="inputData.mail"
          :input-mail="inputData.mail"
          :input-name="'Email'"
          :error="errorStatus"
          type="email"
          class="login__input"
          :placeholder-name="'Enter your Email'"
        ></VInput>
        <div class="login__password">
          <VInput
            v-model="inputData.password"
            :input-name="'Password'"
            minlength="6"
            :password-hide="passwordCheck"
            class="login__input"
            :placeholder-name="'Enter your password'"
            :class="{errorStatus: false}"
          ></VInput>
          <img
            v-show="passwordCheck"
            class="login__show"
            src="../assets/svg/eye%20on.svg"
            @click="showPassword"
          >
          <img
            v-show="!passwordCheck"
            class="login__show"
            src="../assets/svg/eye%20off.svg"
            @click="showPassword"
          >
        </div>
        <VButton
          :input-data="inputData"
          class="login__btn"
          :button="'Login'"
          @click="checkMail()"
        ></VButton>
        <div class="password">
          <div class="wrapper">
            <VCheckBox></VCheckBox>
            <div class="password__remember">Remember me</div>
          </div>
          <router-link
            class="password__forgot"
            to="/forgot"
          >Forgot password?</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {ref} from 'vue';
  import VInput from '../components/VInput.vue';
  import VButton from '../components/VButton.vue';
  import VCheckBox from "../components/VCheckBox.vue";
  
  export default {
    name: 'VLoginPage',
    components: {
      VCheckBox,
      VInput,
      VButton,
    },
    setup() {
      const passwordCheck = ref(false);
      const inputData = ref({
        mail: '',
        password: '',
      });
      const errorStatus = ref('null');
      
      function checkMail() {
        if (inputData.value.mail.length > 0 && inputData.value.password.length > 0) {
          errorStatus.value = inputData.value.mail.toString().toLowerCase().match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        }
      }
      
      function showPassword() {
        passwordCheck.value = !passwordCheck.value;
      }
      
      return {
        inputData,
        checkMail,
        errorStatus,
        showPassword,
        passwordCheck,
      };
    },
  };
</script>

<style
  lang="scss"
  scoped
>
  @import "/src/styles/main";
  
  
  
  .login {
    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 872px;
    
    & > div {
      display: flex;
      flex-direction: column;
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
    
    &__password {
      position: relative;
    }
    
    &__show {
      cursor: pointer;
      
      position: absolute;
      top: 78px;
      right: 15px;
    }
    
    &__btn {
      margin: 0 auto;
      margin-top: 32px;
    }
    
    &__input {
      margin: 0 auto;
      margin-top: 32px;
    }
  }
  
  .password {
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    
    & > input {
      //margin-top: 24px;
      background: $White-Normal;
      border-radius: 4px;
    }
    
    
    &__forgot {
      @include BodyMedium-SemiBold;
      color: $Light-Blue-Hard;
    }
    
    &__remember {
      @include BodyMedium-Medium;
      color: $Light-Blue-Hard;
      text-decoration: none;
    }
  }
  
  .wrapper {
    display: flex;
    align-items: center;
    &__background {
      background: url("../assets/bg.jpg") center center/cover no-repeat;
      width: 568px;
      height: 100vh;
    }
  }
  
  .checkbox {
    margin-right: 15px;
  }
</style>