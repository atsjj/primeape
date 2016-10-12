import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  account:  belongsTo('account'),
  orders:   hasMany('order')
});
