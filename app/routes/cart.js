import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    removeItem() {
      this.transitionTo('index');
    }
  }
});
