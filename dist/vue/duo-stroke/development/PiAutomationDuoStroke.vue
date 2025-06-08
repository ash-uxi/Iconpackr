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
    <path d="M11.0038 18H9C5.68629 18 3 15.3137 3 12C3 8.68629 5.68629 6 9 6L14.85 6.00001M11.0038 18C11.0038 17.8691 10.9601 17.7383 10.8727 17.6304C10.2262 16.8325 9.48339 16.1169 8.6609 15.5M11.0038 18C11.0038 18.1309 10.9601 18.2617 10.8727 18.3696C10.2262 19.1675 9.4834 19.8831 8.6609 20.5" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M14.8501 6.0001C14.8501 4.2604 16.2604 2.8501 18.0001 2.8501C19.7398 2.8501 21.1501 4.2604 21.1501 6.0001C21.1501 7.7398 19.7398 9.1501 18.0001 9.1501C16.2604 9.1501 14.8501 7.7398 14.8501 6.0001Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M15.0001 18.0001C15.0001 17.0682 15.0001 16.6023 15.1524 16.2347C15.3554 15.7447 15.7447 15.3553 16.2348 15.1523C16.6023 15.0001 17.0682 15.0001 18.0001 15.0001C18.932 15.0001 19.3979 15.0001 19.7655 15.1523C20.2555 15.3553 20.6449 15.7447 20.8479 16.2347C21.0001 16.6023 21.0001 17.0682 21.0001 18.0001C21.0001 18.932 21.0001 19.3979 20.8479 19.7655C20.6449 20.2555 20.2555 20.6449 19.7655 20.8479C19.3979 21.0001 18.932 21.0001 18.0001 21.0001C17.0682 21.0001 16.6023 21.0001 16.2348 20.8479C15.7447 20.6449 15.3554 20.2555 15.1524 19.7655C15.0001 19.3979 15.0001 18.932 15.0001 18.0001Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiAutomationDuoStroke icon from the duo-stroke style in development category.
 */
export default {
  name: 'PiAutomationDuoStroke',
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
      default: 'automation icon'
    }
  }
}
</script>
