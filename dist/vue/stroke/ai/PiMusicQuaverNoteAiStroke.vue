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
    <path d="M14 18.9983V3.64314C14 2.42323 15.2831 1.62981 16.3735 2.17536C18.5961 3.28727 20 5.56017 20 8.04647C20 9.46441 19.5985 10.8414 18.8189 12M14 18.9983C14 20.6561 12.6569 22 11 22C9.34315 22 8 20.6561 8 18.9983C8 17.3405 9.34315 15.9965 11 15.9965C12.6569 15.9965 14 17.3405 14 18.9983ZM3 11H3.01M7 4C6.36248 5.61646 5.66087 6.34496 4 7C5.66087 7.65504 6.36247 8.38354 7 10C7.63753 8.38354 8.33913 7.65504 10 7C8.33913 6.34496 7.63752 5.61646 7 4Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiMusicQuaverNoteAiStroke icon from the stroke style in ai category.
 */
export default {
  name: 'PiMusicQuaverNoteAiStroke',
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
