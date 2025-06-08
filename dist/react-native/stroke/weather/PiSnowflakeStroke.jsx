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
 * Pisnowflakestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisnowflakestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "snowflake icon",
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
      d="M9.00028 3L12.0003 6M12.0003 6L15.0003 3M12.0003 6V12M15.0003 21L12.0003 18M12.0003 18L9.00028 21M12.0003 18V12M12.0003 12L17.1964 9M12.0003 12L6.80413 15M12.0003 12L6.80413 9.00005M12.0003 12L17.1964 15.0001M18.2945 4.90192L17.1964 9M17.1964 9L21.2945 10.0981M5.70605 19.0981L6.80413 15M6.80413 15L2.70605 13.9019M2.70605 10.0981L6.80413 9.00005M6.80413 9.00005L5.70605 4.90198M21.2945 13.902L17.1964 15.0001M17.1964 15.0001L18.2945 19.0981"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pisnowflakestroke;
