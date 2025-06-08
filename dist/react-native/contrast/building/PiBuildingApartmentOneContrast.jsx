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
 * Pibuildingapartmentonecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibuildingapartmentonecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "building apartment one icon",
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
    <path d="M10 6h3m-3 4h3m-3 4h3m-3 4h3M9.2 2h4.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C17 3.52 17 4.08 17 5.2v15.2c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C16.24 22 15.96 22 15.4 22H7.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C6 21.24 6 20.96 6 20.4V5.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C7.52 2 8.08 2 9.2 2" />
    <path
      fill={color}
      d="M13.8 2H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 3.52 6 4.08 6 5.2v15.2c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C6.76 22 7.04 22 7.6 22h7.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C17 21.24 17 20.96 17 20.4V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C15.48 2 14.92 2 13.8 2"
      opacity={0.28}
    />
  </Svg>
);

export default Pibuildingapartmentonecontrast;
