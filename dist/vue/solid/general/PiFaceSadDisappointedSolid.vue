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
    <path d="M1.8501 11.9996C1.8501 6.39392 6.39441 1.84961 12.0001 1.84961C17.6058 1.84961 22.1501 6.39392 22.1501 11.9996C22.1501 17.6053 17.6058 22.1496 12.0001 22.1496C6.39441 22.1496 1.8501 17.6053 1.8501 11.9996ZM14.9737 8.31087C14.5213 7.99409 13.8977 8.10404 13.581 8.55645C13.2642 9.00885 13.3741 9.6324 13.8265 9.94918L15.0553 10.8095C15.5077 11.1263 16.1312 11.0164 16.448 10.564C16.7648 10.1116 16.6548 9.48801 16.2024 9.17124L14.9737 8.31087ZM10.1825 9.94921C10.6349 9.63243 10.7448 9.00888 10.428 8.55648C10.1113 8.10407 9.48772 7.99412 9.03531 8.3109L7.80658 9.17127C7.35418 9.48804 7.24423 10.1116 7.56101 10.564C7.87778 11.0164 8.50133 11.1263 8.95373 10.8096L10.1825 9.94921ZM7.72926 16.8137C8.12365 17.2003 8.75678 17.194 9.1434 16.7996C9.87054 16.0579 10.8809 15.5996 12 15.5996C13.1192 15.5996 14.1295 16.0579 14.8566 16.7996C15.2433 17.194 15.8764 17.2003 16.2708 16.8137C16.6652 16.4271 16.6715 15.7939 16.2848 15.3995C15.197 14.2899 13.6782 13.5996 12 13.5996C10.3218 13.5996 8.803 14.2899 7.7152 15.3995C7.32858 15.7939 7.33487 16.4271 7.72926 16.8137Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiFaceSadDisappointedSolid icon from the solid style in general category.
 */
export default {
  name: 'PiFaceSadDisappointedSolid',
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
      default: 'face-sad-disappointed icon'
    }
  }
}
</script>
