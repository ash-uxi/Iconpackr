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
 * Pimedicalfacemaskcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimedicalfacemaskcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "medical facemask icon",
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
    <path d="M20 7.999h.493c.471 0 .707 0 .902.04a2 2 0 0 1 1.566 1.564c.039.196.039.431.039.902 0 .424 0 .636-.026.832a3 3 0 0 1-1.134 1.975c-.157.122-.34.228-.706.442l-1.15.671M8 10h8m-6.667 4h5.334m5.316.426c.017-.224.017-.5.017-.914V8.313c0-.759 0-1.138-.113-1.46a2 2 0 0 0-.797-1.014c-.286-.186-.655-.276-1.392-.455-1.906-.463-2.86-.695-3.822-.809a16 16 0 0 0-3.752 0c-.963.114-1.916.346-3.822.809-.737.18-1.106.269-1.392.455a2 2 0 0 0-.797 1.014c-.096.274-.11.59-.113 1.146m15.983 6.426a3 3 0 0 1-.04.313 3 3 0 0 1-.845 1.56c-.211.206-.473.377-.996.719-1.666 1.087-2.5 1.63-3.362 1.945a8 8 0 0 1-5.48 0c-.863-.315-1.696-.858-3.362-1.945-.523-.342-.785-.513-.996-.72a3 3 0 0 1-.844-1.559 3 3 0 0 1-.041-.313m0 0C4 14.201 4 13.925 4 13.511V7.999m.017 6.426-1.151-.671c-.366-.214-.55-.32-.706-.442a3 3 0 0 1-1.134-1.974C1 11.14 1 10.929 1 10.506c0-.472 0-.707.04-.903a2 2 0 0 1 1.565-1.565c.195-.04.43-.04.902-.04H4" />
    <path
      fill={color}
      d="M4 13.51C4 11.674 3.993 9.837 4 8c.002-.556.017-.872.113-1.146a2 2 0 0 1 .797-1.014c.286-.186.655-.276 1.392-.455 1.906-.463 2.86-.695 3.822-.809a16 16 0 0 1 3.752 0c.962.114 1.915.346 3.822.809.737.18 1.106.269 1.392.455a2 2 0 0 1 .797 1.014c.113.322.113.701.113 1.46v5.198c0 .413 0 .69-.017.914a3 3 0 0 1-.04.313 3 3 0 0 1-.845 1.56c-.211.206-.473.377-.996.719-1.666 1.087-2.5 1.63-3.363 1.945a8 8 0 0 1-5.479 0c-.863-.315-1.696-.858-3.362-1.945-.523-.342-.785-.513-.996-.72a3 3 0 0 1-.844-1.559 3 3 0 0 1-.041-.313C4 14.201 4 13.925 4 13.511"
      opacity={0.28}
    />
  </Svg>
);

export default Pimedicalfacemaskcontrast;
