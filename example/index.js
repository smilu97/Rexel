const Rexel = require('rexel');
const {Value} = Rexel;

function Test() {
  return <Value bx={3} by={3}>Hello Rexel!</Value>;
}

Rexel.save('./sample.xlsx', {
  Sheet1: <Test />,
});
