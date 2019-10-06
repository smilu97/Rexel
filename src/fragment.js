const create = require('./create').default;

function Fragment() {}
Fragment.primitive = true;

function fragment(sheet, props) {
  return create(Fragment, null);
}

exports.default = fragment;
