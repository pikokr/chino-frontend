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
        <div class="popover-button" @click.stop="userPopoverOpen = true">
          <img
            :src="
              $store.state.user.avatar
                ? `https://cdn.discordapp.com/avatars/${$store.state.user.id}/${$store.state.user.avatar}`
                : 'https://cdn.discordapp.com/embed/avatars/' +
                  $store.state.user.discriminator
            "
            alt="avatar"
            class="avatar"
          />
          <span class="popover-button__username">{{
            $store.state.user.username
          }}</span>
          <div
            :class="{
              'popover-button__arrow': true,
              active: userPopoverOpen,
            }"
          />
        </div>
        <div
          :class="{ 'popover-container': true, show: userPopoverOpen }"
          @click="userPopoverOpen = false"
        >
          <div style="display: flex; flex-direction: column">
            <nuxt-link to="/servers" class="user-menu-item"
              >서버 선택하기</nuxt-link
            >
            <nuxt-link to="/auth/logout" class="user-menu-item red"
              >로그아웃</nuxt-link
            >
          </div>
        </div>
        <div
          :class="{ backdrop: true, show: userPopoverOpen }"
          @click="userPopoverOpen = false"
        />
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

.backdrop {
  background: transparent;
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  &.show {
    pointer-events: unset;
  }
}

.popover-container {
  background: var(--background-secondary);
  border-radius: 3px;
  padding: 5px;
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
  z-index: 99999;
}
.popover-button {
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
}
.avatar {
  width: 35px;
  height: 35px;
  margin-right: 10px;
  border-radius: 50%;
}
.popover-button__arrow {
  border: solid var(--text-primary);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin-left: 10px;
  transform: rotate(45deg);
  transition: transform 0.2s ease-in-out;
  &.active {
    transform: rotate(225deg);
  }
}
.popover-button__username {
  @media (min-width: 769px) {
    display: inline-block;
  }
  @media (max-width: 768px) {
    display: none;
  }
}

.user-menu-item {
  padding: 10px;
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 3px;
  background: transparent;
  transition: background-color 0.2s ease;
  &:hover {
    background: #555;
  }
  &.red {
    color: var(--text-red);
  }
}

.user-menu-item + .user-menu-item {
  margin-top: 5px;
}
</style>
