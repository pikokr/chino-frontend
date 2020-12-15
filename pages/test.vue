<template>
  <div>test</div>
</template>

<script>
export default {
  name: 'Test',
  asyncData() {
    return new Promise((resolve) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      setTimeout(() => resolve({}), 1000)
    })
  },
}
</script>
