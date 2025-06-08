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
 * Pifilterfunnelduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifilterfunnelduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "filter funnel icon",
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
      d="M14.2929 12.7071L19.7071 7.29289C19.8946 7.10536 20 6.851 20 6.58579V4H4V6.58579C4 6.851 4.10536 7.10536 4.29289 7.29289L9.70711 12.7071"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M20 4H4V6.58579C4 6.851 4.10536 7.10536 4.29289 7.29289L9.70711 12.7071C9.89464 12.8946 10 13.149 10 13.4142V18L14 21V13.4142C14 13.149 14.1054 12.8946 14.2929 12.7071L19.7071 7.29289C19.8946 7.10536 20 6.851 20 6.58579V4Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pifilterfunnelduostroke;
