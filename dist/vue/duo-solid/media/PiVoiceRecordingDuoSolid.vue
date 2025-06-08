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
    <path :fill="color || 'currentColor'" d="M18 6.7A5.15 5.15 0 1 0 18 17a5.15 5.15 0 0 0 0-10.3" /> <path d="M6 16h12" opacity=".28" /> <path :fill="color || 'currentColor'" d="M6 6.7A5.15 5.15 0 1 0 6 17 5.15 5.15 0 0 0 6 6.7" />
  </svg>
</template>

<script>
/**
 * PiVoiceRecordingDuoSolid icon from the duo-solid style in media category.
 */
export default {
  name: 'PiVoiceRecordingDuoSolid',
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
