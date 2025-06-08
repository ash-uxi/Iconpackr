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
    <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2" opacity=".28"/>
  <path d="M18.995 19.147C18.893 17.393 17.367 16 15.5 16h-7c-1.867 0-3.393 1.393-3.495 3.147m13.99 0A9.97 9.97 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.97 9.97 0 0 0 3.005 7.147m13.99 0A9.97 9.97 0 0 1 12 22a9.97 9.97 0 0 1-6.995-2.853M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  </svg>
</template>

<script>
/**
 * PiUserCircleContrast icon from the contrast style in users category.
 */
export default {
  name: 'PiUserCircleContrast',
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
      default: 'user-circle icon'
    }
  }
}
</script>
