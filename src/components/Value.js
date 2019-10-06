function Value(sheet, props) {
  const {bx, by, style, children} = props;
  const cell = sheet.row(bx).cell(by);
  cell.value(String(children));
  if (style) {
    cell.style(style);
  }
}
Value.primitive = true;

exports.default = Value;
