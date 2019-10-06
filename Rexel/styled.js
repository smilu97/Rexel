const create = require('./create').default;

function styled(Component, style) {
  return function Styled(props) {
    const {style: pStyle, ...pProps} = props;
    const combined = pStyle ? {...style, pStyle} : style;
    return create(Component, {
      style: combined,
      ...pProps,
    });
  }
}

exports.default = styled;
