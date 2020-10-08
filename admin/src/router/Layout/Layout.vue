<!--===================================
=            LAYOUT            =
====================================-->
<template>
  <div class="appDashboard">
    <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
      <app-header></app-header>
      <div class="body-2  mr-4">The <code> v-responsive</code> comp onent can be used to fix any section to a specific
        aspect ratio</div>
    </div>
    <app-card class="xs12 md12 d-flex" :dark="dark" :obj="{title:_.capitalize(_.startCase('Layout')),subTitle:'',icon:''}">
      <div slot="body">
        <v-navigation-drawer v-model="primaryDrawer.model" :permanent="primaryDrawer.type === 'permanent'" :temporary="primaryDrawer.type === 'temporary'"
          :clipped="primaryDrawer.clipped" :floating="primaryDrawer.floating" :mini-variant="primaryDrawer.mini"
          absolute overflow app>
          <v-list>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>home</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile>

            <v-list-group prepend-icon="account_circle" value="true">
              <v-list-tile slot="activator">
                <v-list-tile-title>Users</v-list-tile-title>
              </v-list-tile>

              <v-list-group no-action sub-group value="true">
                <v-list-tile slot="activator">
                  <v-list-tile-title>Admin</v-list-tile-title>
                </v-list-tile>

                <v-list-tile v-for="(admin, i) in admins" :key="i">
                  <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
                  <v-list-tile-action>
                    <v-icon v-text="admin[1]"></v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list-group>

              <v-list-group sub-group no-action>
                <v-list-tile slot="activator">
                  <v-list-tile-title>Actions</v-list-tile-title>
                </v-list-tile>

                <v-list-tile v-for="(crud, i) in cruds" :key="i">
                  <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
                  <v-list-tile-action>
                    <v-icon v-text="crud[1]"></v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list-group>
            </v-list-group>
          </v-list>
        </v-navigation-drawer>
        <v-toolbar :clipped-left="primaryDrawer.clipped" app absolute>
          <v-toolbar-side-icon v-if="primaryDrawer.type !== 'permanent'" @click.stop="primaryDrawer.model = !primaryDrawer.model"></v-toolbar-side-icon>
          <v-toolbar-title>Vuetify</v-toolbar-title>
        </v-toolbar>
        <v-content>
          <v-container fluid>
            <v-layout align-center justify-center>
              <v-flex xs10>
                <v-card>
                  <v-card-text>
                    <v-layout row wrap>
                      
                      <v-flex xs12 md6>
                        <span>Drawer</span>
                        <v-radio-group v-model="primaryDrawer.type" column>
                          <v-radio v-for="drawer in drawers" :key="drawer" :label="drawer" :value="drawer.toLowerCase()"
                            primary></v-radio>
                        </v-radio-group>
                        <v-switch v-model="primaryDrawer.clipped" label="Clipped" primary></v-switch>
                        <v-switch v-model="primaryDrawer.floating" label="Floating" primary></v-switch>
                        <v-switch v-model="primaryDrawer.mini" label="Mini" primary></v-switch>
                      </v-flex>
                      <v-flex xs12 md6>
                        <span>Footer</span>
                        <v-switch v-model="footer.inset" label="Inset" primary></v-switch>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat>Cancel</v-btn>
                    <v-btn flat color="primary">Submit</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-content>
        <v-footer :inset="footer.inset" app>
          <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
      </div>
    </app-card>

  </div>
</template>

<script>
  export default {
    data: () => ({
      dark: true,
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        mini: false,
        admins: [
          ['Management', 'people_outline'],
          ['Settings', 'settings']
        ],
        cruds: [
          ['Create', 'add'],
          ['Read', 'insert_drive_file'],
          ['Update', 'update'],
          ['Delete', 'delete']
        ]
      },
      footer: {
        inset: false
      }
    })
  }

</script>
<style>
  .appDashboard {
    z-index: 9;
  }

  .appDashboard__bigChart {
    width: 100%;
  }

</style>


<!--====  End of LAYOUT  ====-->
