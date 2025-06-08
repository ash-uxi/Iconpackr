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
    <path d="M14 17.5C14 15.567 15.567 14 17.5 14C19.433 14 21 15.567 21 17.5C21 19.433 19.433 21 17.5 21C15.567 21 14 19.433 14 17.5Z" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M14 6.5C14 4.567 15.567 3 17.5 3C19.433 3 21 4.567 21 6.5C21 8.433 19.433 10 17.5 10C15.567 10 14 8.433 14 6.5Z" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M3 17.5C3 15.567 4.567 14 6.5 14C8.433 14 10 15.567 10 17.5C10 19.433 8.433 21 6.5 21C4.567 21 3 19.433 3 17.5Z" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiGridDashboardCircleStroke icon from the stroke style in general category.
 */
export default {
  name: 'PiGridDashboardCircleStroke',
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
      default: 'grid-dashboard-circle icon'
    }
  }
}
</script>
