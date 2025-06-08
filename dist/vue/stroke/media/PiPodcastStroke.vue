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
    <path d="M8 14C7.44287 13.2572 7.1036 12.3738 7.02021 11.449C6.93682 10.5242 7.1126 9.59446 7.52787 8.76393C7.94313 7.9334 8.58147 7.23492 9.37135 6.74675C10.1612 6.25857 11.0714 6 12 6C12.9286 6 13.8388 6.25857 14.6287 6.74675C15.4185 7.23492 16.0569 7.9334 16.4721 8.76393C16.8874 9.59446 17.0632 10.5242 16.9798 11.449C16.8964 12.3738 16.5571 13.2572 16 14M17 18.4833C18.6054 17.4106 19.8234 15.8501 20.4739 14.0321C21.1244 12.2142 21.173 10.2352 20.6125 8.38751C20.052 6.53982 18.9122 4.92136 17.3613 3.77116C15.8105 2.62095 13.9308 2 12 2C10.0692 2 8.18953 2.62095 6.63867 3.77116C5.08782 4.92136 3.94799 6.53982 3.38751 8.38751C2.82704 10.2352 2.87564 12.2142 3.52614 14.0321C4.17665 15.8501 5.39456 17.4106 7 18.4833M12 22L13.3675 17.8974C13.6787 16.9639 12.9839 16 12 16C11.0161 16 10.3213 16.9639 10.6325 17.8974L12 22ZM12 12C11.4477 12 11 11.5523 11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11C13 11.5523 12.5523 12 12 12Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiPodcastStroke icon from the stroke style in media category.
 */
export default {
  name: 'PiPodcastStroke',
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
