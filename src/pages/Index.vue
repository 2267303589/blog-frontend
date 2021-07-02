<template>
  <Layout>
    <!-- Page Header-->
    <!-- static中的资源可以不加任何前缀去访问，也不会参与打包-->
    <header class="masthead" :style="{
      backgroundImage: `url('${GRIDSOME_API_URL + $page.allStrapiGeneral.edges[0].node.cover.url}')`
    }">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{$page.allStrapiGeneral.edges[0].node.title}}</h1>
              <span class="subheading">{{$page.allStrapiGeneral.edges[0].node.subtitle}}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div
            class="post-preview"
            v-for="post in $page.posts.edges"
            :key="post.node.id"
          >
            <g-link :to="'/post/' + post.node.id">
              <h2 class="post-title">
                {{ post.node.title }}
              </h2>
              <!-- <h3 class="post-subtitle">
                {{ post.node.title }}
              </h3> -->
            </g-link>
            <p class="post-meta">
              Posted by
              <a href="#!">Start Bootstrap</a>
              on {{post.node.created_at}}
            </p>
            <p>
              <span v-for="tag in post.node.tags" :key="tag.title">
                <g-link :to="'/tag/' + tag.id">{{tag.title}}</g-link>
                &nbsp; &nbsp;
              </span>
              
            </p>
            <!-- Divider-->
            <hr class="my-4"/>
          </div>
          <!-- Pager-->
          <div class="pager">
            <Pager :info="$page.posts.pageInfo"/>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  posts: allStrapiPost(perPage: 2, page: $page) @paginate{
    pageInfo {
      totalPages
      currentPage
    }
    edges{
      node{
        id
        title
        content
        tags{
          id
          title
        }
        created_at
      }
    }
  }
  allStrapiGeneral{
    edges{
      node{
        title
        subtitle
        cover{
          url
        }
      }
    }
   
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'

export default {
  name: "home",
  metaInfo: {
    title: "Hello, world!",
  },
   components: {
    Pager
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.pager a{
  margin-right: 1rem;
}
</style>
