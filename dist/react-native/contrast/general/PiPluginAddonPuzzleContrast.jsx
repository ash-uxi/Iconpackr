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
 * Pipluginaddonpuzzlecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipluginaddonpuzzlecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "plugin addon puzzle icon",
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
      fill={color}
      d="M12.816 5.444a2.5 2.5 0 1 0-4.631 0c.091.224.137.336.125.396a.18.18 0 0 1-.085.126C8.175 6 8.069 6 7.859 6H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 8.28 3 9.12 3 10.8v.7a2.5 2.5 0 1 1 0 4v.7c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21h5.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C18 18.72 18 17.88 18 16.2v-.56c0-.21 0-.314.034-.365a.18.18 0 0 1 .126-.085c.06-.012.172.034.396.126a2.5 2.5 0 1 0-.391-4.43c-.07.044-.165-.004-.165-.086 0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C15.72 6 14.88 6 13.2 6h-.06c-.21 0-.314 0-.365-.034a.18.18 0 0 1-.085-.126c-.012-.06.034-.172.126-.396"
      opacity={0.28}
    />
    <path d="M12.816 5.444a2.5 2.5 0 1 0-4.631 0c.091.224.137.336.125.396a.18.18 0 0 1-.085.126C8.175 6 8.069 6 7.859 6H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 8.28 3 9.12 3 10.8v.7a2.5 2.5 0 1 1 0 4v.7c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21h5.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C18 18.72 18 17.88 18 16.2v-.56c0-.21 0-.314.034-.365a.18.18 0 0 1 .126-.085c.06-.012.172.034.396.126a2.5 2.5 0 1 0-.391-4.43c-.07.044-.165-.004-.165-.086 0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C15.72 6 14.88 6 13.2 6h-.06c-.21 0-.314 0-.365-.034a.18.18 0 0 1-.085-.126c-.012-.06.034-.172.126-.396" />
  </Svg>
);

export default Pipluginaddonpuzzlecontrast;
