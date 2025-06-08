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
    <path d="M14 4H10C7.19974 4 5.79961 4 4.73005 4.54497C3.78924 5.02433 3.02433 5.78924 2.54497 6.73005C2 7.79961 2 9.19974 2 12C2 14.8003 2 16.2004 2.54497 17.27C3.02433 18.2108 3.78924 18.9757 4.73005 19.455C5.79961 20 7.19974 20 10 20H14C16.8003 20 18.2004 20 19.27 19.455C20.2108 18.9757 20.9757 18.2108 21.455 17.27C22 16.2004 22 14.8003 22 12C22 9.19974 22 7.79961 21.455 6.73005C20.9757 5.78924 20.2108 5.02433 19.27 4.54497C18.2004 4 16.8003 4 14 4Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M14.9806 11.1317C15.6524 11.5156 15.6524 12.4843 14.9806 12.8682L10.9961 15.145C10.3295 15.526 9.5 15.0446 9.5 14.2768L9.5 9.72316C9.5 8.95533 10.3295 8.47397 10.9961 8.85491L14.9806 11.1317Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiYoutubeDuoStroke icon from the duo-stroke style in apps-&-social category.
 */
export default {
  name: 'PiYoutubeDuoStroke',
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
      default: 'youtube icon'
    }
  }
}
</script>
