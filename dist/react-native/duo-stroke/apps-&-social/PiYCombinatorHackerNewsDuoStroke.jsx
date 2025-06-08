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
 * Piycombinatorhackernewsduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piycombinatorhackernewsduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "y combinator hacker news icon",
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
      d="M10.4 20H13.6C15.8402 20 16.9603 20 17.816 19.564C18.5686 19.1805 19.1805 18.5686 19.564 17.816C20 16.9603 20 15.8402 20 13.6V10.4C20 8.15979 20 7.03969 19.564 6.18404C19.1805 5.43139 18.5686 4.81947 17.816 4.43597C16.9603 4 15.8402 4 13.6 4H10.4C8.15979 4 7.03969 4 6.18404 4.43597C5.43139 4.81947 4.81947 5.43139 4.43597 6.18404C4 7.03969 4 8.15979 4 10.4V13.6C4 15.8402 4 16.9603 4.43597 17.816C4.81947 18.5686 5.43139 19.1805 6.18404 19.564C7.03969 20 8.15979 20 10.4 20Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M8.5 8L12 13.3467M12 13.3467L15.5 8M12 13.3467V17"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piycombinatorhackernewsduostroke;
