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
    <path d="M20.7407 8.26146L9.08196 11.3854C2.81976 13.0634 2.25044 4.94227 8.5288 3.25493C13.4961 2.06323 17.3764 5.27233 20.7407 8.26146Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M4 15.9632L15.6587 12.8393C21.9209 11.1613 22.4903 19.2824 16.2119 20.9697C11.2446 22.1614 7.36426 18.9523 4 15.9632Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiSolidjsDuoStroke icon from the duo-stroke style in development category.
 */
export default {
  name: 'PiSolidjsDuoStroke',
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
