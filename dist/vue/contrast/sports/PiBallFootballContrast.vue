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
    <path d="m13.5 10.5-3 3m10.246-1.668c.298-1.316.437-2.633.485-3.832.063-1.56-.234-2.77-1.348-3.883C18.77 3.003 17.56 2.706 16 2.769c-1.2.048-2.516.187-3.832.486m8.578 8.577c-.485 2.14-1.391 4.276-3.013 5.898s-3.757 2.527-5.897 3.012m8.91-8.91a41.4 41.4 0 0 0-8.578-8.577m0 0c-2.14.484-4.276 1.39-5.898 3.012-1.621 1.621-2.527 3.757-3.012 5.896m0 0a21.4 21.4 0 0 0-.485 3.833c-.063 1.56.234 2.77 1.348 3.883 1.113 1.114 2.323 1.411 3.883 1.348 1.2-.048 2.517-.187 3.832-.485m-8.578-8.579a41.4 41.4 0 0 0 8.578 8.579"/>
  <path fill="currentColor" d="M17.733 17.73c2.62-2.62 3.37-6.58 3.498-9.73.063-1.56-.234-2.77-1.348-3.883C18.77 3.003 17.56 2.706 16 2.769c-3.15.127-7.11.879-9.73 3.498-2.618 2.618-3.37 6.58-3.497 9.73-.063 1.559.234 2.769 1.348 3.882 1.113 1.114 2.323 1.411 3.883 1.348 3.15-.127 7.11-.879 9.73-3.497" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiBallFootballContrast icon from the contrast style in sports category.
 */
export default {
  name: 'PiBallFootballContrast',
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
      default: 'ball-football icon'
    }
  }
}
</script>
