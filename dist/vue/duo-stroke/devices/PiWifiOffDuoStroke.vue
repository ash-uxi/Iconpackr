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
    <path d="M12 19.5H12.01M1.19336 8.70076C4.04023 6.09199 7.83414 4.5 11.9999 4.5C14.213 4.5 16.3212 4.94934 18.2382 5.76177M4.73193 12.243C6.67006 10.5357 9.21407 9.5 12 9.5C12.7769 9.5 13.5349 9.58054 14.2663 9.73371M14.4016 15C14.8677 15.2038 15.303 15.4652 15.6983 15.7751M21.6585 7.74308C22.0561 8.04456 22.4391 8.3642 22.8064 8.70076M18.074 11.3276C18.493 11.6057 18.8919 11.9117 19.268 12.243" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M3.38477 20.6152L21 3" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiWifiOffDuoStroke icon from the duo-stroke style in devices category.
 */
export default {
  name: 'PiWifiOffDuoStroke',
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
      default: 'wifi-off icon'
    }
  }
}
</script>
