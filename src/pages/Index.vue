<template>
  <Layout>
    <!-- Page Header-->
    <!-- static中的资源可以不加任何前缀去访问，也不会参与打包-->
    <!-- :style="{
      backgroundImage: `url('${GRIDSOME_API_URL + $page.allStrapiGeneral.edges[0].node.cover.url}')`
    }" -->
    <header class="masthead"></header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5 row  my-posts-container">
      <el-tabs tab-position="left" class="tags-list">
        <el-tab-pane
          v-for="tag in $page.tags.edges"
          :key="tag.node.id"
          :label="tag.node.title"
        >
          <div class="my-post-list">
            <div
              class="post-preview"
              v-for="post in tag.node.posts"
              :key="post.id"
            >
              <g-link :to="'/post/' + post.id">
                <h4>
                   {{ post.title }}
                </h4>
                <div class="content">{{ post.content}}</div>
              </g-link>

              <el-divider></el-divider>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </Layout>
</template>

<page-query>
query  {
  tags: allStrapiTag {
      edges{
        node{
          id
          title
          posts{
            id 
            title
            content
          }
        }
      }
    
  }
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
  name: "home",
  metaInfo: {
    title: "home",
  },
  components: {
    Pager,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.pager a {
  margin-right: 1rem;
}
</style>
