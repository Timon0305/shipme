
<!--============================
=            IMAGES   IMAGES       MAX HEIGHT     =
 ============================-->
 <template>
  <v-container
    fluid
    grid-list-lg
    fill-height
    style="min-height: 434px"
  >
    <v-fade-transition mode="out-in">
      <v-layout v-if="show" key="0" wrap>
        <v-flex xs6>
          <v-card>
            <v-img
               src="/static/images/small/1.jpg"
              height="125"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">height</v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs6>
          <v-card>
            <v-img
               src="/static/images/small/3.jpg"
              height="125"
              contain
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">height with contain</v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs6>
          <v-card>
            <v-img
              src="/static/images/small/2.jpg"
              max-height="125"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">max-height</v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs6>
          <v-card>
            <v-img
              src="/static/images/2.png"
              max-height="125"
              contain
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">max-height with contain</v-card-title>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout v-else key="1" justify-center>
        <v-btn flat @click="show = true">Load images</v-btn>
      </v-layout>
    </v-fade-transition>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      show: false
    })
  }
</script>

<!--====  End of IMAGES   IMAGES       MAX HEIGHT  ====-->

