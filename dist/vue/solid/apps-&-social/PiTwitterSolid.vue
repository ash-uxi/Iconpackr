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
    <path d="M13.2388 3.54711C14.8862 2.68206 16.9996 2.76691 18.6308 4.35868C19.0328 4.20849 19.4242 4.03148 19.8021 3.82892C20.3622 3.52874 21.0006 3.61687 21.4424 3.95665C21.9102 4.31641 22.1704 4.98324 21.8773 5.65477C21.5267 6.45794 21.053 7.20361 20.4718 7.86414C21.7659 12.8897 20.074 17.1216 16.6978 19.5458C13.2359 22.0314 8.17026 22.5008 3.15672 20.2425C2.09229 19.763 2.18746 18.2891 3.19936 17.8717C3.78189 17.6314 4.68587 17.2371 5.6062 16.7565C4.61292 16.2126 3.84496 15.5654 3.27535 14.8354C2.38321 13.692 2.03746 12.4218 2.00292 11.2077C1.93553 8.83899 3.04938 6.61714 3.64334 5.59544C4.22404 4.59655 5.49601 4.67253 6.12242 5.37734C6.91955 6.27423 7.69509 6.87325 8.52686 7.25938C9.13227 7.54043 9.79637 7.72211 10.5624 7.8085C10.599 5.92479 11.741 4.33361 13.2388 3.54711Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiTwitterSolid icon from the solid style in apps-&-social category.
 */
export default {
  name: 'PiTwitterSolid',
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
      default: 'twitter icon'
    }
  }
}
</script>
