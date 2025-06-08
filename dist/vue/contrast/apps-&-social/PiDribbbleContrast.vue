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
    <path d="M12.195 9.418a16.43 16.43 0 0 1-9.184 2.127m9.184-2.127a35 35 0 0 1 1.661 3.677m-1.661-3.677a35 35 0 0 0-3.726-5.699m3.726 5.699a16.6 16.6 0 0 0 5.181-4.637m-3.52 8.314a16.646 16.646 0 0 1 7.129-.574m-7.129.574a35 35 0 0 1 1.894 7.089m-1.894-7.089a16.52 16.52 0 0 0-8.02 5.463M8.469 3.719A9 9 0 0 1 12 3a8.96 8.96 0 0 1 5.376 1.781M8.469 3.72a9 9 0 0 0-5.458 7.826M17.376 4.78a8.99 8.99 0 0 1 3.61 7.74m0 0a9 9 0 0 1-5.236 7.663m0 0A9 9 0 0 1 12 21a8.97 8.97 0 0 1-6.164-2.442m0 0a8.98 8.98 0 0 1-2.825-7.013"/>
  <path fill="currentColor" d="M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiDribbbleContrast icon from the contrast style in apps-&-social category.
 */
export default {
  name: 'PiDribbbleContrast',
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
      default: 'dribbble icon'
    }
  }
}
</script>
