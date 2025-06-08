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
    <path :fill="color || 'currentColor'" d="M13.26 1.427a4 4 0 0 0-2.717 0L5.155 3.373a4 4 0 0 0-2.638 3.608l-.127 3.31a12 12 0 0 0 6.047 10.885l1.52.867a4 4 0 0 0 3.887.042l1.489-.806a12 12 0 0 0 6.25-11.472l-.228-2.95a4 4 0 0 0-2.63-3.456z" opacity=".28" /> <path d="m3.39 10.329.128-3.31a3 3 0 0 1 1.979-2.705l5.387-1.946a3 3 0 0 1 2.038 0l5.465 1.974a3 3 0 0 1 1.973 2.591l.227 2.95" />
  </svg>
</template>

<script>
/**
 * PiShieldDuoSolid icon from the duo-solid style in security category.
 */
export default {
  name: 'PiShieldDuoSolid',
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
      default: 'shield icon'
    }
  }
}
</script>
