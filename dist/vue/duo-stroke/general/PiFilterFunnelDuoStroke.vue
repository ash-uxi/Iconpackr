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
    <path d="M14.2929 12.7071L19.7071 7.29289C19.8946 7.10536 20 6.851 20 6.58579V4H4V6.58579C4 6.851 4.10536 7.10536 4.29289 7.29289L9.70711 12.7071" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M20 4H4V6.58579C4 6.851 4.10536 7.10536 4.29289 7.29289L9.70711 12.7071C9.89464 12.8946 10 13.149 10 13.4142V18L14 21V13.4142C14 13.149 14.1054 12.8946 14.2929 12.7071L19.7071 7.29289C19.8946 7.10536 20 6.851 20 6.58579V4Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiFilterFunnelDuoStroke icon from the duo-stroke style in general category.
 */
export default {
  name: 'PiFilterFunnelDuoStroke',
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
