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
    <path d="M8.34159 7.2439L8.41733 7.30071C9.21357 7.89789 10.3278 7.81871 11.0315 7.11492L12.6399 5.50652C12.977 5.16945 13.0293 4.64133 12.7649 4.24471L11.8622 2.8906C11.4912 2.3342 10.8668 2 10.198 2H6.59985C6.18089 2 5.80634 2.26117 5.66151 2.65429L4.05754 7.00793C3.01706 9.83209 2.40748 12.7968 2.2493 15.8023L2.09558 18.723C2.04144 19.7517 2.77745 20.6532 3.79613 20.806L4.80551 20.9574C9.41474 21.6488 14.1001 21.6652 18.7141 21.006L20.283 20.7819C21.2683 20.6411 22.0001 19.7973 22.0001 18.802V14.0858C22.0001 13.268 21.5022 12.5325 20.7429 12.2288L19.1386 11.5871C17.8365 11.0663 16.3921 11.0238 15.0617 11.4673C13.5699 11.9645 12.3368 13.034 11.6335 14.4405L11.2684 15.1707L10.2928 17.6098L10.4745 15.0656C10.6727 12.2918 9.9204 9.53318 8.34159 7.2439ZM8.34159 7.2439L7.85378 6.87805" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiBicepsStroke icon from the stroke style in sports category.
 */
export default {
  name: 'PiBicepsStroke',
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
      default: 'biceps icon'
    }
  }
}
</script>
