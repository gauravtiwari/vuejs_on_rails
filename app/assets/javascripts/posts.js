window.Post = {};
window.Posts = {};


function mountComponents() {
  const components = document.querySelectorAll('[data-behaviour="component"]');
  for (var num = 0; num < components.length; num++) {
    const node = components[num];
    const props = JSON.parse(node.getAttribute('data-props'));
    const componentName = node.getAttribute('data-component-name');

    window[componentName].el = node;
    window[componentName].data = props;
    const $vue = new Vue(window[componentName]);
  }
}

document.addEventListener('DOMContentLoaded', function(){
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
