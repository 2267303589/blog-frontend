<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead">

    </header>
    <!-- Post Content-->
    <article class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <h1 style="text-align: center; padding-top: 10px">{{ $page.post.title }}</h1>
          <div
            class="col-md-10 col-lg-8 col-xl-7"
            v-html="mdToHtml($page.post.content)"
          ></div>
        </div>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query($id: ID) {
    post: strapiPost(id: $id){
        title
        content
        tags{
        id
        title
        }
        created_at
        cover {
        url
        }
    }   
}
</page-query>
<script>
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();
export default {
  name: "post",
  metaInfo: {
    title: "post",
  },
  methods: {
    mdToHtml(mdContent) {
      return md.render(mdContent);
    },
  },
};
</script>

<style>
</style>