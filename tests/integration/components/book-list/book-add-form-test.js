import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('book-list/book-add-form', 'Integration | Component | book list/book add form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{book-list/book-add-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#book-list/book-add-form}}
      template block text
    {{/book-list/book-add-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
