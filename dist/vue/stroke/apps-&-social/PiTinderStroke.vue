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
    <path d="M8.82675 9.66267C12.454 8.41243 13.0714 5.15562 12.6083 2.16121C12.6083 2.05316 12.701 1.97599 12.7936 2.00686C16.2665 3.70472 20.1715 7.40914 20.1715 12.9658C20.1715 17.2259 16.8684 20.992 12.0681 20.992C10.3552 21.0699 8.66518 20.5752 7.26471 19.5858C5.86424 18.5965 4.83312 17.169 4.33408 15.5286C3.83505 13.8881 3.89653 12.1282 4.50882 10.5266C5.12111 8.92498 6.24933 7.57287 7.71542 6.68369C7.80803 6.62195 7.93151 6.68369 7.93151 6.79174C7.97782 7.36284 8.13217 8.7983 8.76501 9.66267H8.82675Z" stroke="currentColor" stroke-width="2" fill-rule="evenodd" clip-rule="evenodd" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiTinderStroke icon from the stroke style in apps-&-social category.
 */
export default {
  name: 'PiTinderStroke',
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
      default: 'tinder icon'
    }
  }
}
</script>
