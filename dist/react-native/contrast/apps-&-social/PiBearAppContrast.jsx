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
 * Pibearappcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibearappcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bear app icon",
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
      d="M10.965 4.236c-.363-.589-1.858-1.472-2.605-1.177-.629.247-.567 1.087-.567 2.378C6.661 7 6.34 7.181 5.505 9.04 4.357 11.599 3.15 14.702 2.425 21h15.404c-.929-1.903-2.288-3.013-3.104-6.366-.576-2.37 2.832-1.835 4.1-2.31 1.677-.629 2.52-1.971 2.674-2.923.302-1.88-.34-1.506-1.088-1.63-1.087-.182-3.058-1.179-4.576-2.674-1.036-1.02-2.65-1.042-4.87-.86"
      opacity={0.28}
    />
    <path d="M10.965 4.236c-.363-.589-1.858-1.472-2.605-1.177-.629.247-.567 1.087-.567 2.378C6.661 7 6.34 7.181 5.505 9.04 4.357 11.599 3.15 14.702 2.425 21h15.404c-.929-1.903-2.288-3.013-3.104-6.366-.576-2.37 2.832-1.835 4.1-2.31 1.677-.629 2.52-1.971 2.674-2.923.302-1.88-.34-1.506-1.088-1.63-1.087-.182-3.058-1.179-4.576-2.674-1.036-1.02-2.65-1.042-4.87-.86" />
  </Svg>
);

export default Pibearappcontrast;
