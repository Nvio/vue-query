<template>
  <div id="app">
    <h1>{{ title}}</h1>
    <ul>
      <li v-for="post in $queries.posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
import getPosts from "./queries/getPosts";

export default {
  queries: {
    posts: getPosts
  },
  updated() {
    console.log("updated");
  },
  data() {
    return {
      title: "My Posts"
    };
  }
};
</script>
