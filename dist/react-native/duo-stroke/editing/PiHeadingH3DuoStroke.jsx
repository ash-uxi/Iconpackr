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
 * Piheadingh3duostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piheadingh3duostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "heading h3 icon",
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
      d="M18.7324 14H18M18.7324 14C19.837 14 20.7324 13.1046 20.7324 12C20.7324 10.8954 19.837 10 18.7324 10H17.7324C16.9922 10 16.3458 10.4022 16 11M18.7324 14C19.837 14 20.7324 14.8954 20.7324 16C20.7324 17.1046 19.837 18 18.7324 18H17.7324C16.9922 18 16.3458 17.5978 16 17"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M4 12H12M4 18V6M12 18V6"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piheadingh3duostroke;
