<script>
export default {
  name: "fileUpload",
  data: () => ({
    types: [""],
    cards: ["1", "2"],
    display: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5
    }
  }),

  computed: {
    // displayGrid() {
    //   return {
    //     display: "grid",
    //     gridTemplateColumns: `repeat(${
    //       this.display[this.$vuetify.breakpoint.name]
    //     }, 1fr)`
    //   };
    // }
  },

  methods: {
    // getImage() {
    //   const min = 550;
    //   const max = 560;
    //
    //   return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
  }
};
</script>

<template>
  <div class="mx-3">
    <!--    {{ $vuetify.breakpoint.name }}-->
    <v-card flat tile>
      <v-toolbar color="blue" dark>
        <div class="mx-1">
          <v-toolbar-title>File Upload </v-toolbar-title>
        </div>

        <v-spacer></v-spacer>

        <div class="mx-1">
          <span>
            Total file size: <b>28.54 kB</b> of max <b>5.12 MB </b>Total files:
            <b>4</b> of max <b>10</b>
          </span>
        </div>
      </v-toolbar>

      <v-layout row wrap class="justify-space-around">
        <div id="card" v-for="i in 1" :key="`12${i}`">
          <v-flex xs12 sm12 md12 class="mx-4 my-4">
            <a class="card-link" href="#">
              <div class="blog-card">
                <v-img
                  class="post-image"
                  src="https://source.unsplash.com/DnWYw0zLJBg"
                  width="100%"
                  height="100%"
                ></v-img>
                <div class="article-details">
                  <h4 class="post-category">Title</h4>
                  <h3 class="post-title grey--text text--darken-1">
                    There will be title of the file
                  </h3>
                  <v-flex shrink class="text-center">
                    <span class="mx-2"><b>14.4 kB</b></span>
                    <v-btn icon>
                      <v-icon large class="upload">cloud_upload</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon large>delete</v-icon>
                    </v-btn>
                  </v-flex>
                </div>
              </div>
            </a>
          </v-flex>
        </div>
        <div id="lastcard">
          <div class="mx-4 my-4">
            <a class="card-link" href="#">
              <div class="blog-card">
                <v-img
                  class="post-image"
                  src="https://source.unsplash.com/DnWYw0zLJBg"
                  width="100%"
                  height="100%"
                  alt=".."
                ></v-img>
                <div class="article-details fulljustify my-3">
                  <h3
                    class="post-title grey--text text--darken-1 text-center my-3 py-3"
                  >
                    Drop files <a href="#">Browse</a> or import
                  </h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </v-layout>

      <div class="mx-4 my-4">
        <v-btn color="blue">
          Upload
          <v-icon right>cloud_upload</v-icon>
        </v-btn>
      </div>
      <!--      </v-container>-->
    </v-card>
  </div>
</template>

<style scoped>
/*.rightAlign {*/
/*  text-align: right;*/
/*}*/

body {
  display: flex;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: #777;
  background: #eedfcc;
  font-size: 0.9375rem;
  min-height: 100vh;
  margin: 0;
  line-height: 1.6;
}

#card,
#lastcard {
  width: 460px;
  height: 13.625rem;
}

.blog-card {
  display: flex;
  flex-direction: row;
  background: #fff;
  box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  overflow: hidden;
}

.card-link {
  position: relative;
  display: inline;
  color: inherit;
  text-decoration: none;
}
.post-image {
  display: block;
  width: 100%;
  object-fit: cover;
  height: 100%;
}

.article-details {
  padding: 1.5rem;
}

.post-category {
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.0625rem;
  margin: 0 0 0.75rem 0;
  padding: 0 0 0.25rem 0;
  border-bottom: 0.125rem solid #ebebeb;
}

.post-title {
  font-size: 1.125rem;
  line-height: 2.2;
  color: #121212;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  border-bottom: 0.125rem solid #ebebeb;
}

@media (max-width: 40rem) {
  #card,
  #lastcard {
    width: 460px;
    height: 27.25rem;
  }

  .blog-card {
    flex-wrap: wrap;
  }
}

@supports (display: grid) {
  body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.625rem;
    grid-template-areas: ". main main ." ". main main .";
  }

  #card,
  #lastcard {
    grid-area: main;
    align-self: center;
    justify-self: center;
  }
  .blog-card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }

  @media (max-width: 40rem) {
    .blog-card {
      grid-template-columns: auto;
      grid-template-rows: 12rem 1fr;
    }
  }
}
.fulljustify {
  text-align: justify;
}
.fulljustify:after {
  content: "";
  display: inline-block;
  width: 100%;
}
</style>
