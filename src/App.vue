<template>
  <div class="w-full mx-auto container relative flex flex-col items-center top-1/2 -translate-y-1/2">
    <img alt="Vue logo" class="logo mx-auto" src="@/assets/logo.png"/>
    <img alt="Vue logo" class="logo mx-auto" src="@/assets/dc.png"/>
    <button @click="login">Отправить</button>
  </div>
</template>

<script>
  import {loginApi} from "@/api/user";

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
        await loginApi({
          id: Telegram.WebApp.initDataUnsafe.id,
          name: Telegram.WebApp.initDataUnsafe.username,
        })
      }
    }
  }

</script>

