
<!--============================
=            SELECTION CONTROLS   SELECTION CONTROLS       CHECKBOXES ARRAY     =
 ============================-->
 <template>
  <v-container fluid>
    <p>{{ selected }}</p>
    <v-checkbox v-model="selected" label="John" value="John"></v-checkbox>
    <v-checkbox v-model="selected" label="Jacob" value="Jacob"></v-checkbox>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        selected: ['John']
      }
    }
  }
</script>

<!--====  End of SELECTION CONTROLS   SELECTION CONTROLS       CHECKBOXES ARRAY  ====-->

                