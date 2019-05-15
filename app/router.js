import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('rentals');
  this.route('about');
  this.route('contact');
  this.route('posts',{path:'/post'});
  this.route('post',{path:'/post/:post_id'});
});

export default Router;
