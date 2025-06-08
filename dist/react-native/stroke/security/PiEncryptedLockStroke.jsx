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
 * Piencryptedlockstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piencryptedlockstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "encrypted lock icon",
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
      d="M16 9V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V9M5 13H13M5 17H11M5 21H9M16 13H19M14 17H19M12 21H19"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piencryptedlockstroke;
