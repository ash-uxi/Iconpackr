<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    
     :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <path d="M14 12h3m2 10v-3m0 0v-3m0 3h-3m3 0h3" /> <path :fill="color || 'currentColor'" d="M18.994 6.344c-.017-.728-.075-1.336-.298-1.875a4 4 0 0 0-2.165-2.165c-.418-.173-.852-.241-1.321-.273C14.757 2 14.204 2 13.534 2H9.956c-1.363 0-2.447 0-3.321.071-.896.074-1.66.227-2.359.583a6 6 0 0 0-2.622 2.622c-.356.7-.51 1.463-.582 2.359C1 8.509 1 9.593 1 10.956v3.666c0 1.23-.001 2.569.457 3.674a6 6 0 0 0 3.247 3.247c.602.25 1.244.356 1.992.407.732.05 1.634.05 2.768.05h5.072q.715.001 1.314-.004A3 3 0 0 1 16 16a3 3 0 1 1 6 0c.34 0 .665.056.97.16.03-.515.03-1.036.03-1.538v-.158c0-1.134 0-2.036-.05-2.768-.05-.748-.157-1.39-.407-1.992a6 6 0 0 0-3.247-3.247q-.15-.062-.302-.113m-3.92-2.318c.367.025.558.07.691.126a2 2 0 0 1 1.083 1.083c.07.169.11.382.132.797C16.312 6 15.532 6 14.6 6H9.465c-1.134 0-2.036 0-2.768.05-.748.051-1.39.158-1.992.407a6 6 0 0 0-1.603.983c.068-.567.177-.947.335-1.256a4 4 0 0 1 1.748-1.748c.37-.189.842-.308 1.614-.371C7.58 4 8.583 4 10 4h3.5c.713 0 1.197 0 1.573.026" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiWalletPlusDuoSolid icon from the duo-solid style in web3-&-crypto category.
 */
export default {
  name: 'PiWalletPlusDuoSolid',
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
      default: 'wallet-plus icon'
    }
  }
}
</script>
