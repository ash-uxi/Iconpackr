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
 * Pipiechart02duostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipiechart02duostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "piechart02 icon",
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
      d="M19.4111 14.8218L13.3101 11.7713C12.9632 11.5979 12.697 11.2968 12.5673 10.9313L10.2861 4.50253C11.0626 4.227 11.8985 4.07703 12.7695 4.07703C16.8696 4.07703 20.1934 7.40084 20.1934 11.501C20.1934 12.6947 19.9117 13.8226 19.4111 14.8218ZM19.4111 14.8218L19.9262 15.0793"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M3.26904 11.5009C3.26904 16.748 7.5226 21.0015 12.7696 21.0015C15.9522 21.0015 18.7693 19.4366 20.4934 17.0343C20.9767 16.3609 20.6677 15.45 19.9263 15.0793L13.3103 11.7713C12.9634 11.5979 12.6972 11.2968 12.5675 10.9313L10.0933 3.95857C9.81624 3.17782 8.95071 2.75958 8.22358 3.15656C5.27159 4.76822 3.26904 7.90072 3.26904 11.5009Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pipiechart02duostroke;
