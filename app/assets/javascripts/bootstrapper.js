// Instantiate vue instances dyanamically
function mountComponents() {
  const components = document.querySelectorAll('[data-behaviour="component"]');
  for (var index = 0; index < components.length; index++) {
    const node = components[num];
    const props = JSON.parse(node.getAttribute('data-props'));
    const componentName = node.getAttribute('data-component-name');
    var constructor = window[componentName] || eval.call(window, componentName);

    constructor.el = node;
    constructor.data = props;
    const $vue = new Vue(constructor);
  }
}
// Attach event Turbolinks event listeners
document.addEventListener('DOMContentLoaded', function() {
  if (!(typeof Turbolinks !== 'undefined')) {
    mountComponents();
  } else {
    if (typeof Turbolinks.controller !== 'undefined') {
      document.addEventListener('turbolinks:load', mountComponents);
    } else {
      document.addEventListener('page:change', mountComponents);
    }
  }
});
