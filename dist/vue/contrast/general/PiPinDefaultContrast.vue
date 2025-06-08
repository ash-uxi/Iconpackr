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
    <path d="M12 15.693V21m0-5.307c-2.201 0-4.39-.184-6.567-.495a.504.504 0 0 1-.433-.5 4.54 4.54 0 0 1 2.194-3.886c.63-.381 1.034-1.029.85-1.788l-.986-4.092a1.6 1.6 0 0 1 1.406-1.967c2.366-.22 4.706-.22 7.072 0a1.6 1.6 0 0 1 1.406 1.967l-.986 4.092c-.183.76.22 1.407.85 1.788A4.54 4.54 0 0 1 19 14.698a.504.504 0 0 1-.433.5c-2.178.31-4.366.495-6.567.495"/>
  <path fill="currentColor" d="M7.058 4.932a1.6 1.6 0 0 1 1.406-1.967c2.366-.22 4.706-.22 7.072 0a1.6 1.6 0 0 1 1.406 1.967l-.986 4.092c-.183.76.22 1.407.85 1.788A4.54 4.54 0 0 1 19 14.698a.504.504 0 0 1-.433.5c-2.178.31-4.366.495-6.567.495s-4.39-.184-6.567-.495a.504.504 0 0 1-.433-.5 4.54 4.54 0 0 1 2.194-3.886c.63-.381 1.034-1.029.85-1.788z" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiPinDefaultContrast icon from the contrast style in general category.
 */
export default {
  name: 'PiPinDefaultContrast',
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
      default: 'pin-default icon'
    }
  }
}
</script>
