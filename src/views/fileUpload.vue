<script xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
export default {
  name: "fileUpload",
  data: () => ({
    display: {
      xs: 1,
      sm: 2,
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
        }, 1fr)`
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
          <span class="text-center">
            Total file size: <b>28.54 kB</b> of max <b>5.12 MB </b> <br />
            Total files:<b>4</b> of max <b>10</b>
          </span>
        </div>
      </v-toolbar>

      <!--                Next path is card for > xs-->
      <v-container fluid grid-list>
        <v-layout row wrap :style="displayGrid">
          <v-flex v-for="i in 1" :key="`12${i}`">
            <v-card class="blog-card mx-2 my-2">
              <v-img
                class="post-image"
                src="https://source.unsplash.com/DnWYw0zLJBg"
                width="100%"
                height="100%"
              >
                <!--                <v-layout align-center justify-center row fill-height>-->
                <!--                  <v-progress-circular-->
                <!--                    indeterminate-->
                <!--                    size="100"-->
                <!--                    width="6"-->
                <!--                    color="grey lighten-5"-->
                <!--                  ></v-progress-circular>-->
                <!--                </v-layout>-->
              </v-img>

              <v-card-actions class="white justify-center">
                <div xs6 class="article-details">
                  <h4 class="post-category">Title</h4>
                  <v-tooltip top>
                    <template v-slot:activator="{ on }">
                      <h3
                        class=" truncate post-title grey--text text--darken-1 justify-center"
                        v-on="on"
                      >
                        This text has a tooltip are the file
                      </h3>
                    </template>
                    <span
                      >There will be a little pf pf pf pf pf pf pf little little
                    </span>
                  </v-tooltip>
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
            <v-card class="blog-card mx-2 my-2">
              <v-img
                class="post-image"
                src="https://source.unsplash.com/DnWYw0zLJBg"
                width="100%"
                height="100%"
              >
              </v-img>
              <v-card-actions class="white justify-center lastCardSize">
                <span class="my-5"
                  >Drop files, <a href="#"><b>Browse</b></a> or import</span
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

      <div class="mx-4 my-4 text-center">
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
.truncate {
  width: 240px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.lastCardSize {
  height: 158px !important;
}

.blog-card {
  display: flex;
  flex-direction: row;
  background: #fff;
  box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  overflow: hidden;
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

@supports (display: grid) {
  body {
    /*display: grid;*/
    /*grid-template-columns: repeat(4, 1fr);*/
    /*grid-gap: 0.625rem;*/
    /*grid-template-areas: ". main main ." ". main main .";*/
  }
  .blog-card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }

  @media (max-width: 49rem) {
    .blog-card {
      grid-template-columns: auto;
      grid-template-rows: 12rem 1fr;
    }
  }
}
</style>
