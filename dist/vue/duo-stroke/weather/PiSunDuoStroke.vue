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
    <path d="M12 23v-1m-7.778-2.222.707-.707M1 12h1m2.222-7.778.707.707M12 2V1m7.071 3.929.707-.707M22 12h1m-3.929 7.071.707.707" fill="none"/>
  <path d="M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0" opacity=".28" fill="none"/>
  <rect width="24" height="24"  fill="none"/>
  </svg>
</template>

<script>
/**
 * PiSunDuoStroke icon from the duo-stroke style in weather category.
 */
export default {
  name: 'PiSunDuoStroke',
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
      default: 'sun icon'
    }
  }
}
</script>
