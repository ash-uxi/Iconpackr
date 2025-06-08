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
 * Pifacebookmessengersolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifacebookmessengersolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "facebook messenger icon",
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
      d="M12 2C6.41494 2 2 6.12658 2 11.7298C2 14.5938 3.16086 17.1 5.07098 18.8524L5.11673 20.3329C5.12539 20.6144 5.20303 20.8894 5.34283 21.1339C5.48269 21.3784 5.68047 21.5849 5.9188 21.7351C6.15712 21.8853 6.4287 21.9747 6.70965 21.9954C6.9906 22.016 7.27233 21.9674 7.53008 21.8537L9.22694 21.1057C10.1058 21.3376 11.0349 21.4618 12 21.4618C17.5851 21.4618 22 17.3352 22 11.732C22 6.12916 17.5854 2 12 2ZM16.8299 10.5579C17.138 10.0996 17.0163 9.47823 16.5579 9.1701C16.0996 8.86197 15.4782 8.98375 15.1701 9.44209L13.4787 11.958L11.607 10.1737C10.9466 9.54414 9.88174 9.6451 9.35141 10.3876L7.18627 13.4188C6.86526 13.8682 6.96935 14.4927 7.41876 14.8137C7.86817 15.1347 8.49272 15.0307 8.81373 14.5812L10.644 12.0188L12.5279 13.8147C13.2008 14.4561 14.2891 14.3374 14.8077 13.5659L16.8299 10.5579Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pifacebookmessengersolid;
