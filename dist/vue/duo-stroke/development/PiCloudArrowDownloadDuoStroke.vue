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
    <path d="M16 17.5962C15.0037 18.7995 13.8464 19.8852 12.5554 20.8284C12.2242 21.0703 11.7758 21.0703 11.4446 20.8284C10.1536 19.8852 8.99628 18.7995 8 17.5962M12 12.2266V21" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M6.5108 6.96991C7.49756 4.63696 9.80761 3 12.5 3C14.9896 3 17.1523 4.39966 18.2441 6.45502C18.4808 6.90066 18.5992 7.12348 18.6633 7.21087C18.7633 7.34728 18.7308 7.31095 18.855 7.42573C18.9346 7.49927 19.1597 7.65384 19.6098 7.96294C21.0533 8.95425 22 10.6166 22 12.5C22 13.8296 21.5282 15.0491 20.7428 16M6.5108 6.96991C6.4953 7.00656 6.48012 7.04339 6.46527 7.08039M6.5108 6.96991C6.49559 7.00586 6.4807 7.04198 6.46612 7.07827L6.46527 7.08039M6.46527 7.08039C6.16514 7.82825 6 8.64484 6 9.5M6.46527 7.08039C6.14284 7.88301 5.98155 8.28443 5.90405 8.40471C5.75223 8.64034 5.86577 8.50534 5.65964 8.69531C5.55434 8.79235 5.08115 9.08523 4.13499 9.67086C2.85361 10.464 2 11.8823 2 13.5C2 14.4251 2.27913 15.285 2.75777 16" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCloudArrowDownloadDuoStroke icon from the duo-stroke style in development category.
 */
export default {
  name: 'PiCloudArrowDownloadDuoStroke',
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
      default: 'cloud-arrow-download icon'
    }
  }
}
</script>
