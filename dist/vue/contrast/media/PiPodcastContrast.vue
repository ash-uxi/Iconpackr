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
    <path d="M10.633 17.897a1.442 1.442 0 1 1 2.735 0L12 22zM11 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0"/>
  </g>
  <path d="M8 14a5 5 0 1 1 8 0m1 4.483a9 9 0 1 0-10 0M12 22l1.367-4.103a1.441 1.441 0 1 0-2.735 0zm0-10a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
  </svg>
</template>

<script>
/**
 * PiPodcastContrast icon from the contrast style in media category.
 */
export default {
  name: 'PiPodcastContrast',
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
      default: 'podcast icon'
    }
  }
}
</script>
