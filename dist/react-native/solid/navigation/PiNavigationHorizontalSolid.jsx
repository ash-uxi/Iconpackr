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
 * Pinavigationhorizontalsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinavigationhorizontalsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "navigation horizontal icon",
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
      d="M10.6936 2.71087C11.3068 1.76305 12.6936 1.76304 13.3069 2.71087C16.6308 7.84773 19.0254 13.5291 20.3813 19.4954L20.5083 20.054C20.822 21.4341 19.3131 22.5064 18.1129 21.7563L13.03 18.5795C12.4 18.1857 11.6005 18.1857 10.9704 18.5795L5.88757 21.7563C4.68738 22.5064 3.17849 21.4341 3.49215 20.054L3.61911 19.4954C4.97508 13.5291 7.36969 7.84773 10.6936 2.71087Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pinavigationhorizontalsolid;
