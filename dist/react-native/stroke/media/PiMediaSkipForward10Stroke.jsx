import React from "react";
import Svg, {
  Path,
  Rect,
  Circle,
  Ellipse,
  Line,
  Polygon,
  Polyline,
} from "react-native-svg";

/**
 * Pimediaskipforward10stroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimediaskipforward10stroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "media skip forward10 icon",
  style,
  ...props
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    accessibilityRole="image"
    accessibilityLabel={accessibilityLabel}
    style={style}
    {...props}
  >
    <path
      d="M10 9h1a1 1 0 0 0-1.238-.971zm-1 6a1 1 0 1 0 2 0zm-1.895-4.785a1 1 0 1 0 1.79.893zM15 10.5v3h2v-3zm-1 3v-3h-2v3zm.5.5a.5.5 0 0 1-.5-.5h-2a2.5 2.5 0 0 0 2.5 2.5zm.5-.5a.5.5 0 0 1-.5.5v2a2.5 2.5 0 0 0 2.5-2.5zm-.5-3.5a.5.5 0 0 1 .5.5h2A2.5 2.5 0 0 0 14.5 8zm0-2a2.5 2.5 0 0 0-2.5 2.5h2a.5.5 0 0 1 .5-.5zM9 9v6h2V9zm-.105 2.108c.298-.596.768-.996 1.343-1.137L9.762 8.03c-1.229.3-2.137 1.145-2.657 2.186z"
      fill="none"
    />
    <path
      d="M11 1c.722.519 1.37 1.124 1.928 1.802a.31.31 0 0 1 0 .396A10.3 10.3 0 0 1 11 5"
      fill="none"
    />
    <path d="M17.5 4.686a9.15 9.15 0 1 1-4.687-1.801" fill="none" />
  </Svg>
);

export default Pimediaskipforward10stroke;
