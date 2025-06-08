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
 * Pisketchstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisketchstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "sketch icon",
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
      d="M17.5198 9.0247L13.3779 18.4429L12 21M17.5198 9.0247H6.48022M17.5198 9.0247H22.4994M17.5198 9.0247L12 3M6.48022 9.0247L10.6221 18.4429L12 21M6.48022 9.0247H1.50062M6.48022 9.0247L12 3M22.4994 9.0247C22.4897 8.6337 22.3661 8.2439 22.1263 7.90788L19.2241 3.84124C18.8473 3.31333 18.2389 3 17.5906 3H12M22.4994 9.0247C22.5114 9.50831 22.3491 9.99376 22.017 10.3815L13.5242 20.2984C13.1237 20.7662 12.5618 21 12 21M1.50062 9.0247C1.48864 9.50831 1.6509 9.99376 1.983 10.3815L10.4758 20.2984C10.8763 20.7661 11.4382 21 12 21M1.50062 9.0247C1.5103 8.6337 1.63388 8.2439 1.87369 7.90788L4.7759 3.84124C5.15266 3.31333 5.76107 3 6.40941 3H12"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pisketchstroke;
