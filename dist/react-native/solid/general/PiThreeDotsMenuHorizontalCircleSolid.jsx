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
 * Pithreedotsmenuhorizontalcirclesolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pithreedotsmenuhorizontalcirclesolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "three dots menu horizontal circle icon",
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
      d="M1.8501 11.9996C1.8501 6.39392 6.39441 1.84961 12.0001 1.84961C17.6058 1.84961 22.1501 6.39392 22.1501 11.9996C22.1501 17.6053 17.6058 22.1496 12.0001 22.1496C6.39441 22.1496 1.8501 17.6053 1.8501 11.9996ZM8 10.9C7.39249 10.9 6.9 11.3925 6.9 12C6.9 12.6075 7.39249 13.1 8 13.1H8.01C8.61751 13.1 9.11 12.6075 9.11 12C9.11 11.3925 8.61751 10.9 8.01 10.9H8ZM12 10.9C11.3925 10.9 10.9 11.3925 10.9 12C10.9 12.6075 11.3925 13.1 12 13.1H12.01C12.6175 13.1 13.11 12.6075 13.11 12C13.11 11.3925 12.6175 10.9 12.01 10.9H12ZM16 10.9C15.3925 10.9 14.9 11.3925 14.9 12C14.9 12.6075 15.3925 13.1 16 13.1H16.01C16.6175 13.1 17.11 12.6075 17.11 12C17.11 11.3925 16.6175 10.9 16.01 10.9H16Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pithreedotsmenuhorizontalcirclesolid;
