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
    <path d="M4.91113 7.42167L1.91113 7.42167M7.73954 4.59326L7.73954 1.59326M16.1391 18.6496V21.6496M18.9675 15.8212H21.9675" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M5.44648 10.957L4.73937 11.6641C2.78675 13.6167 2.78675 16.7826 4.73937 18.7352C6.69199 20.6878 9.85781 20.6878 11.8104 18.7352L12.5175 18.0281M10.3962 6.00727L11.1033 5.30016C13.056 3.34754 16.2218 3.34754 18.1744 5.30016C20.127 7.25278 20.127 10.4186 18.1744 12.3712L17.4673 13.0783" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiLinkBrokenSlantDuoStroke icon from the duo-stroke style in development category.
 */
export default {
  name: 'PiLinkBrokenSlantDuoStroke',
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
      default: 'link-broken-slant icon'
    }
  }
}
</script>
