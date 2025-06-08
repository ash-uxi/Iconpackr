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
 * Piinformationtrianglestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piinformationtrianglestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "information triangle icon",
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
      d="M12 12.3761V16.3761M12 9.00112V9M10.6101 3.28373C11.4989 2.90542 12.5011 2.90542 13.3899 3.28373C16.0413 4.41217 22.3045 14.4218 22.1211 17.0972C22.0491 18.1459 21.5294 19.1112 20.6973 19.7421C18.4845 21.4193 5.51548 21.4193 3.30278 19.7421C2.47058 19.1112 1.9509 18.1459 1.87895 17.0972C1.69539 14.4218 7.95863 4.41217 10.6101 3.28373Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piinformationtrianglestroke;
