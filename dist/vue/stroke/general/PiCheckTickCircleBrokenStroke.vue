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
    <path d="M21.0347 5.40332L20.2423 5.94449C17.0371 8.13349 14.3705 11.0217 12.4437 14.3913L12.0843 15.0198L8.60958 11M21.0002 10.3363C21.6143 13.6712 20.3426 17.2187 17.4293 19.3658C13.3614 22.364 7.63321 21.4968 4.63507 17.4288C1.63692 13.3609 2.50414 7.63272 6.57207 4.63458C9.48533 2.48744 13.2501 2.32277 16.2538 3.89642" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCheckTickCircleBrokenStroke icon from the stroke style in general category.
 */
export default {
  name: 'PiCheckTickCircleBrokenStroke',
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
      default: 'check-tick-circle-broken icon'
    }
  }
}
</script>
