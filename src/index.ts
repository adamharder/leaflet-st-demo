import L from "leaflet";
export class Mappe {
  private _mapArea: HTMLDivElement;
  private MapFrame: HTMLDivElement;
  private mymap: L.Map;
  private TileLayer: L.TileLayer;

  public AddMap() {
    this.mymap = new L.Map("mapid", {
      center: new L.LatLng(51.505, -0.09),
      zoom: 13
    });

    this.mymap.setView([51.505, -0.09], 13);
    this.TileLayer = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }
    );

    this.TileLayer.addTo(this.mymap);
  }
  constructor() {
    // super();

    this.MapFrame = document.createElement("div");
    this.MapFrame.style.height = "416px";
    this.MapFrame.style.width = "616px";

    this._mapArea = document.createElement("div");
    this._mapArea.style.height = "400px";
    this._mapArea.style.width = "600px";

    this._mapArea.id = "mapid";
    this.MapFrame.appendChild(this._mapArea);
    document.getElementById("app").appendChild(this.MapFrame);
  }
}
let map = new Mappe();
map.AddMap();
// document.getElementById("app").innerHTML = `
// <h1>Map Test</h1>
// <div>
// </div>
