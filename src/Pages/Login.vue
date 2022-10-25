<template>
  <log-system>
    <form action="#" method="post">
      <h1 class="
              text-2xl
              underline underline-offset-8
              relative
              -left-2
              font-extrabold
            ">
        Login
      </h1>
      <div class="flex flex-col mt-5">
        <label for="email" class="text-xl">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter Email"
          class="p-2 bg-transparent border-2 rounded-lg" />
      </div>
      <!-- Password -->
      <Password title="Password" placeholder="Password" attribute="password" />
      <!-- CheckBox -->
      <div class="-mt-2 text-lg">
        <input type="checkbox" name="remember" id="remember" class="h-4 w-4 accent-[#AC85EC]" />
        <label for="remember" class="ml-3">Remember Me</label>
        <Span class="ml-16"><router-link to="/reset/password">Forgot Password?</router-link></Span>
      </div>
      <!-- Button Login -->
      <button type="submit" class="bg-[#AC85EC] w-full p-2 mt-3 rounded-lg">
        Login
      </button>
      <div class="text-center mt-6">
        <h3>
          Don't have an account?<router-link to="/signup"> SingUp</router-link>
        </h3>
      </div>
    </form>
  </log-system>
</template>

<script>
import LogSystem from '../layout/LogSystem.vue'
import Password from './Components/Password.vue';
export default {
  components: {
    LogSystem,
    Password,
  }
}
</script>
