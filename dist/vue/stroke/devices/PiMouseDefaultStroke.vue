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
    <path d="M12 10V8M12 21C8.13401 21 5 17.866 5 14V10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10V14C19 17.866 15.866 21 12 21Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiMouseDefaultStroke icon from the stroke style in devices category.
 */
export default {
  name: 'PiMouseDefaultStroke',
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
      default: 'mouse-default icon'
    }
  }
}
</script>
