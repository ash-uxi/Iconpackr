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
    <path d="M15 20.989C14.423 21 13.764 21 13 21h-2c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C3 17.2 3 15.8 3 13v-2c0-2.8 0-4.2.545-5.27A5 5 0 0 1 5.73 3.545C6.8 3 8.2 3 11 3h2c.764 0 1.423 0 2 .011m0 17.978c1.54-.03 2.492-.138 3.27-.534a5 5 0 0 0 2.185-2.185C21 17.2 21 15.8 21 13v-2c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185c-.778-.396-1.73-.504-3.27-.534m0 17.978V20m0-16.989V4m0 4v2m0 4v2"/>
  <path fill="currentColor" d="M21 11v2c0 2.8 0 4.201-.545 5.27a5 5 0 0 1-2.185 2.186c-.778.396-1.73.504-3.27.534V3.012c1.54.03 2.492.137 3.27.534a5 5 0 0 1 2.185 2.185C21 6.8 21 8.2 21 11" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiSidebarRightDottedContrast icon from the contrast style in general category.
 */
export default {
  name: 'PiSidebarRightDottedContrast',
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
      default: 'sidebar-right-dotted icon'
    }
  }
}
</script>
