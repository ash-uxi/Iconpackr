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
    <path d="M18.34 7.12c2.432-.813 4.11-1.051 4.38-.512.497.987-3.9 4.2-9.821 7.179s-11.123 4.592-11.62 3.605c-.27-.54.92-1.744 3.022-3.212m14.038-7.06A8 8 0 0 0 4.3 14.18m14.04-7.06A8 8 0 1 1 4.3 14.18"/>
  <path fill="currentColor" d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiPlanetRingContrast icon from the contrast style in general category.
 */
export default {
  name: 'PiPlanetRingContrast',
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
      default: 'planet-ring icon'
    }
  }
}
</script>
