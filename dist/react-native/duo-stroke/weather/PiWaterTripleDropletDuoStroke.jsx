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
 * Piwatertripledropletduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwatertripledropletduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "water triple droplet icon",
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
      d="M12 2.05615C18.262 7.75915 14.752 11.3892 12 11.3892C9.24803 11.3892 5.73803 7.75915 12 2.05615Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M6.00003 12.2661C12.262 17.9691 8.75203 21.5991 6.00003 21.5991C3.24803 21.5991 -0.261971 17.9691 6.00003 12.2661ZM18 12.2661C24.262 17.9691 20.752 21.5991 18 21.5991C15.248 21.5991 11.738 17.9691 18 12.2661Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piwatertripledropletduostroke;
