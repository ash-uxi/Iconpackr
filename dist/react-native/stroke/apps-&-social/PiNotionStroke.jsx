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
 * Pinotionstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinotionstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "notion icon",
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
      d="M10.8851 17.4V10.6056C10.8851 10.481 10.8851 10.4187 10.9085 10.393C10.9287 10.3707 10.9588 10.36 10.9886 10.3645C11.023 10.3697 11.0622 10.4181 11.1408 10.5148L16.4793 17.0852C16.5578 17.1819 16.5971 17.2303 16.6315 17.2355C16.6613 17.24 16.6914 17.2293 16.7116 17.207C16.7351 17.1813 16.7351 17.119 16.7351 16.9944V10.2M20.2945 8.0595C19.9644 7.61312 19.5338 7.24686 19.0344 6.99238C18.2643 6.6 17.2562 6.6 15.24 6.6H12.36C10.3438 6.6 9.33572 6.6 8.56563 6.99238C7.88825 7.33752 7.33752 7.88825 6.99238 8.56563C6.6 9.33572 6.6 10.3438 6.6 12.36V15.24C6.6 17.2562 6.6 18.2643 6.99238 19.0344C7.1995 19.4409 7.48067 19.8018 7.81882 20.1M20.2945 8.0595C20.4121 8.21852 20.517 8.38771 20.6076 8.56563C21 9.33572 21 10.3438 21 12.36V15.24C21 17.2562 21 18.2643 20.6076 19.0344C20.2625 19.7117 19.7117 20.2625 19.0344 20.6076C18.2643 21 17.2562 21 15.24 21H12.36C10.3438 21 9.33572 21 8.56563 20.6076C8.29476 20.4696 8.04414 20.2987 7.81882 20.1M20.2945 8.0595L17.6829 4.58444C17.3429 4.08131 16.8797 3.67023 16.3344 3.39238C15.5643 3 14.5562 3 12.54 3H8.76C6.74381 3 5.73572 3 4.96563 3.39238C4.28825 3.73752 3.73752 4.28825 3.39238 4.96563C3 5.73572 3 6.74381 3 8.76V12.54C3 14.5562 3 15.5643 3.39238 16.3344C3.65464 16.8491 4.0356 17.2907 4.50063 17.6245L7.81882 20.1"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pinotionstroke;
