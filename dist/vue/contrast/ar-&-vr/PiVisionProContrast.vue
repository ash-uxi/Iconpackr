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
    <path fill="currentColor" d="M12 6.5c4.088 0 9.909.142 9.977 5.5.032 2.524-1.113 5.172-3.898 5.475-2.575.28-3.685-2.383-6.08-2.381-2.364.001-3.473 2.616-6 2.39-2.822-.255-4.008-2.932-3.976-5.484.068-5.358 5.89-5.5 9.977-5.5" opacity=".28"/>
  <path d="M12 6.5c4.088 0 9.909.142 9.977 5.5.032 2.524-1.113 5.172-3.898 5.475-2.575.28-3.685-2.383-6.08-2.381-2.364.001-3.473 2.616-6 2.39-2.822-.255-4.008-2.932-3.976-5.484.068-5.358 5.89-5.5 9.977-5.5"/>
  </svg>
</template>

<script>
/**
 * PiVisionProContrast icon from the contrast style in ar-&-vr category.
 */
export default {
  name: 'PiVisionProContrast',
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
      default: 'vision-pro icon'
    }
  }
}
</script>
