<template>
  <div class="w-full mx-auto container relative flex flex-col items-center top-1/2 -translate-y-1/2">
    <img alt="Vue logo" class="logo mx-auto" src="@/assets/logo.png"/>
    <img alt="Vue logo" class="logo mx-auto" src="@/assets/dc.png"/>
  </div>
</template>

<script>
  import {login} from "@/api/user";

  export default {
    mounted() {
      Telegram.WebApp.MainButton
          .setText('Get user Info')
          .show()
          .onClick(function () {
            this.login()
          })
    },
    methods: {
      async login() {
        await login(Telegram.WebApp.initDataUnsafe)
      }
    }
  }

</script>

