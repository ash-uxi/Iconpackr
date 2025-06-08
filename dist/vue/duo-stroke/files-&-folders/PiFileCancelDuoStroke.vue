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
    <path d="M13.6 22H10.4C8.15981 22 7.03968 22 6.18404 21.564C5.43139 21.1805 4.81947 20.5686 4.43597 19.816C4 18.9603 4 17.8402 4 15.6V8.4C4 6.15979 4 5.03969 4.43597 4.18404C4.81947 3.43139 5.43139 2.81947 6.18404 2.43597C7.03968 2 8.15979 2 10.4 2H12.349C13.3274 2 13.8166 2 14.2769 2.11052C14.6851 2.20851 15.0753 2.37013 15.4331 2.58944C15.8368 2.83681 16.1827 3.18271 16.8745 3.87452L18.1255 5.12548C18.8173 5.81729 19.1632 6.16319 19.4106 6.56686C19.6299 6.92475 19.7915 7.31493 19.8895 7.72307C20 8.18342 20 8.67261 20 9.65097V15.6C20 17.8402 20 18.9603 19.564 19.816C19.1805 20.5686 18.5686 21.1805 17.816 21.564C16.9603 22 15.8402 22 13.6 22Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M9.47461 16.4247L11.9495 13.9498M11.9495 13.9498L14.4244 11.475M11.9495 13.9498L9.47461 11.475M11.9495 13.9498L14.4244 16.4247M18.1252 5.12558L16.8743 3.87461C16.1825 3.18281 15.8366 2.8369 15.4329 2.58954C15.075 2.37022 14.6848 2.2086 14.2767 2.11062C14.1866 2.089 14.0955 2.07161 13.9998 2.05762V3.2001C13.9998 4.88025 13.9998 5.72033 14.3267 6.36207C14.6144 6.92656 15.0733 7.3855 15.6378 7.67312C16.2795 8.0001 17.1196 8.0001 18.7998 8.0001L19.9422 8.0001C19.9282 7.90439 19.9109 7.81323 19.8892 7.72317C19.7912 7.31503 19.6296 6.92485 19.4103 6.56696C19.1629 6.16329 18.817 5.81739 18.1252 5.12558Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiFileCancelDuoStroke icon from the duo-stroke style in files-&-folders category.
 */
export default {
  name: 'PiFileCancelDuoStroke',
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
      default: 'file-cancel icon'
    }
  }
}
</script>
