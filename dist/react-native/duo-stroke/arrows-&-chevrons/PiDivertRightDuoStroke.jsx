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
 * Pidivertrightduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidivertrightduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "divert right icon",
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
      d="M15 8.28858C16.7786 7.99076 18.5759 7.92321 20.3472 8.08707C20.4991 8.10113 20.6335 8.16659 20.7335 8.26652C20.8334 8.36646 20.8989 8.50086 20.9129 8.65281C21.0768 10.4241 21.0092 12.2214 20.7114 14"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M2 9L8.8787 15.8787C10.0503 17.0503 11.9497 17.0503 13.1213 15.8787L20.7051 8.29492"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pidivertrightduostroke;
