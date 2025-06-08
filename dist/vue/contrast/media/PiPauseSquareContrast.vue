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
    <path fill="currentColor" d="M6.704 20.543C7.807 21 9.204 21 12 21s4.194 0 5.296-.457a6 6 0 0 0 3.247-3.247C21 16.194 21 14.796 21 12s0-4.193-.457-5.296a6 6 0 0 0-3.247-3.247C16.194 3 14.796 3 12 3s-4.193 0-5.296.457a6 6 0 0 0-3.247 3.247C3 7.807 3 9.204 3 12s0 4.194.457 5.296a6 6 0 0 0 3.247 3.247" opacity=".28"/>
  <path d="M9.501 9v6M14.5 9v6M12 21c-2.796 0-4.193 0-5.296-.457a6 6 0 0 1-3.247-3.247C3 16.194 3 14.796 3 12s0-4.193.457-5.296a6 6 0 0 1 3.247-3.247C7.807 3 9.204 3 12 3s4.194 0 5.296.457a6 6 0 0 1 3.247 3.247C21 7.807 21 9.204 21 12s0 4.194-.457 5.296a6 6 0 0 1-3.247 3.247C16.194 21 14.796 21 12 21"/>
  </svg>
</template>

<script>
/**
 * PiPauseSquareContrast icon from the contrast style in media category.
 */
export default {
  name: 'PiPauseSquareContrast',
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
      default: 'pause-square icon'
    }
  }
}
</script>
