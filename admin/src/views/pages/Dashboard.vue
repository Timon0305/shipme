<template>
    <div>
        <div class="row">
            <div class="col-xl-4 col-lg-4 order-lg-2 order-xl-1"></div>
            <div class="col-xl-4 col-lg-4 order-lg-2 order-xl-1"></div>
            <div class="col-xl-4 col-lg-4 order-lg-2 order-xl-1"></div>
        </div>
        <br>

        <div class="mt-4">
            <mdb-datatable-2 v-model="data" />
        </div>
    </div>
</template>

<script>
import { mdbDatatable2 } from 'mdbvue';
import axios from 'axios';
import {API_URL} from '../../common/config';
const url = API_URL + '/v1/api/admin/list/';
const token = localStorage.getItem('authUser');
export default {
  name: "dashboard",
  components: {
      mdbDatatable2
  },

    data() {
        return {
            data: {
                columns: [
                    {
                        label: 'No',
                        field: 'no',
                        sort: true
                    },
                    {
                        label: 'Sender',
                        field: 'sender',
                        sort: true
                    },
                    {
                        label: 'Receiver',
                        field: 'receiver',
                        sort: true
                    },
                    {
                        label: 'Status',
                        field: 'status',
                        sort: true
                    },
                    {
                        label: 'Start Date',
                        field: 'date',
                        sort: true
                    },
                    {
                        label: 'Price',
                        field: 'price',
                        sort: false,
                        format: value => "Rp" + value
                    }
                ],
                rows: [

                ]
            }
        }
    },
    created () {
      axios.get(url + 'getList', {headers: {
              'Authorization': token
          }
      }).then(res => {
          const rows = [{
              no: 'Tiger Nixon',
              sender: 'System Architect',
              receiver: 'Edinburgh',
              status: '61',
              date: '2011/04/25',
              price: '$320'
          }];
          console.log(res['data'], rows );

      })
    }
};
</script>
