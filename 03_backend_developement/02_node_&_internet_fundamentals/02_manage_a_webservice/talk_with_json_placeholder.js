const request = require("request");

function fetchPosts(callback) {
  request(
    {
      url: "http://jsonplaceholder.typicode.com/posts",
      method: "GET"
    },
    function (error, response, result) {
      callback(result);
    }
  );
}
// fetchPosts(console.log);

function fetchPostByUser(userId, callback) {
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts?userId=${userId}`,
      method: "GET"
    },
    function (error, response, result) {
      callback(result);
    }
  );
}
// fetchPostByUser("1", console.log);

function fetchPost(id, callback) {
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/${id}`,
      method: "GET"
    },
    function (error, response, result) {
      callback(result);
    }
  );
}
// fetchPost("1", console.log);

function fetchUsers(callback) {
  request(
    {
      url: "http://jsonplaceholder.typicode.com/users",
      method: "GET"
    },
    function (error, response, result) {
      callback(result);
    }
  );
}
// fetchUsers(console.log);

function fetchUser(userId, callback) {
  request(
    {
      url: `http://jsonplaceholder.typicode.com/users/${userId}`,
      method: "GET"
    },
    function (error, response, result) {
      callback(result);
    }
  );
}
// fetchUser("1", console.log);

function fetchComments(callback) {
  request(
    {
      url: "http://jsonplaceholder.typicode.com/comments",
      method: "GET"
    },
    function (error, response, result) {
      callback(result);
    }
  );
}
// fetchComments(console.log);

function fetchCommentsByPost(id, callback) {
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/${id}/comments`,
      method: "GET"
    },
    function (error, response, result) {
      callback(result);
    }
  );
}
// fetchCommentsByPost("1", console.log);

//publishing posts

function publishPost(userId, title, bodyPost, callback) {
  request(
    {
      url: "http://jsonplaceholder.typicode.com/posts",
      method: "POST",
      form: {userId: userId, title: title, body: bodyPost},
    },
    function (error, response, body) {
      callback(body);
    }
  );
}

function publishComment(postId, name, email, body, callback) {
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      method: "POST",
      form: {"postId": postId, "name": name, "email": email, "body": body},
    },
    function (error, response, result) {
      callback(result);
    }
  );
}

function updatePostTitle(postId, newTitle, callback) {
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/${postId}`,
      method: "PATCH",
      form: {"title": newTitle},
    },
    function (error, response, result) {
      callback(result);
    }
  );
}

function updatePostBody(postId, newBody, callback) {
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/${postId}`,
      method: "PATCH",
      form: {"body": newBody},
    },
    function (error, response, result) {
      callback(result);
    }
  );
}

function updatePost(postId, newTitle, newBody, callback) {
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/${postId}`,
      method: "PATCH",
      form: {"title": newTitle, "body": newBody},
    },
    function (error, response, result) {
      callback(result);
    }
  );
}

module.exports = {
  fetchPosts: fetchPosts,
  fetchPostByUser: fetchPostByUser,
  fetchPost: fetchPost,
  fetchUsers: fetchUsers,
  fetchUser: fetchUser,
  fetchComments: fetchComments,
  fetchCommentsByPost: fetchCommentsByPost,
  publishPost: publishPost,
  publishComment: publishComment,
  updatePostTitle: updatePostTitle,
  updatePostBody: updatePostBody,
  updatePost: updatePost,
};
