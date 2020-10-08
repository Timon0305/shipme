
<!--============================
=            SUBHEADERS   SUBHEADERS       GRID     =
 ============================-->
 <template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="white" flat>
          <v-btn icon light>
            <v-icon color="grey darken-2">arrow_back</v-icon>
          </v-btn>

          <v-toolbar-title class="grey--text text--darken-4">Albums</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon light>
            <v-icon color="grey darken-2">search</v-icon>
          </v-btn>
        </v-toolbar>

        <v-subheader>May</v-subheader>
        <v-container fluid grid-list-xs>
          <v-layout row wrap>
            <v-flex
              v-for="i in 6"
              :key="i"
              xs4
            >
              <img
                :src="`/static/images/small/${i}.jpg`"
                alt="lorem"
                class="image"
                height="100%"
                width="100%"
              >
            </v-flex>
          </v-layout>
        </v-container>

        <v-subheader>June</v-subheader>
        <v-container fluid grid-list-xs>
          <v-layout row wrap>
            <v-flex
              v-for="i in 6"
              :key="i"
              xs4
            >
              <img
                 :src="`/static/images/small/${i}.jpg`"
                alt="lorem"
                class="image"
                height="100%"
                width="100%"
              >
            </v-flex>
          </v-layout>
        </v-container>

        <v-footer class="mt-5"></v-footer>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<!--====  End of SUBHEADERS   SUBHEADERS       GRID  ====-->

