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
    <path d="M10.9443 7.77539L8.04102 21.4999" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M5.14106 14.3739C4.53442 13.3221 4.17781 12.1448 4.09881 10.9331C4.01981 9.72147 4.22054 8.50787 4.68548 7.38616C5.15042 6.26446 5.86711 5.26471 6.78014 4.46423C7.69316 3.66375 8.77806 3.08397 9.95094 2.76974C11.1238 2.4555 12.3533 2.41523 13.5442 2.65203C14.7351 2.88883 15.8556 3.39635 16.8191 4.13536C17.7825 4.87438 18.5631 5.82507 19.1005 6.91394C19.6378 8.00281 19.9176 9.20068 19.918 10.4149C19.918 14.7876 16.7508 17.5411 13.5836 17.5411C10.6251 17.5411 9.50897 15.4684 9.37475 15.1953" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiPinterestDuoStroke icon from the duo-stroke style in apps-&-social category.
 */
export default {
  name: 'PiPinterestDuoStroke',
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
      default: 'pinterest icon'
    }
  }
}
</script>
