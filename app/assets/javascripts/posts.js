function mountComponents() {
  const components = document.querySelectorAll('[data-behaviour="component"]');
  for (let i = 0; i < components.length; i++) {
    const node = components[i]
    const props = JSON.parse(node.getAttribute('data-props'));

    Vue.use(VueResource);

    new Vue({
      el: node,
      data: props,
      methods: {
        addComment: function() {
          $.post('/posts/' + this.newComment.post_id + '/comments', { comment: this.newComment }, function(data, textStatus, xhr) {
            console.log(this)
            if (data) {
              this.comments.push({
                body: this.newComment.body,
              });
              this.newComment = {
                body: '',
                post_id: this.newComment.post_id
              }
            }
          }.bind(this), 'json');
        },
      }
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
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

