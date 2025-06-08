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
 * Piuserchecksolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuserchecksolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user check icon",
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
      d="M11.5046 14H7C4.23858 14 2 16.2386 2 19C2 20.6569 3.34315 22 5 22H17C18.6569 22 20 20.6569 20 19C20 18.6793 19.9698 18.3657 19.9121 18.0618C19.5551 18.5151 19.2318 18.9934 18.9454 19.4942C18.4815 20.3054 17.666 20.8542 16.7397 20.9783C15.8134 21.1025 14.8822 20.7878 14.221 20.1274L11.8798 17.7887C10.8492 16.7591 10.7239 15.1664 11.5046 14Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M21.5641 13.8257C22.0201 13.5142 22.1373 12.892 21.8257 12.4359C21.5142 11.9799 20.892 11.8627 20.4359 12.1743C18.7661 13.315 17.3097 14.7426 16.1618 16.4123L14.7067 14.9587C14.316 14.5684 13.6828 14.5687 13.2925 14.9595C12.9022 15.3502 12.9025 15.9834 13.2933 16.3737L15.6345 18.7124C15.8549 18.9325 16.1653 19.0374 16.474 18.996C16.7828 18.9547 17.0546 18.7717 17.2093 18.5013C18.2781 16.6323 19.7752 15.0477 21.5641 13.8257Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M6 7C6 4.23858 8.23858 2 11 2C13.7614 2 16 4.23858 16 7C16 9.76142 13.7614 12 11 12C8.23858 12 6 9.76142 6 7Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piuserchecksolid;
