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
 * Pishieldsettingsduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pishieldsettingsduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "shield settings icon",
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
      d="M18 18H18.01M18 14L19.1787 15.1545L20.8284 15.1716L20.8455 16.8213L22 18L20.8455 19.1787L20.8284 20.8284L19.1787 20.8455L18 22L16.8213 20.8455L15.1716 20.8284L15.1545 19.1787L14 18L15.1545 16.8213L15.1716 15.1716L16.8213 15.1545L18 14Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M20.6159 10.9689C20.6237 10.6094 20.6139 10.2472 20.586 9.88366L20.359 6.93316C20.2685 5.7566 19.4967 4.74238 18.3868 4.34159L12.9216 2.36804C12.2631 2.13025 11.5422 2.13025 10.8837 2.36804L5.4961 4.31356C4.34691 4.72854 3.56421 5.799 3.51725 7.01992L3.39 10.3285C3.23232 14.4282 5.36929 18.2749 8.93337 20.3071L10.454 21.1741C10.6975 21.3129 10.9556 21.4151 11.2207 21.4805"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pishieldsettingsduostroke;
