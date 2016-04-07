import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('product', {path: '/product/:product_id'});
  this.route('cart');
  this.route('review', {path: '/review/:product_id'});
  this.route('shirt');
  this.route('shoes');
  this.route('coats');
  this.route('pants');
});

export default Router;
