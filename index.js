const Rexel = require('./Rexel');
const populate = require('xlsx-populate');

function Value(sheet, props) {;
  const {bx, by, children} = props;
  console.log('wrote:', children);
  sheet.row(bx).cell(by).value(String(children));
}
Value.primitive = true;

function TestComponent(props) {
  const {bx, by} = props;
  return <Value bx={bx} by={by}>Hello!</Value>;
}

populate.fromBlankAsync().then((workbook) => {
  const sheet = workbook.sheet(0);
  Rexel.render(sheet, <TestComponent bx={3} by={3} />);
  workbook.toFileAsync('./sample.xlsx');
});
