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
    <path fill="currentColor" d="M12 21c1 0 10-5.023 10-12.056 0-5.437-6.837-8.282-10-3.517C8.832.653 2 3.502 2 8.944 2 15.977 11 21 12 21" opacity=".28"/>
  <path d="M2 8.944C2 15.977 11 21 12 21s10-5.023 10-12.056c0-5.437-6.837-8.282-10-3.517C8.832.653 2 3.502 2 8.944"/>
  </svg>
</template>

<script>
/**
 * PiHeartContrast icon from the contrast style in general category.
 */
export default {
  name: 'PiHeartContrast',
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
      default: 'heart icon'
    }
  }
}
</script>
