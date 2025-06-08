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
 * Pigooglechromesolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigooglechromesolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "google chrome icon",
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
      d="M11.627 22.1434C11.7508 22.1478 11.8752 22.1501 12.0001 22.1501C17.6058 22.1501 22.1501 17.6058 22.1501 12.0001C22.1501 11.0146 22.0096 10.0618 21.7476 9.16086C21.6238 9.21576 21.4868 9.24626 21.3427 9.24626H15.8711C16.4242 10.0233 16.7495 10.9737 16.7495 12.0001C16.7495 12.9347 16.4798 13.8064 16.0139 14.5414L11.9401 21.6039L11.9388 21.6063L11.627 22.1434Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M11.9957 14.754C11.0033 14.754 10.1335 14.229 9.64883 13.4417C9.63819 13.4198 9.62668 13.3981 9.61428 13.3766L9.54146 13.2506C9.34987 12.8754 9.24181 12.4504 9.24181 12.0001C9.24181 10.4792 10.4747 9.24626 11.9957 9.24626C13.5166 9.24626 14.7495 10.4792 14.7495 12.0001C14.7495 12.4753 14.6291 12.9224 14.4173 13.3125C14.403 13.3334 14.3894 13.3551 14.3765 13.3774L14.3073 13.4973C13.8164 14.2537 12.9645 14.754 11.9957 14.754Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M3.39678 6.61189C2.41678 8.17335 1.8501 10.0205 1.8501 12.0001C1.8501 16.7401 5.09927 20.7213 9.49189 21.8378C9.49316 21.8356 9.49443 21.8334 9.49572 21.8312L10.2077 20.6046L10.209 20.6023L12.4407 16.7334C12.2942 16.747 12.1457 16.754 11.9957 16.754C10.1655 16.754 8.57696 15.7198 7.78243 14.204L3.70323 7.14758L3.39678 6.61189Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M4.70739 4.94042C6.55256 3.03473 9.13799 1.8501 12.0001 1.8501C15.8881 1.8501 19.2656 4.03619 20.9703 7.24626H11.9957C10.0773 7.24626 8.42438 8.38252 7.67314 10.0187L5.43812 6.15248L4.86134 5.1443C4.81786 5.0683 4.76593 5.00017 4.70739 4.94042Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pigooglechromesolid;
