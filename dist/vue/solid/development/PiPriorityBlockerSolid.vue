<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    
     :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM16.2071 9.20711C16.5976 8.81658 16.5976 8.18342 16.2071 7.79289C15.8166 7.40237 15.1834 7.40237 14.7929 7.79289L7.79289 14.7929C7.40237 15.1834 7.40237 15.8166 7.79289 16.2071C8.18342 16.5976 8.81658 16.5976 9.20711 16.2071L16.2071 9.20711Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiPriorityBlockerSolid icon from the solid style in development category.
 */
export default {
  name: 'PiPriorityBlockerSolid',
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
      default: 'priority-blocker icon'
    }
  }
}
</script>
