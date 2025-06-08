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
 * Pivoicerecordingsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivoicerecordingsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "voice recording icon",
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
      d="M11.1501 11.8502C11.1501 13.0367 10.7489 14.1294 10.0747 15.0002H13.9255C13.2513 14.1294 12.8501 13.0367 12.8501 11.8502C12.8501 9.00593 15.1558 6.7002 18.0001 6.7002C20.8444 6.7002 23.1501 9.00593 23.1501 11.8502C23.1501 14.6945 20.8444 17.0002 18.0001 17.0002H6.0001C3.15583 17.0002 0.850098 14.6945 0.850098 11.8502C0.850098 9.00593 3.15583 6.7002 6.0001 6.7002C8.84436 6.7002 11.1501 9.00593 11.1501 11.8502Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pivoicerecordingsolid;
