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
    <path d="M1.84961 12C1.84961 6.39429 6.39392 1.84998 11.9996 1.84998C17.6053 1.84998 22.1496 6.39429 22.1496 12C22.1496 17.6057 17.6053 22.15 11.9996 22.15C6.39392 22.15 1.84961 17.6057 1.84961 12ZM14.3802 8.0032C15.2962 7.94405 16.0555 8.70339 15.9963 9.61934C15.7751 13.0457 13.0452 15.7755 9.61892 15.9968C8.70296 16.0559 7.94363 15.2966 8.00277 14.3806C8.22403 10.9543 10.9539 8.22446 14.3802 8.0032Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiMagneticCompassSolid icon from the solid style in navigation category.
 */
export default {
  name: 'PiMagneticCompassSolid',
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
      default: 'magnetic-compass icon'
    }
  }
}
</script>
