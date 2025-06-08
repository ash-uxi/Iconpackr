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
    <path d="M17 17.5009C17 18.3298 16.3284 19.0017 15.5 19.0017C14.6716 19.0017 14 18.3298 14 17.5009C14 16.672 14.6716 16 15.5 16C16.3284 16 17 16.672 17 17.5009ZM17 17.5009V10.8216C17 10.2116 17.6415 9.8149 18.1868 10.0877C19.298 10.6436 20 11.7801 20 13.0232C20 13.5376 19.8944 14.0411 19.6875 14.5" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M4 12H10M4 18H10M4 6H20" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiListMusicNoteDuoStroke icon from the duo-stroke style in general category.
 */
export default {
  name: 'PiListMusicNoteDuoStroke',
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
      default: 'list-music-note icon'
    }
  }
}
</script>
