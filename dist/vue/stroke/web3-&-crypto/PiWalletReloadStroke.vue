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
    <path d="M22.295 15.57C22.169 16.3828 21.9432 17.1765 21.6232 17.9331C21.5489 18.1089 21.3782 18.2191 21.1932 18.2199M18.765 17.4514C19.51 17.7999 20.2947 18.055 21.1013 18.2113C21.1321 18.2172 21.1628 18.2201 21.1932 18.2199M21.1932 18.2199C21.0037 16.1866 19.2925 14.595 17.2096 14.595C14.9998 14.595 13.2085 16.3863 13.2085 18.5961C13.2085 20.8058 14.9998 22.5972 17.2096 22.5972C17.8532 22.5972 18.4613 22.4452 19 22.1752M2 14.5V11C2 8.19974 2 6.79961 2.54497 5.73005C3.02433 4.78924 3.78924 4.02433 4.73005 3.54497C5.79961 3 7.19974 3 10 3H13.5C14.8978 3 15.5967 3 16.1481 3.22836C16.8831 3.53284 17.4672 4.11687 17.7716 4.85195C17.979 5.35251 17.9981 5.97475 17.9998 7.1313M2 14.5C2 15.8297 2 16.9946 2.3806 17.9134C2.88807 19.1386 3.86144 20.1119 5.08658 20.6194C6.00544 21 7.17029 21 9.5 21H9.57466M2 14.5C2 12.1703 2 11.0054 2.3806 10.0866C2.88807 8.86144 3.86144 7.88807 5.08658 7.3806C6.00544 7 7.17029 7 9.5 7H14.5C16.1339 7 17.1949 7 17.9998 7.1313M17.9998 7.1313C18.3426 7.18721 18.639 7.26693 18.9134 7.3806C20.1386 7.88807 21.1119 8.86144 21.6194 10.0866C21.7931 10.506 21.8875 10.9766 21.9389 11.5858" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiWalletReloadStroke icon from the stroke style in web3-&-crypto category.
 */
export default {
  name: 'PiWalletReloadStroke',
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
      default: 'wallet-reload icon'
    }
  }
}
</script>
