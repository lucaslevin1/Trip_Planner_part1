const mapboxgl = require("mapbox-gl");

module.exports = class Marker {
  constructor(type, coordinates){
    this.type = type;
    this.coordinates = coordinates;
    this.restaurantImgURL = 'http://i.imgur.com/cqR6pUI.png';
    this.hotelImgURL = 'http://i.imgur.com/D9574Cu.png';
    this.activityImgURL = 'http://i.imgur.com/WbMOfMl.png';
  }

  getTypeURL(){
    if (this.type === 'restaurant'){
      return this.restaurantImgURL;
    } else if (this.type === 'activity'){
      return this.activityImgURL;
    } else if (this.type === 'hotel'){
      return this.hotelImgURL;
    }
  }

  createMarker(){
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = `url(${this.getTypeURL()})`

    return new mapboxgl.Marker(markerDomEl).setLngLat(this.coordinates);
  }
}
