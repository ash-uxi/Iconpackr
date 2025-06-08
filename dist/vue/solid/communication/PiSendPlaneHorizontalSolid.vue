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
    <path d="M2.13053 6.01488C1.42713 3.62384 3.66782 1.38349 6.06083 2.15175C10.5951 3.60745 14.9226 5.64907 18.9351 8.22541C19.0469 8.29723 19.1786 8.37717 19.3223 8.46438C19.7718 8.73719 20.3384 9.08116 20.7814 9.47017C21.4295 10.0392 22 10.8436 22 12.0003C22 13.1569 21.4295 13.9613 20.7814 14.5304C20.3384 14.9194 19.7718 15.2633 19.3223 15.5361C19.1786 15.6234 19.0469 15.7033 18.9351 15.7751C14.9226 18.3515 10.5951 20.3931 6.06083 21.8488C3.66782 22.617 1.42713 20.3767 2.13053 17.9857L3.38598 13.718C3.51117 13.2925 3.90174 13.0002 4.34532 13.0002H9.83492C10.3872 13.0002 10.8349 12.5525 10.8349 12.0002C10.8349 11.448 10.3872 11.0002 9.83492 11.0002H4.34531C3.90173 11.0002 3.51115 10.708 3.38596 10.2825L2.13053 6.01488Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiSendPlaneHorizontalSolid icon from the solid style in communication category.
 */
export default {
  name: 'PiSendPlaneHorizontalSolid',
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
      default: 'send-plane-horizontal icon'
    }
  }
}
</script>
