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
    <path d="M11.0038 18H9C5.68629 18 3 15.3137 3 12C3 8.68626 5.68629 5.99997 9 5.99997L14.85 5.99998M11.0038 18C11.0038 17.8691 10.9601 17.7382 10.8727 17.6303C10.2262 16.8325 9.48339 16.1168 8.6609 15.5M11.0038 18C11.0038 18.1308 10.9601 18.2617 10.8727 18.3696C10.2262 19.1675 9.48339 19.8831 8.6609 20.5M14.85 5.99998C14.85 7.73967 16.2603 9.14998 18 9.14998C19.7397 9.14998 21.15 7.73967 21.15 5.99998C21.15 4.26028 19.7397 2.84998 18 2.84998C16.2603 2.84998 14.85 4.26028 14.85 5.99998ZM18 21C17.0681 21 16.6022 21 16.2346 20.8477C15.7446 20.6447 15.3552 20.2554 15.1522 19.7653C15 19.3978 15 18.9319 15 18C15 17.0681 15 16.6021 15.1522 16.2346C15.3552 15.7445 15.7446 15.3552 16.2346 15.1522C16.6022 15 17.0681 15 18 15C18.9319 15 19.3978 15 19.7654 15.1522C20.2554 15.3552 20.6448 15.7445 20.8478 16.2346C21 16.6021 21 17.0681 21 18C21 18.9319 21 19.3978 20.8478 19.7653C20.6448 20.2554 20.2554 20.6447 19.7654 20.8477C19.3978 21 18.9319 21 18 21Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiAutomationStroke icon from the stroke style in development category.
 */
export default {
  name: 'PiAutomationStroke',
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
