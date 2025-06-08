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
    <path d="M12.4 21H6C4.89543 21 4 20.1046 4 19C4 16.7909 5.79086 15 8 15H12.4M17.8115 21C16.8245 20.2598 15.9332 19.401 15.1574 18.4436C15.0525 18.3141 15 18.157 15 18M17.8115 15C16.8245 15.7402 15.9332 16.599 15.1574 17.5564C15.0525 17.6859 15 17.843 15 18M15 18H22M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiUserArrowLeftStroke icon from the stroke style in users category.
 */
export default {
  name: 'PiUserArrowLeftStroke',
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
