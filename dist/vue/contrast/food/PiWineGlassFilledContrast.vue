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
    <path fill="currentColor" d="M12 13c3.402 0 5.733-2.444 5.978-5.562C15.942 8.31 14.191 8.966 12 8c-2.12-.934-3.834-.357-5.812.49C6.82 11.09 8.991 13 12 13" opacity=".28"/>
  <path d="M12 13v9m0-9c3.403 0 5.733-2.444 5.979-5.562M12 13c-3.009 0-5.18-1.911-5.811-4.51M12 22h4m-4 0H8m9.979-14.562a7 7 0 0 0 .021-.55A10 10 0 0 0 16.698 2H7.302A10 10 0 0 0 6 6.889c0 .554.065 1.091.189 1.602m11.79-1.053C15.943 8.31 14.19 8.966 12 8c-2.12-.934-3.834-.357-5.811.49"/>
  </svg>
</template>

<script>
/**
 * PiWineGlassFilledContrast icon from the contrast style in food category.
 */
export default {
  name: 'PiWineGlassFilledContrast',
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
      default: 'wine-glass-filled icon'
    }
  }
}
</script>
