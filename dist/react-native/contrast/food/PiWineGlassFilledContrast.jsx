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
 * Piwineglassfilledcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwineglassfilledcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "wine glass filled icon",
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
      fill={color}
      d="M12 13c3.402 0 5.733-2.444 5.978-5.562C15.942 8.31 14.191 8.966 12 8c-2.12-.934-3.834-.357-5.812.49C6.82 11.09 8.991 13 12 13"
      opacity={0.28}
    />
    <path d="M12 13v9m0-9c3.403 0 5.733-2.444 5.979-5.562M12 13c-3.009 0-5.18-1.911-5.811-4.51M12 22h4m-4 0H8m9.979-14.562a7 7 0 0 0 .021-.55A10 10 0 0 0 16.698 2H7.302A10 10 0 0 0 6 6.889c0 .554.065 1.091.189 1.602m11.79-1.053C15.943 8.31 14.19 8.966 12 8c-2.12-.934-3.834-.357-5.811.49" />
  </Svg>
);

export default Piwineglassfilledcontrast;
