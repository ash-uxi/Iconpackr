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
    <path d="M13 4.00001H9.22222M13 4.00001C15.2091 4.00001 17 5.79087 17 8.00001C17 10.2092 15.2091 12 13 12H9.22222C9.01586 12 8.91268 12 8.82569 11.9924C7.85879 11.9078 7.0922 11.1412 7.00761 10.1743C7 10.0873 7 9.98415 7 9.77779V6.22223C7 6.01587 7 5.91269 7.00761 5.8257C7.0922 4.85881 7.85879 4.09221 8.82569 4.00762C8.87389 4.00341 8.92706 4.00085 9 4.00001M13 4.00001V2M9.22222 4.00001H9M9.22222 4.00001C9.13021 4.00001 9.0587 3.99934 9 4.00001M10.2 20H15C17.2091 20 19 18.2092 19 16C19 13.7909 17.2091 12 15 12H10.2C9.0799 12 8.51984 12 8.09202 12.218C7.71569 12.4097 7.40973 12.7157 7.21799 13.092C7 13.5199 7 14.0799 7 15.2V16.8C7 17.9201 7 18.4802 7.21799 18.908C7.40973 19.2843 7.71569 19.5903 8.09202 19.782C8.51984 20 9.07989 20 10.2 20ZM10.2 20H9M7 4.00001V20M7 4.00001L5 4.00001M7 4.00001H9M5 20H7M9 22V20M9 2V4.00001M13 22V20M7 20H9" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCryptoCurrencyBitcoinStroke icon from the stroke style in web3-&-crypto category.
 */
export default {
  name: 'PiCryptoCurrencyBitcoinStroke',
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
      default: 'crypto-currency-bitcoin icon'
    }
  }
}
</script>
