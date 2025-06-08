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
    <path d="M7.12645 2.25948C6.96352 1.89749 6.60189 1.66615 6.20494 1.66997C5.80799 1.67379 5.45088 1.91204 5.29495 2.2771C4.75179 3.54867 4.37597 4.88477 4.17647 6.25189C4.10311 6.75464 4.2817 7.18733 4.58432 7.48712C4.83318 7.73365 5.13192 7.85631 5.28694 7.91567C5.31306 7.92567 5.33919 7.9356 5.36536 7.94547C5.38002 7.95137 5.39479 7.95691 5.40964 7.96208C6.59735 8.40578 7.83443 8.70703 9.09495 8.85889C9.48907 8.90638 9.87395 8.71624 10.0757 8.37438C10.2775 8.03252 10.258 7.60368 10.026 7.28158L9.6804 6.80187C9.42165 6.44268 9.17346 6.07628 8.93611 5.70315C9.86109 5.25253 10.9 5 11.998 5C15.864 5 18.998 8.13401 18.998 12C18.998 15.866 15.864 19 11.998 19C8.73761 19 5.99556 16.7701 5.21843 13.7507C5.08077 13.2159 4.53559 12.8939 4.00074 13.0316C3.46589 13.1692 3.1439 13.7144 3.28156 14.2493C4.2806 18.1308 7.80295 21 11.998 21C16.9685 21 20.998 16.9706 20.998 12C20.998 7.02944 16.9685 3 11.998 3C10.5362 3 9.15564 3.34882 7.9353 3.96722C7.73571 3.58328 7.54689 3.19359 7.36911 2.7986L7.12645 2.25948Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiRotateLeftSolid icon from the solid style in arrows-&-chevrons category.
 */
export default {
  name: 'PiRotateLeftSolid',
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
      default: 'rotate-left icon'
    }
  }
}
</script>
