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
    <path d="M12 10V8" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M19 14V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiMouseDefaultDuoStroke icon from the duo-stroke style in devices category.
 */
export default {
  name: 'PiMouseDefaultDuoStroke',
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
