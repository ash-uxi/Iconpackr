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
    <path d="M12.0001 1.84961C6.39441 1.84961 1.8501 6.39392 1.8501 11.9996C1.8501 17.6053 6.39441 22.1496 12.0001 22.1496C17.6058 22.1496 22.1501 17.6053 22.1501 11.9996C22.1501 6.39392 17.6058 1.84961 12.0001 1.84961Z" :fill="color || 'currentColor'" opacity="0.28" /> <path d="M7.72916 13.8855C8.12354 13.4989 8.75668 13.5052 9.1433 13.8996C9.87043 14.6413 10.8807 15.0996 11.9999 15.0996C13.1191 15.0996 14.1294 14.6413 14.8565 13.8996C15.2432 13.5052 15.8763 13.4989 16.2707 13.8855C16.6651 14.2721 16.6714 14.9053 16.2847 15.2997C15.1969 16.4093 13.6781 17.0996 11.9999 17.0996C10.3217 17.0996 8.80289 16.4093 7.7151 15.2997C7.32848 14.9053 7.33477 14.2721 7.72916 13.8855Z" :fill="color || 'currentColor'" />
  </svg>
</template>

<script>
/**
 * PiFaceNoEyesDuoSolid icon from the duo-solid style in general category.
 */
export default {
  name: 'PiFaceNoEyesDuoSolid',
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
      default: 'face-no-eyes icon'
    }
  }
}
</script>
