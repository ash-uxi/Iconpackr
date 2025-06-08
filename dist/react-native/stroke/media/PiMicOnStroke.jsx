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
 * Pimiconstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimiconstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "mic on icon",
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
      d="M12 20C7.58172 20 4 16.4183 4 12M12 20C16.4183 20 20 16.4183 20 12M12 20V22M12 16C9.79086 16 8 14.2091 8 12V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V12C16 14.2091 14.2091 16 12 16Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimiconstroke;
