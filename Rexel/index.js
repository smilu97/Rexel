const populate = require('xlsx-populate');

const create = require('./create').default;
const fragment = require('./fragment').default;
const render = require('./render').default;
const styled = require('./styled').default;

const components = require('./components');

async function save(path, components) {
  const workbook = await populate.fromBlankAsync();
  for(const sheetName in components) {
    const component = components[sheetName];
    const sheet = workbook.sheet(sheetName);
    render(sheet, component);
  }
  workbook.toFileAsync(path);
}

module.exports = {
  create,
  fragment,
  render,
  styled,
  save,
  ...components,
};
