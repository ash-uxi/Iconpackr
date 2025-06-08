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
    <path :fill="color || 'currentColor'" d="M12 1.85c5.606 0 10.15 4.544 10.15 10.15 0 5.605-4.544 10.15-10.15 10.15-5.605 0-10.15-4.544-10.15-10.15C1.85 6.395 6.396 1.85 12 1.85" opacity=".28" /> <path d="M18.47 18.47 5.53 5.53" />
  </svg>
</template>

<script>
/**
 * PiBanLeftDuoSolid icon from the duo-solid style in security category.
 */
export default {
  name: 'PiBanLeftDuoSolid',
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
      default: 'ban-left icon'
    }
  }
}
</script>
