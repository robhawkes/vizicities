import World from './World';
import Controls from './controls/index';
import EnvironmentLayer from './layer/environment/EnvironmentLayer';
import ImageTileLayer from './layer/tile/ImageTileLayer';
import GeoJSONTileLayer from './layer/tile/GeoJSONTileLayer';
import TopoJSONTileLayer from './layer/tile/TopoJSONTileLayer';
import GeoJSONLayer from './layer/GeoJSONLayer';
import TopoJSONLayer from './layer/TopoJSONLayer';
import Point from './geo/Point';
import LatLon from './geo/LatLon';

const VIZI = {
  version: '0.3',

  // Public API
  World: World,
  Controls: Controls,
  EnvironmentLayer: EnvironmentLayer,
  ImageTileLayer: ImageTileLayer,
  GeoJSONTileLayer: GeoJSONTileLayer,
  TopoJSONTileLayer: TopoJSONTileLayer,
  GeoJSONLayer: GeoJSONLayer,
  TopoJSONLayer: TopoJSONLayer,
  Point: Point,
  LatLon: LatLon
};

export default VIZI;
