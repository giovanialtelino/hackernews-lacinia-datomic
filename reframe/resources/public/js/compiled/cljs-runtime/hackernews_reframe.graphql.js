goog.provide('hackernews_reframe.graphql');
goog.require('cljs.core');
hackernews_reframe.graphql.login = "login($email:String!, $password:String!) {\n    login(email: $email, password: $password) {\n       token\n       error\n       refresh\n       user {\n        name\n        email\n        createdat\n        karma}}}";
hackernews_reframe.graphql.sign = "signup($email:String!, $name:String!, $password:String!) {\n    signup(email:$email, name:$name, password:$password) {\n     token\n     refresh\n     error\n     user {\n     name\n     email\n     createdat\n     karma}}}";
hackernews_reframe.graphql.get_comment = "comment($id:String!){\n  comment(id:$id){\n      depth\n      error\n      father\n      fatherName\n      id\n      link\n      linkText\n      linkId\n      createdAt\n      position\n      postedBy\n      text\n      votes}}";
hackernews_reframe.graphql.feed = "feed($first:Int, $orderBy:String, $skip:Int){\n  feed(first:$first, orderby:$orderBy, skip:$skip){\n    comments\n    createdAt\n    description\n    error\n    id\n    order\n    postedBy\n    url\n    votes}}";
hackernews_reframe.graphql.get_user_posts = "user_posts($user:String!){\n   user_posts(user:$user){\n    comments\n    createdAt\n    description\n    error\n    id\n    order\n    postedBy\n    url\n    votes\n    }}";
hackernews_reframe.graphql.get_link = "link($id:String!){\n   link(id:$id){\n    comments\n    createdAt\n    description\n    error\n    id\n    order\n    postedBy\n    url\n    votes}}";
hackernews_reframe.graphql.post = "post($description:String!, $url:String!){\n   post(description:$description, url:$url){\n    comments\n    createdAt\n    description\n    error\n    id\n    order\n    postedBy\n    url\n    votes}}";
hackernews_reframe.graphql.refresh = "refresh {\n  refresh  {\n   error\n   refresh\n   token\n   user {\n    name\n    email\n    createdat\n    karma}}}";
hackernews_reframe.graphql.vote = "vote($id:String!){\n  vote(id:$id)}";
hackernews_reframe.graphql.vote_comment = "comment_vote($id:String!){\n  comment_vote(id:$id)}";
hackernews_reframe.graphql.user_description = "userdescription($name:String!){\n   userdescription (name:$name) {\n    username\n    karma\n    createdat}}";
hackernews_reframe.graphql.get_comments = "comments($father:String!){\n   comments(father:$father){\n    id\n    father\n    createdAt\n    text\n    votes\n    postedBy}}";
hackernews_reframe.graphql.delete_comment = "comment_delete($id:String!){\n    comment_delete(id:$id)}";
hackernews_reframe.graphql.get_user_comments = "user_comments($user:String!){\n   user_comments(user:$user){\n    id\n    father\n    createdAt\n    text\n    votes\n    postedBy }}";
hackernews_reframe.graphql.post_comment = "comment_post($link:String!, $father:String!, $comment:String!, $type:String!){\n  comment_post(link:$link, father:$father, comment:$comment, type:$type){\n    depth\n    error\n    father\n    fatherName\n    id\n    link\n    linkText\n    linkId\n    createdAt\n    position\n    postedBy\n    text\n    votes  }}";

//# sourceMappingURL=hackernews_reframe.graphql.js.map
