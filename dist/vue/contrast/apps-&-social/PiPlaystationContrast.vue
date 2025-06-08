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
    <path fill="currentColor" d="M11 2v7.53l1 .329V5a1 1 0 1 1 2 0v5.84h.995l1.582.518c4.554 1.246 4.677-6.172 0-7.575z" opacity=".28"/>
  <path d="m8.04 13.872-4.2 1.903c-4.052 1.55-.695 5.323 3.165 4.075l1.035-.421m5.958-3.266 2.951-1.079c3.686-1.303 7.362 2.608 3.22 4.076L14 21.126M15 10.841l1.577.517c4.554 1.246 4.677-6.172 0-7.575L11 2v20"/>
  </svg>
</template>

<script>
/**
 * PiPlaystationContrast icon from the contrast style in apps-&-social category.
 */
export default {
  name: 'PiPlaystationContrast',
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
      default: 'playstation icon'
    }
  }
}
</script>
