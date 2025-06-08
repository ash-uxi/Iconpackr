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
    <path d="M8 18.998a3 3 0 1 1 6.002-.001A3 3 0 0 1 8 18.998M7 4c.638 1.616 1.34 2.345 3 3-1.66.655-2.362 1.384-3 3-.638-1.616-1.34-2.345-3-3 1.66-.655 2.362-1.384 3-3"/>
  </g>
  <path d="M14 18.998V3.643a1.64 1.64 0 0 1 2.374-1.468A6.56 6.56 0 0 1 20 8.046 7.07 7.07 0 0 1 18.819 12M14 18.998a3 3 0 1 1-3-3.002 3 3 0 0 1 3 3.002M3 11h.01M7 4c-.638 1.616-1.34 2.345-3 3 1.66.655 2.362 1.384 3 3 .638-1.616 1.34-2.345 3-3-1.66-.655-2.362-1.384-3-3"/>
  </svg>
</template>

<script>
/**
 * PiMusicQuaverNoteAiContrast icon from the contrast style in ai category.
 */
export default {
  name: 'PiMusicQuaverNoteAiContrast',
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
      default: 'music-quaver-note-ai icon'
    }
  }
}
</script>
