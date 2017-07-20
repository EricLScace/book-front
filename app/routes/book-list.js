import Ember from 'ember'

export default Ember.Route.extend({
  model () {
    return [
      {
        title: 'The Hound of the Baskervilles',
        author: 'Arthur Conan Doyle'
      }
    ]
  }
})
