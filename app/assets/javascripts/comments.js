// Customise vue instance objects
var Comments = {
  attached: function() {
    var self = this;
    App.cable.subscriptions.create('CommentChannel', {
      connected: function() {
        this.perform('follow', {
          post_id: self.post_id
        });
      },

      received: function(data) {
        var comment = JSON.parse(data.comment);
        self.comments.unshift({
          body: comment.body,
        });
      }
    });
  },

  methods: {
    addComment: function() {
      var url = '/posts/' + this.post_id + '/comments';
      var newComment = {
        body: this.newComment.body,
        post_id: this.post_id
      };

      $.post(url, { comment: newComment}, function(data, textStatus, xhr) {
        if (textStatus === 'success' && data) {
          // Add it to the top
          this.comments.unshift({
            body: this.newComment.body,
          });
          // Cleanup new comment object
          this.newComment = {
            body: '',
            post_id: this.post_id
          }
        }
      }.bind(this), 'json');
    },
  }
};

// Attach it to global App object
App.Comments = Comments;
