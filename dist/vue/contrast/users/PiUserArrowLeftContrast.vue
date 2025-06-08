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
    <g fill="currentColor" opacity=".28">
    <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 15a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7.395q-.292-.327-.568-.668a3.7 3.7 0 0 1 0-4.664q.276-.341.568-.668z"/>
  </g>
  <path d="M12.4 21H6a2 2 0 0 1-2-2 4 4 0 0 1 4-4h4.4m5.01 5.573a12.9 12.9 0 0 1-2.275-2.191.6.6 0 0 1-.135-.38m2.41-2.572c-.846.634-1.61 1.37-2.275 2.191a.6.6 0 0 0-.135.38m0 0h6M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>
  </svg>
</template>

<script>
/**
 * PiUserArrowLeftContrast icon from the contrast style in users category.
 */
export default {
  name: 'PiUserArrowLeftContrast',
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
      default: 'user-arrow-left icon'
    }
  }
}
</script>
