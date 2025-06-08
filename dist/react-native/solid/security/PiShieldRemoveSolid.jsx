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
 * Pishieldremovesolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pishieldremovesolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "shield remove icon",
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
      d="M10.5431 1.42748C11.4211 1.11044 12.3823 1.11044 13.2602 1.42748L18.7255 3.40104C20.2053 3.93543 21.2344 5.28772 21.3551 6.85646L21.5821 9.80696C21.9453 14.5291 19.4972 19.0231 15.3328 21.2788L13.8442 22.0852C12.6284 22.7437 11.1588 22.7277 9.95776 22.0429L8.43708 21.1758C4.54899 18.9589 2.21775 14.7625 2.38976 10.2901L2.51702 6.98148C2.57963 5.3536 3.62323 3.92631 5.15548 3.373L10.5431 1.42748ZM8.99951 11C8.44723 11 7.99951 11.4477 7.99951 12C7.99951 12.5523 8.44723 13 8.99951 13H14.9995C15.5518 13 15.9995 12.5523 15.9995 12C15.9995 11.4477 15.5518 11 14.9995 11H8.99951Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pishieldremovesolid;
