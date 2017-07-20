import Ember from 'ember'

export default Ember.Route.extend({
  model () {
    return [
      {
        title: 'The Hound of the Baskervilles',
        author: 'Arthur Conan Doyle'
      },
      {
        title: 'The Sign of the Four',
        author: 'Arthur Conan Doyle'
      },
      {
        title: 'A Study in Scarlet',
        author: 'Arthur Conan Doyle'
      }
    ]
  }
})
