const Rexel = require('./Rexel');
const populate = require('xlsx-populate');

const {Value, styled} = Rexel;

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
