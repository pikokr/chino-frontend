<template>
  <div class="container">로그아웃 처리중..</div>
</template>

<script>
export default {
  name: 'Callback',
  asyncData(ctx) {
    ctx.app.$cookies.remove('_TOKEN')
    ctx.store.commit('SET_USER', null)
    ctx.redirect('/')
    return {}
  },
}
</script>

<style scoped>
.container {
  justify-content: center;
  display: flex;
}
</style>
