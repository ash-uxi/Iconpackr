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
    <path d="M18 8H16M19.8 19.2C19.8 20.7464 18.5463 22 17 22C15.4536 22 14.2 20.7464 14.2 19.2C14.2 17.6536 16.3 15 17 15C17.7 15 19.8 17.6536 19.8 19.2Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M20 4H4C2.89543 4 2 4.89543 2 6V12H22V6C22 4.89543 21.1046 4 20 4Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiAcWaterDuoStroke icon from the duo-stroke style in appliances category.
 */
export default {
  name: 'PiAcWaterDuoStroke',
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
      default: 'ac-water icon'
    }
  }
}
</script>
