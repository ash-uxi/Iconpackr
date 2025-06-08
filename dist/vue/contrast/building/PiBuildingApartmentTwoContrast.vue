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
    <path fill="currentColor" d="M10.8 2H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 3.52 3 4.08 3 5.2v15.2c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 22 4.04 22 4.6 22h7.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C14 21.24 14 20.96 14 20.4V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C12.48 2 11.92 2 10.8 2" opacity=".28"/>
  <path d="M7 6h3m-3 4h3m-3 4h3m-3 4h3m7-4h1m-1 4h1m-5.6 4c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C14 21.24 14 20.96 14 20.4V10m-1.6 12h7c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 21.24 21 20.96 21 20.4v-7.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 10 18.92 10 17.8 10H14m-1.6 12H4.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C3 21.24 3 20.96 3 20.4V5.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 2 5.08 2 6.2 2h4.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C14 3.52 14 4.08 14 5.2V10"/>
  </svg>
</template>

<script>
/**
 * PiBuildingApartmentTwoContrast icon from the contrast style in building category.
 */
export default {
  name: 'PiBuildingApartmentTwoContrast',
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
      default: 'building-apartment-two icon'
    }
  }
}
</script>
