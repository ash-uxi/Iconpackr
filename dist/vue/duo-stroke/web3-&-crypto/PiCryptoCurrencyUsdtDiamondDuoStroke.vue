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
    <path d="M16.5921 4H7.40794C6.55408 4 5.75671 4.42674 5.28307 5.13719L2.42895 9.41838C1.75663 10.4269 1.88578 11.769 2.73807 12.6307L10.1843 20.1597C11.1838 21.1703 12.8162 21.1703 13.8157 20.1597L21.2619 12.6307C22.1142 11.769 22.2434 10.4269 21.5711 9.41838L18.7169 5.13719C18.2433 4.42674 17.4459 4 16.5921 4Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M8.42472 8H12M12 8H15.5753M12 8V11M12 14C14.7614 14 17 13.3284 17 12.5C17 11.6716 14.7614 11 12 11M12 14C9.23858 14 7 13.3284 7 12.5C7 11.6716 9.23858 11 12 11M12 14V17M12 11V11.5" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCryptoCurrencyUsdtDiamondDuoStroke icon from the duo-stroke style in web3-&-crypto category.
 */
export default {
  name: 'PiCryptoCurrencyUsdtDiamondDuoStroke',
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
      default: 'crypto-currency-usdt-diamond icon'
    }
  }
}
</script>
