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
    <path d="M15 18.998V3.643a1.64 1.64 0 0 1 2.374-1.468A6.56 6.56 0 0 1 21 8.046 7.07 7.07 0 0 1 19.819 12" opacity=".28" /> <path :fill="color || 'currentColor'" d="M4 6a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zM8 18.998A4 4 0 1 1 12 23a4 4 0 0 1-4-4.002" />
  </svg>
</template>

<script>
/**
 * PiMusicQuaverNoteRemoveDuoSolid icon from the duo-solid style in media category.
 */
export default {
  name: 'PiMusicQuaverNoteRemoveDuoSolid',
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
      default: 'music-quaver-note-remove icon'
    }
  }
}
</script>
