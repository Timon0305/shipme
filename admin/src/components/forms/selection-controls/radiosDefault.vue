
<!--============================
=            SELECTION CONTROLS   SELECTION CONTROLS       RADIOS DEFAULT     =
 ============================-->
 <template>
  <v-container fluid>
    <p>{{ radios || 'null' }}</p>
    <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="Radio 1" value="radio-1"></v-radio>
      <v-radio label="Radio 2" value="radio-2"></v-radio>
    </v-radio-group>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        radios: 'radio-1'
      }
    }
  }
</script>

<!--====  End of SELECTION CONTROLS   SELECTION CONTROLS       RADIOS DEFAULT  ====-->

                