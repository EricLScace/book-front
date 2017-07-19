import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  this.route('books')
  this.route('change-password')
  this.route('loans')
  this.route('sign-up')
  this.route('sign-in')
  this.route('users')
})

export default Router
