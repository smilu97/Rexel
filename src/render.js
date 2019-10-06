function render(sheet, element) {
  if (typeof element === 'object') {
    if (element.length !== undefined) {
      element.forEach((item) => render(sheet, item));
      return;
    } else {
      console.warn('Object is not renderable');
      return;
    }
  }
  else if (typeof element === 'function') {
    const [body, children] = element(sheet)();
    render(sheet, body);
    children.forEach((child) => {
      render(sheet, child);
    })
  }
}

exports.default = render;
