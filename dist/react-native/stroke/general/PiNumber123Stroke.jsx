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
 * Pinumber123stroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinumber123stroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "number123 icon",
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
      d="M4.99692 15.9998V7.99976C3.96522 8.2524 3.17685 8.96283 2.70898 9.89856M13.6106 15.9998H8.62683V15.179C10.0749 14.1647 11.5589 13.0628 12.7457 11.7334C13.5385 10.8454 13.6262 9.51641 12.7718 8.62388C12.0779 7.89894 10.8778 7.66135 9.95277 8.02111C9.32814 8.26403 8.97253 8.75071 8.62683 9.28961M16.6377 14.5656C16.9834 15.1045 17.339 15.5912 17.9636 15.8341C18.8887 16.1939 20.0887 15.9563 20.7827 15.2314C21.637 14.3388 21.5493 13.0098 20.7566 12.1218L18.1022 11.4998L20.7566 7.99976H16.6377"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pinumber123stroke;
