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
    <path d="M13.6677 7.84076C13.8113 8.42155 14.1102 8.97368 14.5685 9.43193C15.0267 9.89017 15.5788 10.189 16.1596 10.3327M13.6677 7.84076C13.3552 6.57723 13.7775 5.17802 14.8921 4.31463L17.2346 2.5L16.9155 3.11595C16.3253 4.25512 16.5407 5.64531 17.4479 6.55251C18.3551 7.45971 19.7453 7.67508 20.8844 7.0849L21.5004 6.7658L19.6858 9.10832C18.8224 10.2229 17.4232 10.6452 16.1596 10.3327M13.6677 7.84076L3.56754 16.609C3.3534 16.7949 3.24633 16.8879 3.16532 16.9733C2.11177 18.0844 2.44413 19.5888 3.42783 20.5725C4.41153 21.5562 5.91593 21.8886 7.02706 20.835C7.1123 20.7542 7.20504 20.6474 7.39011 20.4342L16.1596 10.3327" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M21.1556 21.3916L15.999 16.2351M5.44831 9.90874L3.47739 7.9378C3.14894 7.60935 2.98471 7.44512 2.86906 7.28595C2.23245 6.40973 2.23245 5.22324 2.86906 4.34702C3.19975 3.89186 3.67409 3.41752 4.12925 3.08683C5.00547 2.45022 6.19196 2.45022 7.06817 3.08683C7.22735 3.20248 7.39158 3.36671 7.72003 3.69516L9.99903 5.97416" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiToolsDuoStroke icon from the duo-stroke style in general category.
 */
export default {
  name: 'PiToolsDuoStroke',
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
      default: 'tools icon'
    }
  }
}
</script>
