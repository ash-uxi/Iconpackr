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
    <path d="M15.9261 3.06958C15.5014 2.85709 15 3.16566 15 3.64303V18.9982C15 21.2077 13.2097 22.9999 11 22.9999C8.79032 22.9999 7 21.2077 7 18.9982C7 16.7886 8.79032 14.9964 11 14.9964C11.7287 14.9964 12.4117 15.1913 13 15.5318V3.64303C13 1.68059 15.0647 0.402298 16.821 1.28093C19.3824 2.56237 21 5.1816 21 8.04636C21 9.65255 20.545 11.2259 19.6485 12.5582C19.3402 13.0164 18.7188 13.1379 18.2606 12.8295C17.8024 12.5212 17.6809 11.8998 17.9892 11.4416C18.652 10.4566 19 9.27605 19 8.04636C19 5.93853 17.8098 4.01195 15.9261 3.06958Z" fill="currentColor" stroke="none"/>
  <path d="M4 5.99988C3.44772 5.99988 3 6.44759 3 6.99988C3 7.55216 3.44772 7.99988 4 7.99988H10C10.5523 7.99988 11 7.55216 11 6.99988C11 6.44759 10.5523 5.99988 10 5.99988H4Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiMusicQuaverNoteRemoveSolid icon from the solid style in media category.
 */
export default {
  name: 'PiMusicQuaverNoteRemoveSolid',
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
