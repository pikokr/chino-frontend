<template>
  <transition name="loader">
    <div v-if="loading" class="loader-container">
      <!--      <div class="loading" />-->
      <radar-spinner
        :size="100"
        color="var(--text-primary)"
        :animation-duration="2000"
      />
    </div>
  </transition>
</template>

<script>
import { RadarSpinner } from 'epic-spinners'

export default {
  name: 'Loader',
  components: {
    RadarSpinner,
  },
  data: () => ({
    loading: true,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      setTimeout(() => (this.loading = false), 500)
    },
  },
}
</script>

<style lang="scss">
.loader-enter,
.loader-enter-to,
.loader-active,
.loader-leave,
.loader-leave-active,
.loader.leave-to {
  position: fixed;
  z-index: 99999;
}

.loader-enter-active,
.loader-leave-active {
  transition: opacity 0.2s ease;
}

.loader-enter,
.loader-leave-to {
  opacity: 0;
}

.loader-container {
  width: 100vw;
  height: 100vh;
  background: var(--background-secondary);
  left: 0;
  top: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9999999;
}

@keyframes loader-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading {
  width: 100px;
  height: 100px;
  border-top: 5px solid rgba(255, 255, 255, 0.2);
  border-right: 5px solid rgba(255, 255, 255, 0.2);
  border-bottom: 5px solid rgba(255, 255, 255, 0.2);
  border-left: 5px solid #fff;
  border-radius: 50%;
  animation: loader-animation 0.2s infinite linear;
}
</style>
