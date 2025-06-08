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
    <path d="M3.241 11.307A35.3 35.3 0 0 1 9.8 5a61 61 0 0 0-.33 4c7.534 0 11.534 3 11.534 10-3-4-7-4-11.535-4q.1 2.005.33 4a35.3 35.3 0 0 1-6.557-6.307 1.11 1.11 0 0 1 0-1.386"/>
  <path fill="currentColor" d="M3.241 11.307A35.3 35.3 0 0 1 9.798 5a61 61 0 0 0-.33 4c7.535 0 11.535 3 11.535 10-3-4-7-4-11.535-4q.099 2.005.33 4a35.3 35.3 0 0 1-6.557-6.307 1.11 1.11 0 0 1 0-1.386" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiArrowBigTurnLeftContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowBigTurnLeftContrast',
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
      default: 'arrow-big-turn-left icon'
    }
  }
}
</script>
