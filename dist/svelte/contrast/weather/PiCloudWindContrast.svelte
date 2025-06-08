<script>
  /**
   * PiCloudWindContrast icon from the contrast style in weather category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'cloud-wind icon';
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  class={className}
  fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: {color || 'currentColor'}"
  role="img"
  aria-label={ariaLabel}
  {...$$restProps}
>
  <path d="M2 14h11a2 2 0 1 0-1-3.732M2 18h8a2 2 0 1 1-1 3.732M12.5 3a6.5 6.5 0 0 1 6.168 4.444A5.501 5.501 0 0 1 16.5 18h-.918M12.5 3a6.5 6.5 0 0 0-6.483 6.026A4.5 4.5 0 0 0 3.671 10M12.5 3c-3.738 0-6.764 3.285-6.481 7"/>
  <path fill="currentColor" d="M22 12.5a5.5 5.5 0 0 1-5.5 5.5h-1.915c-.171-.39-.39-.756-.65-1.087a5.002 5.002 0 1 0-3.437-9.242A3 3 0 0 0 9.091 11H3.67v-1a4.5 4.5 0 0 1 2.347-.974 6.5 6.5 0 0 1 12.65-1.582 5.5 5.5 0 0 1 3.333 5.056" opacity=".28"/>
</svg>
