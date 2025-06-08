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
    <path d="M10.3336 10.4736C10.6504 10.0212 10.5404 9.39763 10.088 9.08085L8.85931 8.22048C8.4069 7.90371 7.78336 8.01365 7.46658 8.46606C7.1498 8.91847 7.25975 9.54201 7.71215 9.85879L8.94088 10.7192C9.39329 11.0359 10.0168 10.926 10.3336 10.4736Z" :fill="color || 'currentColor'" /> <path d="M12.0001 1.8501C6.39441 1.8501 1.8501 6.39441 1.8501 12.0001C1.8501 17.6058 6.39441 22.1501 12.0001 22.1501C17.6058 22.1501 22.1501 17.6058 22.1501 12.0001C22.1501 6.39441 17.6058 1.8501 12.0001 1.8501Z" :fill="color || 'currentColor'" opacity="0.28" /> <path d="M13.6665 10.4736C13.9833 10.926 14.6069 11.0359 15.0593 10.7192L16.288 9.85879C16.7404 9.54201 16.8503 8.91847 16.5336 8.46606C16.2168 8.01365 15.5932 7.90371 15.1408 8.22048L13.9121 9.08085C13.4597 9.39763 13.3498 10.0212 13.6665 10.4736Z" :fill="color || 'currentColor'" /> <path d="M14.8521 16.8002C15.2388 17.1946 15.8719 17.2009 16.2663 16.8143C16.6607 16.4277 16.667 15.7945 16.2803 15.4002C15.1926 14.2905 13.6738 13.6002 11.9955 13.6002C10.3173 13.6002 8.79851 14.2905 7.71072 15.4002C7.32409 15.7945 7.33039 16.4277 7.72477 16.8143C8.11916 17.2009 8.75229 17.1946 9.13892 16.8002C9.86605 16.0585 10.8764 15.6002 11.9955 15.6002C13.1147 15.6002 14.125 16.0585 14.8521 16.8002Z" :fill="color || 'currentColor'" />
  </svg>
</template>

<script>
/**
 * PiFaceAngryDuoSolid icon from the duo-solid style in general category.
 */
export default {
  name: 'PiFaceAngryDuoSolid',
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
      default: 'face-angry icon'
    }
  }
}
</script>
