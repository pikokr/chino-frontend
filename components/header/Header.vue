<template>
  <nav class="header-container">
    <h2 style="flex-grow: 1">
      <nuxt-link
        to="/"
        style="color: var(--text-primary); text-decoration: none"
        >치노봇</nuxt-link
      >
    </h2>
    <div>
      <div v-if="$store.state.user">
        <div
          class="popover-button"
          @click.stop="userPopoverOpen = !userPopoverOpen"
        >
          {{ $store.state.user.username }}#{{ $store.state.user.discriminator }}
        </div>
        <div :class="{ 'popover-container': true, show: userPopoverOpen }">
          POPOVER
        </div>
      </div>
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
  data: () => ({
    userPopoverOpen: false,
  }),
}
</script>
<style lang="scss" scoped>
.header-container {
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.popover-container {
  background: var(--background-secondary);
  border-radius: 3px;
  padding: 10px;
  position: absolute;
  top: 50px;
  right: 10px;
  pointer-events: none;
  opacity: 0;
  &.show {
    opacity: 1;
    pointer-events: unset;
    transform: translateY(10px);
  }

  transform: translateY(0);
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
}
.popover-button {
  cursor: pointer;
  user-select: none;
}
</style>
