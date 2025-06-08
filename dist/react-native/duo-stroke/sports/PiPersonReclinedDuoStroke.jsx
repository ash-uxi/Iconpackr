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
 * Pipersonreclinedduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipersonreclinedduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "person reclined icon",
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
      d="M14.9822 18.4745L14.1439 18.9075C11.7712 20.1329 8.85442 19.2776 7.51926 16.9649L4.07568 11.0002"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M6.83691 8.63477L10.3671 14.7492C10.9194 15.7058 12.1425 16.0335 13.0991 15.4812L15.5933 14.0412C16.0221 13.7936 16.5676 13.8971 16.8758 14.2846L20.303 18.5918"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M7.83691 4.64697C7.83691 5.19926 7.3892 5.64697 6.83691 5.64697C6.28463 5.64697 5.83691 5.19926 5.83691 4.64697C5.83691 4.09469 6.28463 3.64697 6.83691 3.64697C7.3892 3.64697 7.83691 4.09469 7.83691 4.64697Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pipersonreclinedduostroke;
