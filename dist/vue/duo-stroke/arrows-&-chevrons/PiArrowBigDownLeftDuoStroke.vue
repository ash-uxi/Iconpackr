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
    <path d="M14.8088 19.091C13.7591 18.2594 12.7379 17.394 11.7467 16.4962L18.7636 9.47933C19.1596 9.08331 19.3576 8.8853 19.4318 8.65698C19.497 8.45613 19.497 8.23978 19.4318 8.03894C19.3576 7.81062 19.1596 7.61259 18.7636 7.21659L16.7837 5.23669C16.3877 4.84069 16.1896 4.64266 15.9613 4.56847C15.7605 4.50322 15.5441 4.50322 15.3433 4.56848C15.115 4.64266 14.9169 4.84067 14.5209 5.23669L7.50409 12.2535C6.60629 11.2624 5.74085 10.2412 4.9093 9.19146" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M14.809 19.0909C11.7905 19.5428 8.7329 19.6022 5.71256 19.2684C5.45346 19.2398 5.22263 19.1242 5.04942 18.951C4.87621 18.7778 4.76061 18.547 4.73198 18.2879C4.39821 15.2675 4.45757 12.2099 4.90951 9.19141" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiArrowBigDownLeftDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowBigDownLeftDuoStroke',
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
      default: 'arrow-big-down-left icon'
    }
  }
}
</script>
