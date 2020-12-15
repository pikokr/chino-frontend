<template>
  <a :href="href" :class="'btn ' + (color || 'purple')" @click="$emit('click')">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    color: {
      type: String,
      default: 'purple',
    },
    href: {
      type: String,
      default: null,
    },
  },
}
</script>

<style scoped lang="scss">
.btn {
  user-select: none;
  cursor: pointer;
  border-radius: 3px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  padding: 6px 16px;
  outline: none;
  border: none;
  height: 32px;
  min-width: 60px;
  min-height: 32px;
  text-decoration: none;
  transition: background-color 0.17s ease;
  &.purple {
    background-color: #7289da;
    color: #fff;
    &:hover {
      background-color: #677bc4;
    }
    &:active {
      background-color: #5b6eae;
    }
  }
  &.grey {
    background-color: #747f8d;
    color: #fff;
    &:hover {
      background-color: #68727f;
    }
    &:active {
      background-color: #5d6671;
    }
  }
  &.red {
    background-color: #f04747;
    color: #fff;
    &:hover {
      background-color: #d84040;
    }
    &:active {
      background-color: #c03939;
    }
  }
  &.green {
    background-color: #43b581;
    color: #fff;
    &:hover {
      background-color: #3ca374;
    }
    &:active {
      background-color: #369167;
    }
  }
}
</style>
