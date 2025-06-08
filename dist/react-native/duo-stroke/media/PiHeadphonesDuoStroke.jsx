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
 * Piheadphonesduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piheadphonesduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "headphones icon",
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
      d="M19.9443 19.2768L20.9931 15.6194C21.3551 14.3569 20.6251 13.04 19.3626 12.678C18.1002 12.316 16.7833 13.046 16.4213 14.3084L15.3725 17.9659C15.0105 19.2284 15.7405 20.5453 17.0029 20.9073C18.2654 21.2693 19.5823 20.5393 19.9443 19.2768Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M3.02414 15.6689C2.67674 14.6811 2.48779 13.6187 2.48779 12.5121C2.48779 7.25872 6.74651 3 11.9999 3C17.2533 3 21.512 7.25872 21.512 12.5121C21.512 13.6079 21.3267 14.6604 20.9858 15.6401"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M8.62737 17.9658L7.57861 14.3084C7.21661 13.0459 5.8997 12.3159 4.63723 12.6779C3.37476 13.0399 2.64479 14.3568 3.0068 15.6193L4.05555 19.2768C4.41756 20.5392 5.73446 21.2692 6.99694 20.9072C8.25941 20.5452 8.98938 19.2283 8.62737 17.9658Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piheadphonesduostroke;
