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
    <path d="M9.80769 14.1923L7.61539 12M6.15385 17.8462L2.5 21.5M20.0385 3.96154L16.3846 7.61538M12.7308 3.96154L20.0385 11.2692M12.7308 11.2692L10.5385 9.07692M18.5769 2.5L21.5 5.42308M10.5385 9.07692L14.1923 5.42308L18.5769 9.80769L10.1 18.2846C9.4861 18.8985 9.17915 19.2055 8.82519 19.3205C8.51384 19.4216 8.17846 19.4216 7.86712 19.3205C7.51316 19.2055 7.20621 18.8985 6.59231 18.2846L5.71539 17.4077C5.10148 16.7938 4.79453 16.4868 4.67952 16.1329C4.57836 15.8215 4.57836 15.4862 4.67952 15.1748C4.79453 14.8209 5.10148 14.5139 5.71538 13.9L7.61539 12M10.5385 9.07692L7.61539 12" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiSyringeInjectionStroke icon from the stroke style in medical category.
 */
export default {
  name: 'PiSyringeInjectionStroke',
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
      default: 'syringe-injection icon'
    }
  }
}
</script>
