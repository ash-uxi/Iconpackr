<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <path d="M11 9.8C11 9.51997 11 9.37996 11.0545 9.273C11.1024 9.17892 11.1789 9.10243 11.273 9.0545C11.38 9 11.52 9 11.8 9H12.2C12.48 9 12.62 9 12.727 9.0545C12.8211 9.10243 12.8976 9.17892 12.9455 9.273C13 9.37996 13 9.51997 13 9.8V10.2C13 10.48 13 10.62 12.9455 10.727C12.8976 10.8211 12.8211 10.8976 12.727 10.9455C12.62 11 12.48 11 12.2 11H11.8C11.52 11 11.38 11 11.273 10.9455C11.1789 10.8976 11.1024 10.8211 11.0545 10.727C11 10.62 11 10.48 11 10.2V9.8Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M17 9.8C17 9.51997 17 9.37996 17.0545 9.273C17.1024 9.17892 17.1789 9.10243 17.273 9.0545C17.38 9 17.52 9 17.8 9H18.2C18.48 9 18.62 9 18.727 9.0545C18.8211 9.10243 18.8976 9.17892 18.9455 9.273C19 9.37996 19 9.51997 19 9.8V10.2C19 10.48 19 10.62 18.9455 10.727C18.8976 10.8211 18.8211 10.8976 18.727 10.9455C18.62 11 18.48 11 18.2 11H17.8C17.52 11 17.38 11 17.273 10.9455C17.1789 10.8976 17.1024 10.8211 17.0545 10.727C17 10.62 17 10.48 17 10.2V9.8Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M21 15H3" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M5 9.8C5 9.51997 5 9.37996 5.0545 9.273C5.10243 9.17892 5.17892 9.10243 5.273 9.0545C5.37996 9 5.51997 9 5.8 9H6.2C6.48003 9 6.62004 9 6.727 9.0545C6.82108 9.10243 6.89757 9.17892 6.9455 9.273C7 9.37996 7 9.51997 7 9.8V10.2C7 10.48 7 10.62 6.9455 10.727C6.89757 10.8211 6.82108 10.8976 6.727 10.9455C6.62004 11 6.48003 11 6.2 11H5.8C5.51997 11 5.37996 11 5.273 10.9455C5.17892 10.8976 5.10243 10.8211 5.0545 10.727C5 10.62 5 10.48 5 10.2V9.8Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiDock02DuoStroke icon from the duo-stroke style in devices category.
 */
export default {
  name: 'PiDock02DuoStroke',
  props: {
    size: {
      type: Number,
      default: 24
    },
    color: {
      type: String,
      default: undefined
    },
    className: {
      type: String,
      default: undefined
    },
    ariaLabel: {
      type: String,
      default: 'dock-02 icon'
    }
  }
}
</script>
