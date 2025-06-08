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
    <path  d="M13 4a1 1 0 0 0-2 0v2.05a10 10 0 0 1 2 0z" fill="none"/>
  <path d="M15 16H9m-6 0a9 9 0 1 1 18 0z" opacity=".28" fill="none"/>
  <path  d="M8.126 17a4.002 4.002 0 0 0 7.748 0h-2.142a2 2 0 0 1-3.464 0z" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCeilingLampOffDuoStroke icon from the duo-stroke style in appliances category.
 */
export default {
  name: 'PiCeilingLampOffDuoStroke',
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
