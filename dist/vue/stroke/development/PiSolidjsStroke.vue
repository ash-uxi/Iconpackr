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
    <path d="M20.7407 8.26146L9.08193 11.3854C2.81973 13.0634 2.25041 4.94227 8.52877 3.25493C13.496 2.06323 17.3764 5.27233 20.7407 8.26146Z" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M4 15.9632L15.6587 12.8393C21.9209 11.1613 22.4903 19.2824 16.2119 20.9698C11.2446 22.1615 7.36426 18.9524 4 15.9632Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiSolidjsStroke icon from the stroke style in development category.
 */
export default {
  name: 'PiSolidjsStroke',
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
      default: 'solidjs icon'
    }
  }
}
</script>
