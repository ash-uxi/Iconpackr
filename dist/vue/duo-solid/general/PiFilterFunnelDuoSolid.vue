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
    <path d="m14.293 12.707 5.414-5.414A1 1 0 0 0 20 6.586V4H4v2.586a1 1 0 0 0 .293.707l5.414 5.414" /> <path :fill="color || 'currentColor'" d="M4 3a1 1 0 0 0-1 1v2.586A2 2 0 0 0 3.586 8L9 13.414V18a1 1 0 0 0 .4.8l4 3A1 1 0 0 0 15 21v-7.586L20.414 8A2 2 0 0 0 21 6.586V4a1 1 0 0 0-1-1z" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiFilterFunnelDuoSolid icon from the duo-solid style in general category.
 */
export default {
  name: 'PiFilterFunnelDuoSolid',
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
