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
 * Pidividedefaultduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidividedefaultduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "divide default icon",
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
    <g opacity={0.28} fill="none">
      <path
        d="M13.0015 17.0015C13.0015 17.5546 12.5531 18.0029 12 18.0029C11.4469 18.0029 10.9985 17.5546 10.9985 17.0015C10.9985 16.4484 11.4469 16 12 16C12.5531 16 13.0015 16.4484 13.0015 17.0015Z"
        stroke={color || "#000"}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M13.0015 6.99854C13.0015 7.55163 12.5531 8 12 8C11.4469 8 10.9985 7.55163 10.9985 6.99854C10.9985 6.44544 11.4469 5.99707 12 5.99707C12.5531 5.99707 13.0015 6.44544 13.0015 6.99854Z"
        stroke={color || "#000"}
        strokeWidth="2"
        fill="none"
      />
    </g>
    <path d="M5 12H19" stroke={color || "#000"} strokeWidth="2" fill="none" />
  </Svg>
);

export default Pidividedefaultduostroke;
