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
    <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M4 19a4 4 0 0 1 4-4h4a3 3 0 0 0 3 3h4.874q.125.481.126 1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2"/>
  </g>
  <path d="M20 19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2 4 4 0 0 1 4-4h3m4 0h6m-5-8a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>
  </svg>
</template>

<script>
/**
 * PiUserRemoveContrast icon from the contrast style in users category.
 */
export default {
  name: 'PiUserRemoveContrast',
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
      default: 'user-remove icon'
    }
  }
}
</script>
