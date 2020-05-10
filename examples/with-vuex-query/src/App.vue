<template>
  <div id="app">
    <h1>{{ title}}</h1>

    <other-posts />
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
