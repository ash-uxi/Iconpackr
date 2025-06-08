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
    <path d="M13.526 2.66602C17.0657 2.66602 19.9351 5.53548 19.9351 9.07514C19.9351 11.5437 18.5392 13.6848 16.4938 14.7547C15.8087 15.1131 15.4661 15.2923 15.3594 15.3991C15.1948 15.5638 15.2276 15.514 15.1412 15.7303C15.0852 15.8704 15.0505 16.3245 14.9811 17.2327C14.8126 19.4371 12.973 21.4004 10.5679 21.4004C8.11741 21.4004 6.13086 19.4138 6.13086 16.9633C6.13086 16.7828 6.14164 16.6048 6.1626 16.4299C6.42747 14.2194 7.11688 11.3014 7.11688 9.07514C7.11688 5.53548 9.98634 2.66602 13.526 2.66602Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M16.5317 9.0584C16.5317 7.41514 15.1996 6.08301 13.5563 6.08301C11.913 6.08301 10.5809 7.41514 10.5809 9.0584C10.5809 9.85643 10.5345 10.6104 10.3991 11.507C13.2742 12.2774 12.7806 15.7034 10.0298 15.3275" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiEarDuoStroke icon from the duo-stroke style in medical category.
 */
export default {
  name: 'PiEarDuoStroke',
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
      default: 'ear icon'
    }
  }
}
</script>
