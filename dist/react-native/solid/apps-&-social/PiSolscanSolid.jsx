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
 * Pisolscansolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisolscansolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "solscan icon",
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
      d="M6.71401 5.79635C10.1401 2.87709 15.284 3.28794 18.2033 6.71401C20.5145 9.42653 20.7395 13.2181 19.0291 16.1293C18.7493 16.6055 18.9085 17.2183 19.3847 17.498C19.8609 17.7778 20.4737 17.6186 20.7535 17.1424C22.8821 13.5194 22.6063 8.79771 19.7256 5.41689C16.0899 1.15006 9.68372 0.638382 5.41689 4.27403C1.15006 7.90967 0.638382 14.3159 4.27403 18.5827C7.15468 21.9635 11.7727 22.9853 15.6875 21.4589C16.2021 21.2582 16.4566 20.6785 16.2559 20.1639C16.0553 19.6494 15.4755 19.3949 14.961 19.5955C11.8152 20.822 8.10756 19.9981 5.79635 17.2856C2.87709 13.8595 3.28794 8.71561 6.71401 5.79635Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M7.00002 12C7.00002 9.2386 9.2386 7.00002 12 7.00002C14.7614 7.00002 17 9.2386 17 12C17 14.7614 14.7614 17 12 17C9.2386 17 7.00002 14.7614 7.00002 12Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pisolscansolid;
