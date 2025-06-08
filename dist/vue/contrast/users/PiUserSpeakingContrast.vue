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
    <path d="M15 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M15 15H7a4 4 0 0 0-4 4 2 2 0 0 0 2 2h12a2 2 0 0 0 2-2 4 4 0 0 0-4-4"/>
  </g>
  <path d="M18 4c.375.926.581 1.94.581 3s-.206 2.074-.581 3m2.8-8c.767 1.5 1.2 3.2 1.2 5s-.433 3.5-1.2 5M15 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-8 8h8a4 4 0 0 1 4 4 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 4 4 0 0 1 4-4"/>
  </svg>
</template>

<script>
/**
 * PiUserSpeakingContrast icon from the contrast style in users category.
 */
export default {
  name: 'PiUserSpeakingContrast',
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
      default: 'user-speaking icon'
    }
  }
}
</script>
