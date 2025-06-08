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
    <path fill="currentColor" d="M12 21.5c1.948 0 7.79-4.111 7.79-10.278C19.79 5.056 14.922 3 12 3c-2.92 0-7.79 2.056-7.79 8.222C4.21 17.39 10.054 21.5 12 21.5" opacity=".28"/>
  <path d="M17.14 18.096a2.88 2.88 0 0 0-2.25-1.078H9.111c-.91 0-1.722.42-2.252 1.078m10.28 0c1.473-1.753 2.65-4.107 2.65-6.874C19.79 5.056 14.922 3 12 3c-2.92 0-7.79 2.056-7.79 8.222 0 2.767 1.177 5.12 2.65 6.874m10.28 0C15.332 20.251 13.075 21.5 12 21.5s-3.33-1.25-5.14-3.404m8.062-7.306a2.921 2.921 0 1 1-5.843 0 2.921 2.921 0 0 1 5.842 0"/>
  </svg>
</template>

<script>
/**
 * PiMapPinUserContrast icon from the contrast style in navigation category.
 */
export default {
  name: 'PiMapPinUserContrast',
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
      default: 'map-pin-user icon'
    }
  }
}
</script>
