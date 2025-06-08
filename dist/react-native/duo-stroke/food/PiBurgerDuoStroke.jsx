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
 * Piburgerduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piburgerduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "burger icon",
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
        d="M3 8.75651C3 2.4145 21 2.4145 21 8.7565C21 9.44327 20.3907 10 19.6391 10H4.36095C3.60932 10 3 9.44327 3 8.75651Z"
        stroke={color || "#000"}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M3 17.6C3 18.9255 4.07452 20 5.4 20H18.6C19.9255 20 21 18.9255 21 17.6C21 17.2686 20.7314 17 20.4 17H3.6C3.26863 17 3 17.2686 3 17.6Z"
        stroke={color || "#000"}
        strokeWidth="2"
        fill="none"
      />
    </g>
    <path
      d="M20.3332 13.5C19.3857 14.1667 17.9473 14.1667 16.9998 13.5C16.0523 12.8333 14.614 12.8333 13.6665 13.5C12.719 14.1667 11.2807 14.1667 10.3332 13.5C9.38567 12.8333 7.94733 12.8333 6.99984 13.5C6.05234 14.1667 4.614 14.1667 3.6665 13.5"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piburgerduostroke;
