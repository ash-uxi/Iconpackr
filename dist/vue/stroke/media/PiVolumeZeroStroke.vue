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
    <path d="M17 18.9322V5.10721C17 3.39628 15.0661 2.40106 13.6739 3.39552L10.8609 5.40477C10.2934 5.81012 9.6464 6.09043 8.96255 6.2272C6.6585 6.68801 5 8.71106 5 11.0607V12.9787C5 15.3284 6.6585 17.3514 8.96255 17.8122C9.6464 17.949 10.2934 18.2293 10.8609 18.6347L13.6739 20.6439C15.0661 21.6384 17 20.6431 17 18.9322Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiVolumeZeroStroke icon from the stroke style in media category.
 */
export default {
  name: 'PiVolumeZeroStroke',
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
      default: 'volume-zero icon'
    }
  }
}
</script>
