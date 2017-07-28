import Ember from 'ember';

export default Ember.Component.extend({
    initializeComponent: function() {
        var self = this;
        this.$().knob({
            change: function(v) {
                self.set('value', v);
            }
        });
    }.on('didInsertElement'),

    valueChanged: function() {
        this.$().val(this.get('value')).trigger('change');
    }.observes('value')


});
