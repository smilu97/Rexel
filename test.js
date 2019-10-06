const _ = require('lodash');
const Rexel = require('./src');
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
      {_.range(0, 10).map((idx) => (
        <SValue bx={bx + 2} by={by + idx}>{idx}</SValue>
      ))}
    </>
  );
}

Rexel.save('./sample.xlsx', {
  Sheet1: <TestComponent bx={3} by={3} />,
});
