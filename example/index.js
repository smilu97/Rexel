const Rexel = require('rexel');
const {Value} = Rexel;

function Test() {
  return <Value>Hello Rexel!</Value>;
}

Rexel.save('./sample.xlsx', {
  Sheet1: <Test />,
});
