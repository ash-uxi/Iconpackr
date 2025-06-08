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
 * Piceilinglampoffsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piceilinglampoffsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ceiling lamp off icon",
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
      d="M13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V6.04938C5.94668 6.5511 2 10.8147 2 16C2 16.5523 2.44772 17 3 17H8.12602C8.57006 18.7252 10.1362 20 12 20C13.8638 20 15.4299 18.7252 15.874 17H21C21.5523 17 22 16.5523 22 16C22 10.8147 18.0533 6.5511 13 6.04938V4ZM12 18C11.2597 18 10.6134 17.5978 10.2676 17L13.7324 17C13.3866 17.5978 12.7403 18 12 18Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Piceilinglampoffsolid;
