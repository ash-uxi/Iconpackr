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
 * Pilayeronestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilayeronestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "layer one icon",
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
      d="M4.29927 13.0814C3.56321 12.7334 3.19518 12.5593 3.07708 12.3238C2.97431 12.1189 2.97431 11.8811 3.07708 11.6762C3.19518 11.4407 3.56321 11.2666 4.29927 10.9186L10.5707 7.95291C11.0948 7.70508 11.3568 7.58117 11.6317 7.5324C11.8751 7.4892 12.1249 7.4892 12.3683 7.5324C12.6432 7.58117 12.9052 7.70508 13.4293 7.95291L19.7007 10.9186C20.4368 11.2666 20.8048 11.4407 20.9229 11.6762C21.0257 11.8811 21.0257 12.1189 20.9229 12.3238C20.8048 12.5593 20.4368 12.7334 19.7007 13.0814L13.4293 16.0471C12.9052 16.2949 12.6432 16.4188 12.3683 16.4676C12.1249 16.5108 11.8751 16.5108 11.6317 16.4676C11.3568 16.4188 11.0948 16.2949 10.5707 16.0471L4.29927 13.0814Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pilayeronestroke;
