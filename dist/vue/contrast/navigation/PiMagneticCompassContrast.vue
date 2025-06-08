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
    <path fill="currentColor" d="M21.15 12a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0" opacity=".28"/>
  <path d="M9.587 15.498a6.33 6.33 0 0 0 5.91-5.91 1.02 1.02 0 0 0-1.085-1.086 6.33 6.33 0 0 0-5.91 5.91c-.04.616.47 1.125 1.085 1.086"/>
  </svg>
</template>

<script>
/**
 * PiMagneticCompassContrast icon from the contrast style in navigation category.
 */
export default {
  name: 'PiMagneticCompassContrast',
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
