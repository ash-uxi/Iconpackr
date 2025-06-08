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
 * Pipeoplemaleduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipeoplemaleduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "people male icon",
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
      d="M11.3839 9.04688C10.2015 9.0471 9.05748 9.46633 8.15492 10.2301C7.25236 10.9939 6.64967 12.0528 6.45387 13.2189L6.01387 15.8339C5.98974 15.9772 5.99716 16.1241 6.03559 16.2643C6.07402 16.4045 6.14256 16.5346 6.23642 16.6456C6.33027 16.7566 6.4472 16.8458 6.57906 16.907C6.71091 16.9681 6.85452 16.9999 6.99987 16.9999H8.15287L8.68487 20.1909C8.81473 20.9763 9.21927 21.6902 9.82639 22.2051C10.4335 22.7201 11.2038 23.0028 11.9999 23.0028C12.796 23.0028 13.5662 22.7201 14.1734 22.2051C14.7805 21.6902 15.185 20.9763 15.3149 20.1909L15.8439 17.0199L16.9719 17.0469C17.119 17.0503 17.2652 17.0213 17.3998 16.9618C17.5344 16.9022 17.6543 16.8137 17.7508 16.7025C17.8472 16.5913 17.918 16.4602 17.9579 16.3185C17.9979 16.1768 18.0061 16.0281 17.9819 15.8829L17.5419 13.2279C17.3479 12.0597 16.7456 10.9982 15.8422 10.2326C14.9389 9.46693 13.7931 9.04675 12.6089 9.04688H11.3839Z"
      fill={color || "#000"}
      fillRule="evenodd"
      clipRule="evenodd"
    />{" "}
    <path
      d="M12 1.03394C11.5404 1.03394 11.0852 1.12447 10.6606 1.30036C10.236 1.47625 9.85013 1.73406 9.52513 2.05906C9.20012 2.38407 8.94231 2.7699 8.76642 3.19454C8.59053 3.61918 8.5 4.07431 8.5 4.53394C8.5 4.99356 8.59053 5.44869 8.76642 5.87333C8.94231 6.29797 9.20012 6.6838 9.52513 7.00881C9.85013 7.33381 10.236 7.59162 10.6606 7.76751C11.0852 7.94341 11.5404 8.03394 12 8.03394C12.9283 8.03394 13.8185 7.66519 14.4749 7.00881C15.1313 6.35243 15.5 5.46219 15.5 4.53394C15.5 3.60568 15.1313 2.71544 14.4749 2.05906C13.8185 1.40268 12.9283 1.03394 12 1.03394Z"
      fill={color || "#000"}
      opacity={0.28}
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </Svg>
);

export default Pipeoplemaleduosolid;
