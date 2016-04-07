import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,
  findMap(container, options) {
    return new this.googleMaps.Map(container, options);
  },
  center() {
    return new this.googleMaps.LatLng(45.5185583, -122.6794225);
  }
});
