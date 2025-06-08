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
    <path :fill="color || 'currentColor'" d="M12.5 10.5c.637 1.617 1.34 2.345 3 3-1.66.655-2.363 1.383-3 3-.637-1.617-1.34-2.345-3-3 1.66-.655 2.363-1.383 3-3" /> <path d="M8.5 17.5zm3.999-7c-.637 1.617-1.34 2.345-3 3 1.66.655 2.363 1.383 3 3 .637-1.617 1.34-2.345 3-3-1.66-.655-2.363-1.383-3-3" /> <path :fill="color || 'currentColor'" d="M9.924 2.108c-.36-.11-.74-.109-1.118-.108h-.449C7.273 2 6.4 2 5.691 2.058c-.728.06-1.369.185-1.961.487A5 5 0 0 0 1.545 4.73c-.302.592-.428 1.233-.487 1.961C1 7.4 1 8.273 1 9.357v5.286c0 1.084 0 1.958.058 2.666.06.728.185 1.369.487 1.96a5 5 0 0 0 2.185 2.186c.592.302 1.233.428 1.961.487C6.4 22 7.273 22 8.357 22h7.286c1.084 0 1.958 0 2.666-.058.729-.06 1.369-.185 1.961-.487a5 5 0 0 0 2.185-2.185c.302-.592.428-1.232.487-1.961C23 16.6 23 15.727 23 14.643v-2.286c0-1.084 0-1.958-.058-2.666-.06-.729-.185-1.369-.487-1.961a5 5 0 0 0-2.185-2.185c-.592-.302-1.232-.428-1.961-.487C17.6 5 16.727 5 15.643 5h-2.359c-.531 0-.589-.01-.626-.022a.5.5 0 0 1-.173-.092c-.03-.025-.07-.067-.365-.51l-.575-.862-.05-.075c-.21-.315-.42-.631-.71-.87a2.5 2.5 0 0 0-.861-.461" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiFolderAiDuoSolid icon from the duo-solid style in ai category.
 */
export default {
  name: 'PiFolderAiDuoSolid',
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
      default: 'folder-ai icon'
    }
  }
}
</script>
