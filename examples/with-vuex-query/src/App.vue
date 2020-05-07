<template>
  <div id="app">
    <h1>{{ title}}</h1>
    <ul v-if="$queries.loaded && !$queries.posts.loading">
      <li v-for="post in $queries.posts.data" :key="post.id">{{ post.title }}</li>
    </ul>
    <hr />
    <other-posts />
  </div>
</template>

<script>
import getPosts from "./queries/getPosts";
import OtherPosts from "./components/OtherPosts";

export default {
  components: {
    OtherPosts
  },
  queries: {
    posts: getPosts
  },
  data() {
    return {
      title: "My Posts"
    };
  }
};
</script>
