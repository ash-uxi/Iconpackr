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
 * Piwalletrefreshduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwalletrefreshduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "wallet refresh icon",
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
      fill={color || "#000"}
      d="M18.994 6.344c-.017-.728-.075-1.336-.298-1.875a4 4 0 0 0-2.165-2.165c-.418-.173-.852-.241-1.321-.273C14.757 2 14.204 2 13.534 2H9.956c-1.363 0-2.447 0-3.321.071-.896.074-1.66.227-2.359.583a6 6 0 0 0-2.622 2.622c-.356.7-.51 1.463-.582 2.359C1 8.509 1 9.593 1 10.956v3.666c0 1.23-.001 2.569.457 3.674a6 6 0 0 0 3.247 3.247c.602.25 1.244.356 1.992.407.661.045 1.462.05 2.447.05a3 3 0 0 1 .006-.726 13 13 0 0 1 .792-3.094c.34-.87 1-1.535 1.805-1.897a3 3 0 0 1 .993-3.094 7 7 0 0 1 2.342-1.269 6.99 6.99 0 0 1 6.042.888 3 3 0 0 1 1.866-.157q-.01-.521-.039-.955c-.05-.748-.157-1.39-.407-1.992a6 6 0 0 0-3.247-3.247q-.15-.062-.302-.113m-3.92-2.318c.367.025.558.07.691.126a2 2 0 0 1 1.083 1.083c.07.169.11.382.132.797A53 53 0 0 0 14.6 6H9.465c-1.134 0-2.036 0-2.768.05-.748.051-1.39.158-1.992.407a6 6 0 0 0-1.603.983c.068-.567.177-.947.335-1.256a4 4 0 0 1 1.748-1.748c.37-.189.842-.308 1.614-.371C7.58 4 8.583 4 10 4h3.5c.713 0 1.197 0 1.573.026"
      opacity={0.28}
    />{" "}
    <path d="M22.295 15.57a10 10 0 0 1-.672 2.363.47.47 0 0 1-.455.286m-2.403-.768a10 10 0 0 0 2.336.76 1 1 0 0 0 .067.008m-5.565 1.463a10 10 0 0 0-2.4-.704m-1.079 2.677c.105-.816.31-1.615.61-2.38a.47.47 0 0 1 .469-.297m7.965-.759a4 4 0 0 0-6.524-2.714m-1.441 3.473q.04.41.167.82a4 4 0 0 0 6.366 1.88" />
  </Svg>
);

export default Piwalletrefreshduosolid;
