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
    <path d="M18.4099 22.5728C17.5639 21.9383 16.7999 21.2022 16.1349 20.3816C16.045 20.2706 16 20.136 16 20.0014M18.4099 17.4299C17.5639 18.0644 16.7999 18.8005 16.1349 19.6212C16.045 19.7321 16 19.8668 16 20.0014M16 20.0014H22M14 12H17" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M2 14.5V11C2 8.19974 2 6.79961 2.54497 5.73005C3.02433 4.78924 3.78924 4.02433 4.73005 3.54497C5.79961 3 7.19974 3 10 3H13.5C14.8978 3 15.5967 3 16.1481 3.22836C16.8831 3.53284 17.4672 4.11687 17.7716 4.85195C17.979 5.35251 17.9981 5.97475 17.9998 7.1313M2 14.5C2 15.8297 2 16.9946 2.3806 17.9134C2.88807 19.1386 3.86144 20.1119 5.08658 20.6194C6.00544 21 7.17029 21 9.5 21H12.1055M2 14.5C2 12.1703 2 11.0054 2.3806 10.0866C2.88807 8.86144 3.86144 7.88807 5.08658 7.3806C6.00544 7 7.17029 7 9.5 7H14.5C16.1339 7 17.1949 7 17.9998 7.1313M17.9998 7.1313C18.3426 7.18721 18.639 7.26693 18.9134 7.3806C20.1386 7.88807 21.1119 8.86144 21.6194 10.0866C22 11.0054 22 12.1703 22 14.5C22 14.8449 22 15.1787 21.9934 15.5L21.9897 15.6483" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiWalletArrowLeftDuoStroke icon from the duo-stroke style in web3-&-crypto category.
 */
export default {
  name: 'PiWalletArrowLeftDuoStroke',
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
      default: 'wallet-arrow-left icon'
    }
  }
}
</script>
