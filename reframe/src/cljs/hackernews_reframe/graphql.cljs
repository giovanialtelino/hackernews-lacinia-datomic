(ns hackernews-reframe.graphql)

(def login
  "login($email:String!, $password:String!) {
    login(email: $email, password: $password) {
       token
       error
       refresh
       user {
        name
        email
        createdat
        karma}}}")

(def sign
  "signup($email:String!, $name:String!, $password:String!) {
    signup(email:$email, name:$name, password:$password) {
     token
     refresh
     error
     user {
     name
     email
     createdat
     karma}}}")

(def get-comment
  "comment($id:String!){
  comment(id:$id){
      depth
      error
      father
      fatherName
      id
      link
      linkText
      linkId
      createdAt
      position
      postedBy
      text
      votes}}")

(def feed
  "feed($first:Int, $orderBy:String, $skip:Int){
  feed(first:$first, orderby:$orderBy, skip:$skip){
    comments
    createdAt
    description
    error
    id
    order
    postedBy
    url
    votes}}")

(def get-user-posts
  "user_posts($user:String!){
   user_posts(user:$user){
    comments
    createdAt
    description
    error
    id
    order
    postedBy
    url
    votes
    }}")

(def get-link
  "link($id:String!){
   link(id:$id){
    comments
    createdAt
    description
    error
    id
    order
    postedBy
    url
    votes}}")

(def post
  "post($description:String!, $url:String!){
   post(description:$description, url:$url){
    comments
    createdAt
    description
    error
    id
    order
    postedBy
    url
    votes}}")

(def refresh
  "refresh {
  refresh  {
   error
   refresh
   token
   user {
    name
    email
    createdat
    karma}}}")

(def vote
  "vote($id:String!){
  vote(id:$id)}")

(def vote-comment
  "comment_vote($id:String!){
  comment_vote(id:$id)}")

(def user-description
  "userdescription($name:String!){
   userdescription (name:$name) {
    username
    karma
    createdat}}")

(def get-comments
  "comments($father:String!){
   comments(father:$father){
    id
    father
    createdAt
    text
    votes
    postedBy}}")

(def delete-comment
  "comment_delete($id:String!){
    comment_delete(id:$id)}")

(def get-user-comments
  "user_comments($user:String!){
   user_comments(user:$user){
    id
    father
    createdAt
    text
    votes
    postedBy }}")

(def post-comment
  "comment_post($link:String!, $father:String!, $comment:String!, $type:String!){
  comment_post(link:$link, father:$father, comment:$comment, type:$type){
    depth
    error
    father
    fatherName
    id
    link
    linkText
    linkId
    createdAt
    position
    postedBy
    text
    votes  }}")