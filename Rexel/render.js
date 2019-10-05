function render(sheet, element) {
  if (typeof element !== 'function') return;
  const [body, children] = element(sheet)();
  render(sheet, body);
  children.forEach((child) => {
    render(sheet, child);
  })
}

exports.default = render;
