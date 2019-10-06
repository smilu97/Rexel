const create = require('./create').default;
const fragment = require('./fragment').default;
const render = require('./render').default;
const styled = require('./styled').default;

const components = require('./components');

module.exports = {
  create,
  fragment,
  render,
  styled,
  ...components,
};
