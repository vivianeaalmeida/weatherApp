import { Current } from "./current";
import { Location } from "./location";

export interface WeatherData {
    location: Location;
    current: Current;
}
