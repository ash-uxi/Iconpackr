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
    <path d="M4 12H10M4 18H10M4 6H20M18.7143 17.2719C19.5496 16.665 20.2979 15.9535 20.9395 15.1564C21.0202 15.0562 21.0202 14.9161 20.9395 14.8159C20.2979 14.0188 19.5496 13.3073 18.7143 12.7004M15.2857 12.7004C14.4504 13.3073 13.7021 14.0188 13.0605 14.8159C12.9798 14.9161 12.9798 15.0562 13.0605 15.1564C13.7021 15.9535 14.4504 16.665 15.2857 17.2719" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiListCodeStroke icon from the stroke style in general category.
 */
export default {
  name: 'PiListCodeStroke',
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
      default: 'list-code icon'
    }
  }
}
</script>
