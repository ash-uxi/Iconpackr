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
 * Pimetastroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimetastroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "meta icon",
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
      d="M12 10.1061C13.8317 7.21854 15.1115 5.77686 16.8208 5.77686C22.3718 5.77686 23.4752 18.2231 18.8952 18.2231C15.9235 18.2231 13.1149 12.4055 12 10.1061ZM12 10.1061C10.1683 7.21854 8.88845 5.77686 7.17917 5.77686C1.62816 5.77686 0.524796 18.2231 5.10481 18.2231C8.07071 18.2231 10.8957 12.4091 12 10.1061Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimetastroke;
