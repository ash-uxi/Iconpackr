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
    <path d="M1.01197 7.37312C0.827341 4.45973 2.79521 1.77075 5.73528 1.13609C8.67537 0.501436 11.5772 2.13924 12.6108 4.86936L1.01197 7.37312Z" fill="currentColor" stroke="none"/>
  <path d="M11.1203 15.8073C10.5359 18.6675 12.1144 21.6021 14.939 22.6359C17.7636 23.6697 20.8635 22.4473 22.2634 19.8856L11.1203 15.8073Z" fill="currentColor" stroke="none"/>
  <path d="M11.739 14.117C13.139 11.5554 16.2388 10.3331 19.0634 11.3669C21.8879 12.4007 23.4664 15.3351 22.8821 18.1953L11.739 14.117Z" fill="currentColor" stroke="none"/>
  <path d="M12.9906 6.62883L1.39177 9.13259C2.42534 11.8628 5.32723 13.5006 8.26733 12.8659C11.2074 12.2313 13.1753 9.54223 12.9906 6.62883Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiMedicinePillTabletsSolid icon from the solid style in medical category.
 */
export default {
  name: 'PiMedicinePillTabletsSolid',
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
      default: 'medicine-pill-tablets icon'
    }
  }
}
</script>
