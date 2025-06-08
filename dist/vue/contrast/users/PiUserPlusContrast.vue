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
    <path d="M15 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M7 15a4 4 0 0 0-4 4 2 2 0 0 0 2 2h11.352a1 1 0 0 0-.353-.762h.003A3 3 0 0 1 15 18a3 3 0 0 1-3-3z"/>
  </g>
  <path d="M15.352 21H5a2 2 0 0 1-2-2 4 4 0 0 1 4-4h4m7 3v-3m0 0v-3m0 3h-3m3 0h3m-6-8a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>
  </svg>
</template>

<script>
/**
 * PiUserPlusContrast icon from the contrast style in users category.
 */
export default {
  name: 'PiUserPlusContrast',
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
      default: 'user-plus icon'
    }
  }
}
</script>
