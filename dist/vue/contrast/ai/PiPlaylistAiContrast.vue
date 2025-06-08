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
    <path d="M12.3 12.984c.637 1.617 1.339 2.345 3 3-1.661.655-2.363 1.384-3 3-.638-1.616-1.34-2.345-3-3 1.66-.655 2.362-1.383 3-3"/>
  <path fill="currentColor" d="M3 14c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.092C4.9 10 5.6 10 7 10h10c1.4 0 2.1 0 2.635.273a2.5 2.5 0 0 1 1.092 1.092C21 11.9 21 12.6 21 14v4c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C19.1 22 18.4 22 17 22H7c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C3 20.1 3 19.4 3 18z" opacity=".28"/>
  <path d="M5 6h14M7 2.001 17 2M7 22h10c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C21 20.1 21 19.4 21 18v-4c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092C19.1 10 18.4 10 17 10H7c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 0 0-1.093 1.092C3 11.9 3 12.6 3 14v4c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C4.9 22 5.6 22 7 22M8.7 19.323h.001"/>
  </svg>
</template>

<script>
/**
 * PiPlaylistAiContrast icon from the contrast style in ai category.
 */
export default {
  name: 'PiPlaylistAiContrast',
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
      default: 'playlist-ai icon'
    }
  }
}
</script>
