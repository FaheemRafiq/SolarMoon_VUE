<template>
    <LogSystem>
            <!-- Login -->
            <form action="#" method="post">
          <h1
            class="
              text-2xl
              underline underline-offset-8
              relative
              -left-2
              font-extrabold
            "
          >
            Reset Password
          </h1>
          <!-- Password -->
          <div class="flex flex-col mt-3">
            <label for="password" class="text-xl">New Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter New Password"
              class="p-2 bg-transparent border-2 rounded-lg"
            />
          </div>
           <!-- Confirm Password -->
           <div class="flex flex-col mt-3">
            <label for="confirm_password" class="text-xl">Confirm New Password</label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm New Password"
              class="p-2 bg-transparent border-2 rounded-lg"
            />
          </div>
          <!-- Button Login -->
          <button type="submit" class="bg-[#AC85EC] w-full p-2 mt-5 rounded-lg">
           Submit
          </button>
          </form>
    </LogSystem>
</template>
<script>
import LogSystem from '../Layout/LogSystem.vue'
export default {
    components: {
        LogSystem,
    }
}
</script>