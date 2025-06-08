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
    <g fill="currentColor" opacity=".28">
    <path d="M6 16a4.15 4.15 0 1 0 0-8.3A4.15 4.15 0 0 0 6 16M18 16a4.15 4.15 0 1 0 0-8.3 4.15 4.15 0 0 0 0 8.3"/>
  </g>
  <path d="M6 16a4.15 4.15 0 1 0 0-8.3A4.15 4.15 0 0 0 6 16m0 0h12m0 0a4.15 4.15 0 1 0 0-8.3 4.15 4.15 0 0 0 0 8.3"/>
  </svg>
</template>

<script>
/**
 * PiVoiceRecordingContrast icon from the contrast style in media category.
 */
export default {
  name: 'PiVoiceRecordingContrast',
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
      default: 'voice-recording icon'
    }
  }
}
</script>
