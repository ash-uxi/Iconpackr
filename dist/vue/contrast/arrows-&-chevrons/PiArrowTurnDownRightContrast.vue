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
    <path fill="currentColor" d="M15.141 20a25.2 25.2 0 0 0 4.684-4.505.79.79 0 0 0 0-.99A25.2 25.2 0 0 0 15.141 10c.16.935.241 1.402.303 1.87a24 24 0 0 1 0 6.26c-.062.468-.142.935-.303 1.87" opacity=".28"/>
  <path d="M15.649 15H12c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C4 11.2 4 9.8 4 7V4m11.649 11q0 1.57-.205 3.13c-.062.468-.142.935-.303 1.87a25.2 25.2 0 0 0 4.684-4.505.79.79 0 0 0 0-.99A25.2 25.2 0 0 0 15.141 10c.16.935.241 1.402.303 1.87q.204 1.56.205 3.13"/>
  </svg>
</template>

<script>
/**
 * PiArrowTurnDownRightContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowTurnDownRightContrast',
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
      default: 'arrow-turn-down-right icon'
    }
  }
}
</script>
