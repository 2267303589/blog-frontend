<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead"></header>
    <!-- Main Content-->
    <main class="row">
      <div class="col-md-4 col-lg-4 col-xl-4 profile">
        <el-avatar class="self-image" :size="100" :src="GRIDSOME_API_URL + $page.allStrapiGeneral.edges[0].node.cover.url"></el-avatar>
        <h2 class="title">{{$page.allStrapiGeneral.edges[0].node.title}}</h2>
        <div class="subtitle">{{$page.allStrapiGeneral.edges[0].node.subtitle}}</div>
      </div>
      <div class="container col-md-8 col-lg-8 col-xl-8">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-10 col-xl-10">
            <p>
              Want to get in touch? Fill out the form below to send me a message
              and I will get back to you as soon as possible!
            </p>
            <div class="my-5">
              <form id="contactForm">
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    data-sb-validations="required"
                    v-model="form.name"
                  />
                  <label for="name">Name</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="email"
                    type="email"
                    placeholder="Enter your email..."
                    data-sb-validations="required,email"
                    v-model="form.email"
                  />
                  <label for="email">Email address</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div class="invalid-feedback" data-sb-feedback="email:email">
                    Email is not valid.
                  </div>
                </div>
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number..."
                    data-sb-validations="required"
                    v-model="form.phone"
                  />
                  <label for="phone">Phone Number</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    A phone number is required.
                  </div>
                </div>
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    id="message"
                    placeholder="Enter your message here..."
                    style="height: 12rem"
                    data-sb-validations="required"
                    v-model="form.message"
                  ></textarea>
                  <label for="message">Message</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    A message is required.
                  </div>
                </div>
                <br />
                <!-- Submit success message-->
                <!---->
                <!-- This is what your users will see when the form-->
                <!-- has successfully submitted-->
                <div id="submitSuccessMessage" v-if="success">
                  <div class="text-center mb-3">
                    <div class="fw-bolder">Form submission successful!</div>
                  </div>
                </div>
                <!-- Submit error message-->
                <!---->
                <!-- This is what your users will see when there is-->
                <!-- an error submitting the form-->
                <div id="submitErrorMessage" v-if="error">
                  <div class="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>
                <!-- Submit Button-->
                <button
                  class="btn btn-dark text-uppercase"
                  id="submitButton"
                  type="submit"
                  @click.prevent="onSubmit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>
<page-query>
query{
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
import axios from "axios";
export default {
  name: "contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      success: false,
      error: false,
    };
  },
  metaInfo: {
    title: "contact me",
  },
  methods: {
    async onSubmit() {
      try {
        const { data } = await axios({
          method: "POST",
          url: "http://localhost:1337/contacts",
          data: this.form,
        });
        this.form = {
          name: "",
          email: "",
          phone: "",
          message: "",
        };
        this.success = true;
        this.error = false;
      } catch (err) {
        this.success = false;
        this.error = true;

        console.dir(err);
      }
    },
  },
};
</script>

<style>
</style>