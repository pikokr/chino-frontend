<template>
  <div class="container">로그인 처리중..</div>
</template>

<script>
export default {
  name: 'Callback',
  asyncData(ctx) {
    ctx.app.$cookies.set('_TOKEN', ctx.query.token)
    ctx.redirect('/')
  },
}
</script>

<style scoped>
.container {
  justify-content: center;
  display: flex;
}
</style>
