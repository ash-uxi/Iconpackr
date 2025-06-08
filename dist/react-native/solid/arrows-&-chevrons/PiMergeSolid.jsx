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
 * Pimergesolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimergesolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "merge icon",
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
      d="M12 3C11.6278 3 11.2615 3.12916 10.9648 3.37562C9.54246 4.55712 8.27228 5.9268 7.18584 7.45028C6.95979 7.76726 6.93826 8.18664 7.13067 8.5251C7.32309 8.86357 7.69445 9.05959 8.08246 9.02749L10.1039 8.86027C10.4023 8.83559 10.701 8.81674 11 8.80373V12.6301L5.24076 19.3492C4.88134 19.7685 4.9299 20.3998 5.34923 20.7593C5.76855 21.1187 6.39985 21.0701 6.75927 20.6508L12.7593 13.6508C12.9146 13.4695 13 13.2387 13 13V8.80373C13.299 8.81674 13.5978 8.83559 13.8962 8.86027L15.9176 9.02749C16.3056 9.05959 16.677 8.86357 16.8694 8.5251C17.0618 8.18664 17.0402 7.76726 16.8142 7.45028C15.7278 5.9268 14.4576 4.55712 13.0352 3.37562C12.7385 3.12916 12.3722 3 12 3Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M15.3307 15.3492C14.9713 14.9299 14.34 14.8813 13.9207 15.2407C13.5013 15.6002 13.4528 16.2315 13.8122 16.6508L17.2408 20.6508C17.6002 21.0701 18.2315 21.1187 18.6508 20.7593C19.0701 20.3998 19.1187 19.7685 18.7593 19.3492L15.3307 15.3492Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pimergesolid;
