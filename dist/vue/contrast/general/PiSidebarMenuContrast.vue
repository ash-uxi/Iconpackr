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
    <path fill="currentColor" d="M3 11v2c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185c.778.396 1.73.504 3.27.534V3.01c-1.54.03-2.492.137-3.27.534A5 5 0 0 0 3.545 5.73C3 6.8 3 8.2 3 11" opacity=".28"/>
  <path d="M6 8h.01M6 12h.01M6 16h.01M9 3.011C9.577 3 10.236 3 11 3h2c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C21 6.8 21 8.2 21 11v2c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C17.2 21 15.8 21 13 21h-2c-.764 0-1.423 0-2-.011M9 3.011c-1.54.03-2.492.138-3.27.534A5 5 0 0 0 3.545 5.73C3 6.8 3 8.2 3 11v2c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185c.778.396 1.73.505 3.27.534M9 3.011V20.99"/>
  </svg>
</template>

<script>
/**
 * PiSidebarMenuContrast icon from the contrast style in general category.
 */
export default {
  name: 'PiSidebarMenuContrast',
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
      default: 'sidebar-menu icon'
    }
  }
}
</script>
