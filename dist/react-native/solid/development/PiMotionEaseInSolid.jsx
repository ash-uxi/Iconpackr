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
 * Pimotioneaseinsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimotioneaseinsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "motion ease in icon",
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
      d="M11.963 2H12.037C13.403 2 14.48 2 15.351 2.06C16.239 2.12 16.985 2.246 17.679 2.533C19.394 3.24345 20.7565 4.60602 21.467 6.321C21.754 7.015 21.88 7.761 21.941 8.649C22 9.519 22 10.597 22 11.963V12.037C22 13.403 22 14.48 21.94 15.351C21.88 16.239 21.754 16.985 21.467 17.679C20.7565 19.394 19.394 20.7565 17.679 21.467C16.985 21.754 16.239 21.88 15.351 21.941C14.481 22 13.403 22 12.037 22H11.963C10.597 22 9.52 22 8.649 21.94C7.761 21.88 7.015 21.754 6.321 21.467C4.60602 20.7565 3.24345 19.394 2.533 17.679C2.246 16.985 2.12 16.239 2.059 15.351C2 14.481 2 13.403 2 12.037V11.963C2 10.597 2 9.52 2.06 8.649C2.12 7.761 2.246 7.015 2.533 6.321C3.24322 4.6062 4.60539 3.24367 6.32 2.533C7.014 2.246 7.76 2.12 8.648 2.059C9.519 2 10.597 2 11.963 2ZM7 18C11.023 18 13.785 15.128 15.463 12.545C16.1963 11.4042 16.8262 10.2 17.345 8.947C17.554 8.44518 17.7445 7.93584 17.916 7.42C17.9329 7.36594 17.958 7.287 17.958 7.287C18.0343 7.03292 18.0064 6.75896 17.8807 6.52538C17.755 6.29181 17.5416 6.11775 17.2875 6.0415C17.0334 5.96525 16.7595 5.99306 16.5259 6.1188C16.2923 6.24454 16.1182 6.45792 16.042 6.712V6.715L16.036 6.731L16.013 6.805C15.8584 7.26876 15.687 7.72673 15.499 8.178C15.124 9.078 14.557 10.27 13.787 11.455C12.215 13.872 9.977 16 7 16C6.73478 16 6.48043 16.1054 6.29289 16.2929C6.10536 16.4804 6 16.7348 6 17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pimotioneaseinsolid;
