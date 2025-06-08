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
    <path d="M11 4.87682V18.6546M21 11.7657L3 11.7657M4.77913 17.9634L18.7791 19.5189C19.9639 19.6506 21 18.7232 21 17.5312V6.00024C21 4.80821 19.9639 3.88083 18.7791 4.01247L4.77914 5.56803C3.76627 5.68057 3 6.53669 3 7.55579V15.9756C3 16.9947 3.76627 17.8508 4.77913 17.9634Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiMicrosoftWindowsStroke icon from the stroke style in apps-&-social category.
 */
export default {
  name: 'PiMicrosoftWindowsStroke',
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
      default: 'microsoft-windows icon'
    }
  }
}
</script>
