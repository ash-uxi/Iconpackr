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
    <path d="M4 12H12M4 18H12M4 6H20M16 14.3115C16.7402 13.3245 17.599 12.4332 18.5564 11.6574C18.6859 11.5525 18.843 11.5 19 11.5M22 14.3115C21.2598 13.3245 20.401 12.4332 19.4436 11.6574C19.3141 11.5525 19.157 11.5 19 11.5M19 11.5V18.9973" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiListArrowUpStroke icon from the stroke style in general category.
 */
export default {
  name: 'PiListArrowUpStroke',
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
      default: 'list-arrow-up icon'
    }
  }
}
</script>
