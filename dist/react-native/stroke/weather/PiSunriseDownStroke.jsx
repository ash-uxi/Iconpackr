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
 * Pisunrisedownstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisunrisedownstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "sunrise down icon",
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
      d="M16.0036 20.9957C16.6293 20.1607 17 19.1237 17 18C17 15.2386 14.7614 13 12 13C9.23858 13 7 15.2386 7 18C7 19.1205 7.36861 20.155 7.99118 20.9887M16.0036 20.9957L7.99118 20.9887M16.0036 20.9957L21 21M7.99118 20.9887L2.99973 20.9844M9.55664 6.71035C10.1595 7.51421 10.8589 8.24015 11.6387 8.87203C11.7442 8.95749 11.8721 9.00022 12 9.00022M14.4434 6.71035C13.8405 7.51421 13.1411 8.24015 12.3613 8.87203C12.2558 8.95748 12.1279 9.00022 12 9.00022M12 9.00022V3M2 17H3M21 17H22M4.47234 10.4221L5.22544 11.08M19.5343 10.4219L18.7812 11.0798"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pisunrisedownstroke;
