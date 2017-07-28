import Ember from 'ember';

export default Ember.Component.extend({
    initializeComponent: function() {
        this.$().knob();
    }.on('didInsertElement')

});
