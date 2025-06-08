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
    <path :fill="color || 'currentColor'" d="M19.638 11.716a3.38 3.38 0 0 0-4.178 2.316L14.41 17.69a3.378 3.378 0 0 0 6.494 1.862l1.05-3.657a3.38 3.38 0 0 0-2.317-4.179" /> <path d="M3.024 15.669a9.5 9.5 0 0 1-.536-3.157 9.512 9.512 0 0 1 19.024 0 9.5 9.5 0 0 1-.526 3.128" opacity=".28" /> <path :fill="color || 'currentColor'" d="M8.54 14.032a3.378 3.378 0 0 0-6.495 1.863l1.05 3.657a3.378 3.378 0 1 0 6.493-1.862z" />
  </svg>
</template>

<script>
/**
 * PiHeadphonesDuoSolid icon from the duo-solid style in media category.
 */
export default {
  name: 'PiHeadphonesDuoSolid',
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
      default: 'headphones icon'
    }
  }
}
</script>
