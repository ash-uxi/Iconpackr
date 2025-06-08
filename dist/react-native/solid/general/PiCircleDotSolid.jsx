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
 * Picircledotsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picircledotsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "circle dot icon",
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
      d="M1.8501 11.9996C1.8501 6.39392 6.39441 1.84961 12.0001 1.84961C17.6058 1.84961 22.1501 6.39392 22.1501 11.9996C22.1501 17.6053 17.6058 22.1496 12.0001 22.1496C6.39441 22.1496 1.8501 17.6053 1.8501 11.9996ZM12 9.9C10.8402 9.9 9.9 10.8402 9.9 12C9.9 13.1598 10.8402 14.1 12 14.1C13.1598 14.1 14.1 13.1598 14.1 12C14.1 10.8402 13.1598 9.9 12 9.9Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Picircledotsolid;
