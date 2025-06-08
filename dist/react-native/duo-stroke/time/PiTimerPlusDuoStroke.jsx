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
 * Pitimerplusduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitimerplusduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "timer plus icon",
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
      d="M12 16.9999V13.9999M12 13.9999V10.9999M12 13.9999H9M12 13.9999H15M19.3662 5.32178L20.4269 6.38244"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M12 2V6M12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6ZM10 2H14"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pitimerplusduostroke;
