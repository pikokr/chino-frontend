<template>
  <nav class="header-container">
    <h2 style="flex-grow: 1">치노봇</h2>
    <div>
      <div v-if="$store.state.user"></div>
      <Button v-else :href="$store.state.backend + '/auth/login'"
        >로그인</Button
      >
    </div>
  </nav>
</template>

<script>
import Button from '../basic/Button'
export default {
  name: 'Header',
  components: { Button },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.$store.state.user)
  },
}
</script>
<style lang="scss" scoped>
.header-container {
  padding: 15px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
