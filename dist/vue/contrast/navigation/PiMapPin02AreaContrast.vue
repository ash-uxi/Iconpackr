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
    <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0 0v6m-5-1.836c-2.989.562-5 1.613-5 2.816 0 1.794 4.477 3.25 10 3.25s10-1.456 10-3.25c0-1.203-2.011-2.254-5-2.816"/>
  <path fill="currentColor" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiMapPin02AreaContrast icon from the contrast style in navigation category.
 */
export default {
  name: 'PiMapPin02AreaContrast',
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
      default: 'map-pin-02-area icon'
    }
  }
}
</script>
