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
    <path d="M21 7.96726L9 12.6816V19C9 21.2091 7.20914 23 5 23C2.79086 23 1 21.2091 1 19C1 16.7909 2.79086 15 5 15C5.72857 15 6.41165 15.1948 7 15.5351V7.86309C7 6.62962 7.75499 5.52186 8.90304 5.07084L19.5859 0.874015C21.2259 0.229709 23 1.43882 23 3.20089V16C23 18.2091 21.2091 20 19 20C16.7909 20 15 18.2091 15 16C15 13.7909 16.7909 12 19 12C19.7286 12 20.4117 12.1948 21 12.5351V7.96726Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiMusicBeamNoteSolid icon from the solid style in media category.
 */
export default {
  name: 'PiMusicBeamNoteSolid',
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
      default: 'music-beam-note icon'
    }
  }
}
</script>
