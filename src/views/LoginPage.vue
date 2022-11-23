<template>
  <div class="wrapper">
    <div class="wrapper__background"></div>
    <div class="wrapper__login-page login-page">
      <div>
        <h2 class="login-page__header">Log in</h2>
        <div class="login-page__description">Please enter your credentials to access your account</div>

        <VInput
          v-model="inputData.mail"
          :mail-string="inputData.mail"
          :input-label="'Email'"
          :error="isErrorActive"
          type="email"
          class="login-page__input"
          :placeholder="'Enter your Email'"
        ></VInput>

        <VInput
          v-model="inputData.password"
          :input-label="'Password'"
          :is-password-icon-hidden="true"
          :is-password-hidden="isPasswordHidden"
          class="login-page__input"
          :placeholder="'Enter your password'"
          @show-password="showPassword"
        ></VInput>

        <VButton
          :is-disabled="isAvailableLogin"
          class="login-page__btn"
          :button-text="'Login'"
          @click="checkMail"
        >
          Login
        </VButton>
        <div class="login-page__footer footer">
          <div class="footer__wrapper">
            <VCheckBox></VCheckBox>
            <div class="footer__remember">Remember me</div>
          </div>
          <router-link
            class="footer__btn"
            to="/forgot"
          >Forgot password?</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {computed, ref} from 'vue';
  import VInput from '../components/VInput.vue';
  import VButton from '../components/VButton.vue';
  import VCheckBox from "../components/VCheckBox.vue";
  
  export default {
    name: 'LoginPage',
    components: {
      VCheckBox,
      VInput,
      VButton,
    },
    setup() {
      const isPasswordHidden = ref(true);
      const inputData = ref({
        mail: '',
        password: '',
      });
      const isErrorActive = ref(false);
      const isAvailableLogin = computed(() => inputData.value.mail && inputData.value.password ? !inputData.value.mail.length && inputData.value.password.length : true)
      
      function checkMail() {
        isErrorActive.value = !inputData.value.mail.toString().toLowerCase().match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
      }
      
      function showPassword() {
        isPasswordHidden.value = !isPasswordHidden.value;
      }
      
      return {
        inputData,
        checkMail,
        isErrorActive,
        showPassword,
        isPasswordHidden,
        isAvailableLogin,
      };
    },
  };
</script>

<style
  lang="scss"
  scoped
>
  @import "/src/styles/main";
  
  
  
  .login-page {
    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 568px);
    
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

    &__btn {
      margin: 0 auto;
      margin-top: 32px;
    }
    
    &__input {
      margin: 0 auto;
      margin-top: 32px;
    }
  }
  
  .footer {
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    &__wrapper {
      display: flex;
      align-items: center;
    }
    
    & > input {
      background: $White-Normal;
      border-radius: 4px;
    }
    
    
    &__btn {
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