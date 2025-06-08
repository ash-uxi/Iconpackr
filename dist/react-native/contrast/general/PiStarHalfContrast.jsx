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
 * Pistarhalfcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pistarhalfcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "star half icon",
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
    <path d="M6.711 8.019c-1.938.255-2.907.383-3.382.807-.554.495-.799 1.249-.642 1.975.135.621.844 1.294 2.262 2.64.42.4.63.599.773.833.167.275.268.585.294.906.023.273-.03.558-.136 1.128-.356 1.922-.534 2.884-.277 3.465.3.68.941 1.146 1.68 1.221.633.064 1.492-.402 3.21-1.335.51-.276.764-.414 1.03-.478q.236-.055.477-.055V3c-.359 0-.717.093-1.038.28-.55.32-.97 1.203-1.813 2.967-.25.523-.374.785-.553.993-.21.244-.473.436-.77.56-.253.105-.54.143-1.115.219" />
    <path
      fill={color}
      d="M6.711 8.019c-1.938.255-2.907.383-3.382.807-.554.495-.799 1.249-.642 1.975.135.621.844 1.294 2.262 2.64.42.4.63.599.773.833.167.275.268.585.294.906.023.273-.03.558-.136 1.128-.356 1.922-.534 2.884-.277 3.465.3.68.941 1.146 1.68 1.221.633.064 1.492-.402 3.21-1.335.51-.276.764-.414 1.03-.478q.236-.055.477-.055V3c-.359 0-.717.093-1.038.28-.55.32-.97 1.203-1.813 2.967-.25.523-.374.785-.553.993-.21.244-.473.436-.77.56-.253.105-.54.143-1.115.219"
      opacity={0.28}
    />
  </Svg>
);

export default Pistarhalfcontrast;
