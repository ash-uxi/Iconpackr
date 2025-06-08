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
 * Pitimeroffduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitimeroffduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "timer off icon",
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
      d="M12 2V6M12 2H10M12 2H14M12 6C7.58172 6 4 9.58172 4 14C4 15.6983 4.52921 17.2731 5.43173 18.5683M12 6C13.6983 6 15.2731 6.52921 16.5683 7.43173M19.1819 10.4717C19.7058 11.536 20 12.7336 20 14C20 18.4183 16.4183 22 12 22C10.7336 22 9.53596 21.7057 8.47167 21.1819"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path d="M22 2L2 22" stroke={color || "#000"} strokeWidth="2" fill="none" />
  </Svg>
);

export default Pitimeroffduostroke;
