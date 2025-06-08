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
    <path d="M12 7C7.02944 7 3 11.0294 3 16H21C21 11.0294 16.9706 7 12 7ZM12 7V4M15 16C15 17.6569 13.6569 19 12 19C10.3431 19 9 17.6569 9 16L15 16Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCeilingLampOffStroke icon from the stroke style in appliances category.
 */
export default {
  name: 'PiCeilingLampOffStroke',
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
      default: 'ceiling-lamp-off icon'
    }
  }
}
</script>
