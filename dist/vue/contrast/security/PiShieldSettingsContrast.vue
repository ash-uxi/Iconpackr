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
    <path fill="currentColor" d="M10.884 2.368 5.496 4.314A3 3 0 0 0 3.517 7.02l-.127 3.309a11 11 0 0 0 5.543 9.978l1.521.867a3 3 0 0 0 1.757.382v-.24a3 3 0 0 1-.04-.456l-.004-.444-.31-.317a3 3 0 0 1 0-4.198l.31-.317.005-.444a3 3 0 0 1 2.968-2.968l.444-.005.317-.31a3 3 0 0 1 4.038-.146h.636q.081-.903.011-1.827l-.227-2.95a3 3 0 0 0-1.972-2.592l-5.465-1.974a3 3 0 0 0-2.038 0" opacity=".28"/>
  <path d="M18 18h.01m2.606-7.031a11 11 0 0 0-.03-1.085l-.227-2.95a3 3 0 0 0-1.972-2.592l-5.465-1.974a3 3 0 0 0-2.038 0L5.496 4.314A3 3 0 0 0 3.517 7.02l-.127 3.309a11 11 0 0 0 5.543 9.978l1.521.867c.243.139.502.241.767.306M18 14l1.178 1.155 1.65.017.017 1.65L22 18l-1.154 1.179-.017 1.65-1.65.017L18 22l-1.178-1.154-1.65-.018-.017-1.65L14 18l1.155-1.179.017-1.65 1.65-.016z"/>
  </svg>
</template>

<script>
/**
 * PiShieldSettingsContrast icon from the contrast style in security category.
 */
export default {
  name: 'PiShieldSettingsContrast',
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
      default: 'shield-settings icon'
    }
  }
}
</script>
