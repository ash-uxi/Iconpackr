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
    <path d="M2 10V13M6 6V17M10 3V21M14 8V15M18 5V18M22 10V13" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiAudioBars02Stroke icon from the stroke style in media category.
 */
export default {
  name: 'PiAudioBars02Stroke',
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
      default: 'audio-bars-02 icon'
    }
  }
}
</script>
