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
    <path d="M20 12H2" opacity=".28" /> <path :fill="color || 'currentColor'" d="M21 12c0-.432-.144-.864-.429-1.22a31.2 31.2 0 0 0-5.807-5.584A1 1 0 0 0 13.17 6v12a1 1 0 0 0 1.594.804 31.2 31.2 0 0 0 5.807-5.584c.285-.356.43-.788.43-1.22" />
  </svg>
</template>

<script>
/**
 * PiArrowRightDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowRightDuoSolid',
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
      default: 'arrow-right icon'
    }
  }
}
</script>
