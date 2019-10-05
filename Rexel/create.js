const basicProps = {
  bx: 1,
  by: 1,
};

function setDefault(obj, key, value) {
  if (obj[key] === undefined) {
    obj[key] = value;
  }
}

function create(component, props, ...children) {
  return (sheet) => {
    if (props === null) props = {};

    // Set basic props
    for (const key in basicProps) {
      setDefault(props, key, basicProps[key]);
    }
    
    // Set default props
    const {defaultProps} = component;
    if (defaultProps) {
      for(const key in defaultProps) {
        setDefault(props, key, defaultProps[key]);
      }
    }

    return () => {
      props.children = children;
      const body = component.primitive
        ? component(sheet, props)
        : component(props);
      return [body, children];
    }
  };
}

exports.default = create;
