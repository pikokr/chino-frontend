<template>
  <div>
    <div v-for="guild in servers" :key="guild.id" ref="item" class="item">
      <span style="flex-grow: 1">{{ guild.name }}</span>
      <Button>버튼!</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { TimelineMax } from 'gsap'
import Button from '~/components/basic/Button.vue'

const tl = new TimelineMax()

export default {
  name: 'Servers',
  components: { Button },
  async asyncData(ctx: Context) {
    if (!ctx.app.$cookies.get('_TOKEN')) return ctx.redirect('/')
    try {
      const data = await ctx.$axios.get(
        `${ctx.store.state.backend}/me/guilds`,
        {
          headers: {
            Authorization: ctx.app.$cookies.get('_TOKEN'),
          },
        }
      )
      if (data?.status !== 200) return ctx.redirect('/')
      return { servers: data.data.filter((r: any) => r.permissions & 8) }
    } catch (e) {
      return ctx.redirect('/')
    }
  },
  mounted() {
    // @ts-ignore
    const { item } = this.$refs

    tl.from(item, {
      opacity: 0,
      stagger: 0.1,
    }).to(item, {
      opacity: 1,
      delay: 200,
    })
  },
}
</script>

<style lang="scss" scoped>
.item {
  padding: 20px;
  display: flex;
  align-items: center;
  margin: 10px;
  background-color: var(--background-secondary);
  border-radius: 3px;
  @media (min-width: 1024px) {
    margin-left: 15%;
    margin-right: 15%;
  }
}
</style>
