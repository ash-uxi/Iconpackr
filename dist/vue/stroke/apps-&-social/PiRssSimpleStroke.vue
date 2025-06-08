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
    <path d="M4 4C8.24346 4 12.3131 5.68571 15.3137 8.68629C18.3143 11.6869 20 15.7565 20 20M4 11.5789C5.10587 11.5789 6.20091 11.7968 7.2226 12.22C8.24429 12.6432 9.17262 13.2634 9.95458 14.0454C10.7366 14.8274 11.3568 15.7557 11.78 16.7774C12.2032 17.7991 12.4211 18.8941 12.4211 20M4.40982 19.5789H4.42105" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiRssSimpleStroke icon from the stroke style in apps-&-social category.
 */
export default {
  name: 'PiRssSimpleStroke',
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
      default: 'rss-simple icon'
    }
  }
}
</script>
