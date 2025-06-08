<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    
     :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <path :fill="color || 'currentColor'" d="M13.83 14.156a1 1 0 0 1 .974 1.58 26.2 26.2 0 0 1-4.684 4.87 1.79 1.79 0 0 1-2.24 0 26.2 26.2 0 0 1-4.684-4.87 1 1 0 0 1 .973-1.58c.942.162 1.388.238 1.831.297a23 23 0 0 0 6 0 49 49 0 0 0 1.83-.297" /> <path d="M9 15.649V12c0-2.8 0-4.2.545-5.27a5 5 0 0 1 2.185-2.185C12.8 4 14.2 4 17 4h3" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiArrowTurnLeftDownDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowTurnLeftDownDuoSolid',
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
      default: 'arrow-turn-left-down icon'
    }
  }
}
</script>
