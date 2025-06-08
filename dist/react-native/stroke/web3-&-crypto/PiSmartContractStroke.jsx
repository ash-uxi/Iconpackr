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
 * Pismartcontractstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pismartcontractstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "smart contract icon",
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
      d="M8 8H16M8 12H13M12 21H9.4C7.15979 21 6.03969 21 5.18404 20.564C4.43139 20.1805 3.81947 19.5686 3.43597 18.816C3 17.9603 3 16.8402 3 14.6V9.4C3 7.15979 3 6.03969 3.43597 5.18404C3.81947 4.43139 4.43139 3.81947 5.18404 3.43597C6.03969 3 7.15979 3 9.4 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V11M15.72 18.96L16.72 20.2933C17.1542 20.8723 17.3714 21.1618 17.6375 21.2653C17.8707 21.356 18.1293 21.356 18.3625 21.2653C18.6286 21.1618 18.8458 20.8723 19.28 20.2933L20.28 18.96C20.5382 18.6157 20.6673 18.4436 20.7171 18.2546C20.761 18.0877 20.761 17.9123 20.7171 17.7454C20.6673 17.5564 20.5382 17.3843 20.28 17.04L19.28 15.7067C18.8458 15.1277 18.6286 14.8382 18.3625 14.7347C18.1293 14.644 17.8707 14.644 17.6375 14.7347C17.3714 14.8382 17.1542 15.1277 16.72 15.7067L15.72 17.04C15.4618 17.3843 15.3327 17.5564 15.2829 17.7454C15.239 17.9123 15.239 18.0877 15.2829 18.2546C15.3327 18.4436 15.4618 18.6157 15.72 18.96Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pismartcontractstroke;
