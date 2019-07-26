<script>
export default {
  name: "fileUpload",
  data: () => ({
    display: {
      xs: 1,
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4
    }
  }),

  computed: {
    displayGrid() {
      return {
        display: "grid",
        gridTemplateColumns: `repeat(${
          this.display[this.$vuetify.breakpoint.name]
        }, 2fr)`
      };
    }
  }
};
</script>

<template>
  <div class="mx-3">
    {{ $vuetify.breakpoint.name }}
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

      <!--                Next path is card for > xs-->
      <v-container xs6 sm6 md6 lg6 xl6 fluid grid-list grey lighten-4>
        <v-layout row wrap :style="displayGrid">
          <v-flex v-for="i in 6" :key="`2${i}`">
            <v-card class="blog-card">
              <v-img
                class="post-image"
                src="https://source.unsplash.com/DnWYw0zLJBg"
                width="100%"
                height="100%"
              ></v-img>
              <v-card-actions class="white justify-center">
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
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex>
            <v-card xs12 sm12 md12 class="blog-card">
              <v-img
                class="post-image"
                src="https://source.unsplash.com/DnWYw0zLJBg"
                width="100%"
                height="100%"
              ></v-img>
              <v-card-actions class="white justify-center">
                <span class="my-5"
                  >Drop files, <a href="#"><b>Browse</b></a> or import</span
                >
              </v-card-actions>
            </v-card>
          </v-flex>
          <!--                  These path is  for xs size       class="hidden-sm-and-up" -->
          <!--          <v-flex>-->
          <!--            <v-card xs12 sm12 md12 max-width="344" class="mx-auto">-->
          <!--              <v-layout pt-4 pl-4>-->
          <!--                <v-flex shrink>-->
          <!--                  <v-img-->
          <!--                    height="100"-->
          <!--                    width="100"-->
          <!--                    src="https://cdn.vuetifyjs.com/images/cards/store.jpg"-->
          <!--                  ></v-img>-->
          <!--                </v-flex>-->
          <!--                <v-flex>-->
          <!--                  <v-container>-->
          <!--                    <v-textarea-->
          <!--                      rows="2"-->
          <!--                      readonly-->
          <!--                      value="This is title title title title tit"-->
          <!--                      label="Title"-->
          <!--                    ></v-textarea>-->
          <!--                  </v-container>-->
          <!--                </v-flex>-->
          <!--              </v-layout>-->
          <!--              <v-layout row>-->
          <!--                <span class="ml-4 mt-5"><b>14.4 kB</b></span>-->
          <!--                <v-flex class="rightAlign">-->
          <!--                  <v-btn icon>-->
          <!--                    <v-icon>cloud_upload</v-icon>-->
          <!--                  </v-btn>-->
          <!--                </v-flex>-->
          <!--                <v-flex class="rightAlign">-->
          <!--                  <v-btn icon>-->
          <!--                    <v-icon>delete</v-icon>-->
          <!--                  </v-btn>-->
          <!--                </v-flex>-->
          <!--              </v-layout>-->
          <!--            </v-card>-->
          <!--          </v-flex>-->

          <!--          <v-flex class="">-->
          <!--            <v-card xs12 sm12 md12 max-width="344" class="mx-auto">-->
          <!--              <v-layout pt-4 pl-4>-->
          <!--                <v-flex shrink>-->
          <!--                  <v-img-->
          <!--                    height="100"-->
          <!--                    width="100"-->
          <!--                    src="https://cdn.vuetifyjs.com/images/cards/store.jpg"-->
          <!--                  ></v-img>-->
          <!--                </v-flex>-->
          <!--                <v-flex>-->
          <!--                  <v-container>-->
          <!--                    <v-card-actions class="white justify-center">-->
          <!--                      <span class="my-5"-->
          <!--                        >Drop files, <a href="#"><b>Browse</b></a> or import-->
          <!--                        ..</span-->
          <!--                      >-->
          <!--                    </v-card-actions>-->
          <!--                  </v-container>-->
          <!--                </v-flex>-->
          <!--              </v-layout>-->
          <!--            </v-card>-->
          <!--          </v-flex>-->
        </v-layout>
      </v-container>

      <!--      <v-layout row wrap class="align-start my-4">-->
      <!--        <div id="card" v-for="i in 2" :key="`6${i}`">-->
      <!--          <v-flex xs12 sm12 md12>-->
      <!--            <a class="card-link" href="#">-->
      <!--              <div class="blog-card">-->
      <!--                <v-img-->
      <!--                  class="post-image"-->
      <!--                  src="https://source.unsplash.com/DnWYw0zLJBg"-->
      <!--                  width="100%"-->
      <!--                  height="100%"-->
      <!--                ></v-img>-->
      <!--                <div class="article-details">-->
      <!--                  <h4 class="post-category">Title</h4>-->
      <!--                  <h3 class="post-title grey&#45;&#45;text text&#45;&#45;darken-1">-->
      <!--                    There will be title of the file-->
      <!--                  </h3>-->
      <!--                  <v-flex shrink class="text-center">-->
      <!--                    <span class="mx-2"><b>14.4 kB</b></span>-->
      <!--                    <v-btn icon>-->
      <!--                      <v-icon large class="upload">cloud_upload</v-icon>-->
      <!--                    </v-btn>-->
      <!--                    <v-btn icon>-->
      <!--                      <v-icon large>delete</v-icon>-->
      <!--                    </v-btn>-->
      <!--                  </v-flex>-->
      <!--                </div>-->
      <!--              </div>-->
      <!--            </a>-->
      <!--          </v-flex>-->
      <!--        </div>-->
      <!--        <div id="lastcard">-->
      <!--          <div class="mx-4 my-4">-->
      <!--            <a class="card-link" href="#">-->
      <!--              <div class="blog-card">-->
      <!--                <v-img-->
      <!--                  class="post-image"-->
      <!--                  src="https://source.unsplash.com/DnWYw0zLJBg"-->
      <!--                  width="100%"-->
      <!--                  height="100%"-->
      <!--                  alt=".."-->
      <!--                ></v-img>-->
      <!--                <div class="article-details fulljustify my-3">-->
      <!--                  <h3-->
      <!--                    class="post-title grey&#45;&#45;text text&#45;&#45;darken-1 text-center my-3 py-3"-->
      <!--                  >-->
      <!--                    Drop files <a href="#">Browse</a> or import-->
      <!--                  </h3>-->
      <!--                </div>-->
      <!--              </div>-->
      <!--            </a>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </v-layout>-->

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
