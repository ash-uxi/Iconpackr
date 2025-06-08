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
 * Pigitlabduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigitlabduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "gitlab icon",
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
      d="M20.7964 8.79734L18.8244 2.9327C18.6324 2.36156 17.8398 2.35953 17.6449 2.92967L15.8823 8.08656C15.7369 8.51213 15.3428 8.79734 14.9002 8.79734H9.09951C8.65695 8.79734 8.26289 8.51214 8.11742 8.08657L6.35368 2.92646C6.15892 2.35666 5.36694 2.35825 5.17438 2.92882L3.19385 8.79734"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M8.11751 8.08657L6.35376 2.92646C6.159 2.35666 5.36702 2.35825 5.17446 2.92882L2.78248 10.0165C2.07313 12.1184 2.72872 14.4476 4.42379 15.8479L10.6931 21.0269C11.4552 21.6564 12.5458 21.6579 13.3095 21.0303L19.5657 15.8895C21.2665 14.492 21.9273 12.1606 21.2194 10.0552L18.8245 2.9327C18.6325 2.36156 17.8399 2.35953 17.645 2.92967L15.8824 8.08656C15.7369 8.51213 15.3429 8.79734 14.9003 8.79734H9.09959C8.65703 8.79734 8.26297 8.51214 8.11751 8.08657Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pigitlabduostroke;
