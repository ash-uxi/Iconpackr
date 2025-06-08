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
 * Pimotioneaseinoutsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimotioneaseinoutsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "motion ease in out icon",
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
      d="M11.963 2H12.037C13.403 2 14.48 2 15.351 2.06C16.239 2.12 16.985 2.246 17.679 2.533C19.394 3.24345 20.7565 4.60602 21.467 6.321C21.754 7.015 21.88 7.761 21.941 8.649C22 9.519 22 10.597 22 11.963V12.037C22 13.403 22 14.48 21.94 15.351C21.88 16.239 21.754 16.985 21.467 17.679C20.7565 19.394 19.394 20.7565 17.679 21.467C16.985 21.754 16.239 21.88 15.351 21.941C14.481 22 13.403 22 12.037 22H11.963C10.597 22 9.52 22 8.649 21.94C7.761 21.88 7.015 21.754 6.321 21.467C4.60602 20.7565 3.24345 19.394 2.533 17.679C2.246 16.985 2.12 16.239 2.059 15.351C2 14.481 2 13.403 2 12.037V11.963C2 10.597 2 9.52 2.06 8.649C2.12 7.761 2.246 7.015 2.533 6.321C3.24322 4.6062 4.60539 3.24367 6.32 2.533C7.014 2.246 7.76 2.12 8.648 2.059C9.519 2 10.597 2 11.963 2ZM17 6C14.96 6 13.596 6.754 12.675 7.954C11.844 9.039 11.424 10.439 11.068 11.626L11.042 11.713C10.654 13.008 10.323 14.065 9.738 14.829C9.22 15.504 8.46 16 7 16C6.73478 16 6.48043 16.1054 6.29289 16.2929C6.10536 16.4804 6 16.7348 6 17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18C9.04 18 10.404 17.247 11.325 16.046C12.156 14.961 12.576 13.561 12.932 12.374L12.958 12.287C13.346 10.992 13.677 9.935 14.262 9.171C14.78 8.496 15.54 8 17 8C17.2652 8 17.5196 7.89464 17.7071 7.70711C17.8946 7.51957 18 7.26522 18 7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pimotioneaseinoutsolid;
