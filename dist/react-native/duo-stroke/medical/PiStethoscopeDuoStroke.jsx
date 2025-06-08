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
 * Pistethoscopeduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pistethoscopeduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "stethoscope icon",
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
      d="M10.5 3.01172C11.8807 3.01172 13 4.13101 13 5.51172V7.19607C13 9.01538 12.3622 10.7771 11.1975 12.1748L10.9517 12.4697C10.1837 13.3913 9.09183 13.8522 8 13.8522M5.5 3.01172C4.11929 3.01172 3 4.13101 3 5.51172V7.19607C3 9.01538 3.63784 10.7771 4.80253 12.1748L5.04828 12.4697C5.81634 13.3913 6.90817 13.8522 8 13.8522M19 14.0117C20.3807 14.0117 21.5 12.8924 21.5 11.5117C21.5 10.131 20.3807 9.01172 19 9.01172C17.6193 9.01172 16.5 10.131 16.5 11.5117C16.5 12.8924 17.6193 14.0117 19 14.0117ZM19 14.0117V15.5117C19 18.5493 16.5376 21.0117 13.5 21.0117C10.4624 21.0117 8 18.5493 8 15.5117V13.8522"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M12.5 4.01148C12.0439 3.40439 11.3178 3.01172 10.5 3.01172M3.5 4.01148C3.95611 3.40439 4.6822 3.01172 5.5 3.01172"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M21.5 11.5117C21.5 12.8924 20.3807 14.0117 19 14.0117C17.6193 14.0117 16.5 12.8924 16.5 11.5117C16.5 10.131 17.6193 9.01172 19 9.01172C20.3807 9.01172 21.5 10.131 21.5 11.5117Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pistethoscopeduostroke;
