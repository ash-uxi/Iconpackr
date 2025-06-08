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
    <path d="M11.9999 18.9983C11.9999 20.6561 10.6567 22 8.9999 22C8.60118 22 8.22063 21.9222 7.87259 21.7809M11.9999 18.9983C11.9999 18.5999 11.9224 18.2197 11.7815 17.8719M11.9999 18.9983V17.6536M11.9999 12V3.64314C11.9999 2.42323 13.283 1.62981 14.3734 2.17536C16.0447 3.01147 17.2531 4.50405 17.7497 6.2502M7.71476 16.2851C7.09095 16.5815 6.58559 17.0869 6.28906 17.7108" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M22 2L2 22" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiMusicQuaverNoteOffDuoStroke icon from the duo-stroke style in media category.
 */
export default {
  name: 'PiMusicQuaverNoteOffDuoStroke',
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
      default: 'music-quaver-note-off icon'
    }
  }
}
</script>
