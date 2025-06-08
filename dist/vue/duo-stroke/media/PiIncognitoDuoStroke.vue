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
    <path d="M19.5831 9.71796L16.9715 4.82124C16.3866 3.72444 15.1858 3.10199 13.9524 3.25617C12.5534 3.43105 11.4472 3.43105 10.0482 3.25617C8.81479 3.10199 7.61402 3.72444 7.02906 4.82124L4.41748 9.71796M10.0002 17H14.0002" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M2 10.2601C2.7964 10.0551 3.6024 9.87403 4.41718 9.71769C9.41082 8.75947 14.5892 8.75947 19.5828 9.71769C20.3976 9.87403 21.2036 10.0551 22 10.2601M10 17C10 19.2091 8.20914 21 6 21C3.79086 21 2 19.2091 2 17C2 14.7909 3.79086 13 6 13C8.20914 13 10 14.7909 10 17ZM14 17C14 19.2091 15.7909 21 18 21C20.2091 21 22 19.2091 22 17C22 14.7909 20.2091 13 18 13C15.7909 13 14 14.7909 14 17Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiIncognitoDuoStroke icon from the duo-stroke style in media category.
 */
export default {
  name: 'PiIncognitoDuoStroke',
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
      default: 'incognito icon'
    }
  }
}
</script>
