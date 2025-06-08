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
    <path fill="currentColor" d="M9.152 4.235C9 4.602 9 5.068 9 6v3H6c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C3 10.602 3 11.068 3 12s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 15 5.068 15 6 15h3v3c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C10.602 21 11.068 21 12 21s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C15 19.398 15 18.932 15 18v-3h3c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 13.398 21 12.932 21 12s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C19.398 9 18.932 9 18 9h-3V6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C13.398 3 12.932 3 12 3s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083" opacity=".28"/>
  <path d="M9.152 4.235C9 4.602 9 5.068 9 6v3H6c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C3 10.602 3 11.068 3 12s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 15 5.068 15 6 15h3v3c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C10.602 21 11.068 21 12 21s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C15 19.398 15 18.932 15 18v-3h3c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 13.398 21 12.932 21 12s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C19.398 9 18.932 9 18 9h-3V6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C13.398 3 12.932 3 12 3s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083"/>
  </svg>
</template>

<script>
/**
 * PiMedicalCrossContrast icon from the contrast style in medical category.
 */
export default {
  name: 'PiMedicalCrossContrast',
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
      default: 'medical-cross icon'
    }
  }
}
</script>
