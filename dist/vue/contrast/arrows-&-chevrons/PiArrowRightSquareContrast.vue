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
    <path d="M12.051 8a20.3 20.3 0 0 1 3.807 3.604A.63.63 0 0 1 16 12m-3.949 4a20.3 20.3 0 0 0 3.807-3.604A.63.63 0 0 0 16 12m0 0H8m-5 0c0-2.796 0-4.193.457-5.296a6 6 0 0 1 3.247-3.247C7.807 3 9.204 3 12 3s4.194 0 5.296.457a6 6 0 0 1 3.247 3.247C21 7.807 21 9.204 21 12s0 4.194-.457 5.296a6 6 0 0 1-3.247 3.247C16.194 21 14.796 21 12 21s-4.193 0-5.296-.457a6 6 0 0 1-3.247-3.247C3 16.194 3 14.796 3 12"/>
  <path fill="currentColor" d="M3.457 6.704C3 7.807 3 9.204 3 12s0 4.194.457 5.296a6 6 0 0 0 3.247 3.247C7.807 21 9.204 21 12 21s4.194 0 5.296-.457a6 6 0 0 0 3.247-3.247C21 16.194 21 14.796 21 12s0-4.193-.457-5.296a6 6 0 0 0-3.247-3.247C16.194 3 14.796 3 12 3s-4.193 0-5.296.457a6 6 0 0 0-3.247 3.247" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiArrowRightSquareContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowRightSquareContrast',
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
      default: 'arrow-right-square icon'
    }
  }
}
</script>
