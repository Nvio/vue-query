<template>
  <div id="app">
    <h1>{{ title}}</h1>

    <p v-if="$queries.posts.loading">Loading...</p>
    <ul v-else :key="$queries.posts.length">
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
