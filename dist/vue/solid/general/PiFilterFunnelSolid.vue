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
    <path d="M4 3C3.44772 3 3 3.44772 3 4V6.58579C3 7.11622 3.21071 7.62493 3.58579 8L9 13.4142V18C9 18.3148 9.14819 18.6111 9.4 18.8L13.4 21.8C13.703 22.0273 14.1084 22.0638 14.4472 21.8944C14.786 21.725 15 21.3788 15 21L15 13.4142L20.4142 8C20.7893 7.62493 21 7.11622 21 6.58579V4C21 3.44772 20.5523 3 20 3H4Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiFilterFunnelSolid icon from the solid style in general category.
 */
export default {
  name: 'PiFilterFunnelSolid',
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
      default: 'filter-funnel icon'
    }
  }
}
</script>
