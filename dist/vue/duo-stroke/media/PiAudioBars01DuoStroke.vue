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
    <path d="M3 10V14M21 10V14M12 3V21" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M7.5 7V17M16.5 7V17" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiAudioBars01DuoStroke icon from the duo-stroke style in media category.
 */
export default {
  name: 'PiAudioBars01DuoStroke',
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
      default: 'audio-bars-01 icon'
    }
  }
}
</script>
