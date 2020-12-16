<template>
  <div class="container">서버목록</div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'

export default {
  name: 'Servers',
  async asyncData(ctx: Context) {
    if (!ctx.app.$cookies.get('_TOKEN')) return ctx.redirect('/')
    const data = await ctx.app.$axios
      .get(`${ctx.store.state.backend}/me/guilds`, {
        headers: {
          Authorization: ctx.app.$cookies.get('_TOKEN'),
        },
      })
      .catch((e) => e)
    if (data?.status !== 200) return ctx.redirect('/')
    return {}
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 10px;
}
</style>
