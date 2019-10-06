const Rexel = require('./Rexel');
const populate = require('xlsx-populate');

function styled(Component, style) {
  return function Styled(props) {
    const {style: pStyle, ...pProps} = props;
    const combined = pStyle ? {...style, pStyle} : style;
    console.log('pProps:', props);
    return <Component style={combined} {...pProps} />;
  }
}

function Value(sheet, props) {;
  console.log('props:', props);
  const {bx, by, style, children} = props;
  const cell = sheet.row(bx).cell(by);
  cell.value(String(children));
  if (style) {
    cell.style(style);
  }
}
Value.primitive = true;

const SValue = styled(Value, {
  fontColor: 'ff0000',
});

function TestComponent(props) {
  const {bx, by} = props;
  return (
    <>
      <SValue bx={bx} by={by}>Hello!</SValue>
      <SValue bx={bx + 1} by={by}>World!</SValue>
      {Array(10).fill(undefined).map((und, idx) => (
        <SValue bx={bx + 2} by={by + idx}>{idx}</SValue>
      ))}
    </>
  );
}

populate.fromBlankAsync().then((workbook) => {
  const sheet = workbook.sheet(0);
  Rexel.render(sheet, <TestComponent bx={3} by={3} />);
  workbook.toFileAsync('./sample.xlsx');
});
