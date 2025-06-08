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
    <path d="M18.2929 2.29289C18.6834 1.90237 19.3166 1.90237 19.7071 2.29289L22.7071 5.29289C23.0976 5.68342 23.0976 6.31658 22.7071 6.70711C22.3166 7.09763 21.6834 7.09763 21.2929 6.70711L18.2929 3.70711C17.9024 3.31658 17.9024 2.68342 18.2929 2.29289Z" fill="currentColor" stroke="none"/>
  <path d="M3 13C3 8.02944 7.02944 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13ZM15.5639 11.8258C16.02 11.5144 16.1373 10.8922 15.8258 10.4361C15.5144 9.97998 14.8922 9.86273 14.4361 10.1742C13.0378 11.129 11.8118 12.3173 10.8333 13.7032L9.70673 12.5778C9.316 12.1875 8.68283 12.1878 8.29252 12.5786C7.9022 12.9693 7.90254 13.6024 8.29327 13.9928L10.3 15.9974C10.5204 16.2175 10.8308 16.3224 11.1396 16.281C11.4483 16.2396 11.7202 16.0567 11.8748 15.7863C12.7796 14.2041 14.0476 12.8613 15.5639 11.8258Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none"/>
  <path d="M5.70711 2.29289C6.09763 2.68342 6.09763 3.31658 5.70711 3.70711L2.70711 6.70711C2.31658 7.09763 1.68342 7.09763 1.29289 6.70711C0.902369 6.31658 0.902369 5.68342 1.29289 5.29289L4.29289 2.29289C4.68342 1.90237 5.31658 1.90237 5.70711 2.29289Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiAlarmCheckSolid icon from the solid style in time category.
 */
export default {
  name: 'PiAlarmCheckSolid',
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
      default: 'alarm-check icon'
    }
  }
}
</script>
