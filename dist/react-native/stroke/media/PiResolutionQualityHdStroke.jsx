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
 * Piresolutionqualityhdstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piresolutionqualityhdstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "resolution quality hd icon",
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
      d="M6.75426 8.75V12.25M6.75426 12.25H10.2543M6.75426 12.25V15.25M10.2543 12.25V8.75M10.2543 12.25V15.25M9.4 20H14.6C16.8402 20 17.9603 20 18.816 19.564C19.5686 19.1805 20.1805 18.5686 20.564 17.816C21 16.9603 21 15.8402 21 13.6V10.4C21 8.15979 21 7.03968 20.564 6.18404C20.1805 5.43139 19.5686 4.81947 18.816 4.43597C17.9603 4 16.8402 4 14.6 4H9.4C7.15979 4 6.03968 4 5.18404 4.43597C4.43139 4.81947 3.81947 5.43139 3.43597 6.18404C3 7.03968 3 8.15979 3 10.4V13.6C3 15.8402 3 16.9603 3.43597 17.816C3.81947 18.5686 4.43139 19.1805 5.18404 19.564C6.03968 20 7.15979 20 9.4 20ZM13.7541 8.75H14.0541C15.1742 8.75 15.7343 8.75 16.1621 8.96799C16.5384 9.15973 16.8444 9.46569 17.0361 9.84202C17.2541 10.2698 17.2541 10.8299 17.2541 11.95V12.05C17.2541 13.1701 17.2541 13.7302 17.0361 14.158C16.8444 14.5343 16.5384 14.8403 16.1621 15.032C15.7343 15.25 15.1742 15.25 14.0541 15.25H13.7541V8.75Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piresolutionqualityhdstroke;
