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

const Piarchivearrowdowncontrast = ({
  color = "#000",
  size = 24,
  ...props
}) => <Svg width={size} height={size} viewBox="0 0 24 24" {...props}></Svg>;

export default Piarchivearrowdowncontrast;
