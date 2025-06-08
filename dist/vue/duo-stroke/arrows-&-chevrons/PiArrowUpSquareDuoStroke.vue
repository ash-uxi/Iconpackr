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
    <path d="M6.7039 20.5433C7.80653 21 9.20435 21 12 21C14.7956 21 16.1935 21 17.2961 20.5433C18.7663 19.9343 19.9343 18.7663 20.5433 17.2961C21 16.1935 21 14.7956 21 12C21 9.20435 21 7.80653 20.5433 6.7039C19.9343 5.23373 18.7663 4.06569 17.2961 3.45672C16.1935 3 14.7956 3 12 3C9.20435 3 7.80653 3 6.7039 3.45672C5.23373 4.06569 4.06569 5.23373 3.45672 6.7039C3 7.80653 3 9.20435 3 12C3 14.7956 3 16.1935 3.45672 17.2961C4.06569 18.7663 5.23373 19.9343 6.7039 20.5433Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M8 11.9486C9.03704 10.5241 10.2485 9.24467 11.6038 8.1419C11.72 8.0473 11.86 8 12 8M16 11.9486C14.963 10.5241 13.7515 9.24467 12.3962 8.1419C12.28 8.0473 12.14 8 12 8M12 8L12 16" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiArrowUpSquareDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowUpSquareDuoStroke',
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
      default: 'arrow-up-square icon'
    }
  }
}
</script>
