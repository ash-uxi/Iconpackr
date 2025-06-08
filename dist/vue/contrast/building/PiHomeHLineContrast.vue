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
    <path fill="currentColor" d="M3 12.759c0-1.017 0-1.526.119-2.002a4 4 0 0 1 .513-1.19c.265-.414.634-.763 1.374-1.461l2.6-2.456c1.546-1.46 2.32-2.19 3.201-2.466a4 4 0 0 1 2.386 0c.882.275 1.655 1.006 3.201 2.466l2.6 2.456c.74.698 1.11 1.047 1.374 1.46a4 4 0 0 1 .513 1.191c.119.476.119.985.119 2.002V14.6c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z" opacity=".28"/>
  <path d="M9 17h6M7.606 5.65l-2.6 2.456c-.74.698-1.11 1.047-1.374 1.46a4 4 0 0 0-.513 1.191C3 11.233 3 11.742 3 12.76V14.6c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 21 7.16 21 9.4 21h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 17.96 21 16.84 21 14.6v-1.841c0-1.017 0-1.526-.119-2.002a4 4 0 0 0-.513-1.19c-.265-.414-.634-.763-1.374-1.461l-2.6-2.456c-1.546-1.46-2.32-2.19-3.201-2.466a4 4 0 0 0-2.386 0c-.882.275-1.655 1.006-3.201 2.466"/>
  </svg>
</template>

<script>
/**
 * PiHomeHLineContrast icon from the contrast style in building category.
 */
export default {
  name: 'PiHomeHLineContrast',
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
      default: 'home-h-line icon'
    }
  }
}
</script>
