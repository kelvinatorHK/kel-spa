<template>
  <div class="container">
    <h2>Latest posts</h2>
    <ul>
        <li v-if="posts" v-for="(post, index) in posts" :key="index">
            <nuxt-link :to="post.fields.slug">{{post.fields.description}}</nuxt-link>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    computed: {
        posts() {
            console.log(this.$store.state.posts.posts[0].fields);
            return this.$store.state.posts.posts
        }
    },
    async fetch({ store, params }) {
        console.log('In fetch, params:', params);
        await store.dispatch('posts/getPosts', params.slug)
    }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
