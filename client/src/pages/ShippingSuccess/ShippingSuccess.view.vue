<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 mt-5 ">
                <div class="text-center">
                    <h1>SHIPME</h1>
                </div>
                <div class="form-group check-icon text-center">
                    <b-icon icon="check2-circle" variant="success"></b-icon>
                </div>
                <div class="row">
                   <div class="col-md-6 text-md-left">
                       <p>Created Date and Time :</p>
                       <p>Shipping Type :</p>
                       <p>Shipping Service :</p>
                   </div>
                   <div class="col-md-6 text-md-right">
                       <p>{{shipCreated.split('T')[0]}} &nbsp; &nbsp; {{shipCreated.split('T')[1].split('.')[0]}}</p>
                       <p>{{shipType}}</p>
                       <p>{{shipService}}</p>
                   </div>
                </div>
                <hr class="dotted">
                <div class="row">
                    <div class="col-md-6 text-md-left">
                        <p>Sender User :</p>
                        <p>Sender Address :</p>
                        <p>Sender Country :</p>
                    </div>
                    <div class="col-md-6 text-md-right">
                        <p>{{senderUser}}</p>
                        <p>{{senderAddress}}</p>
                        <p>{{senderCounty}}</p>
                    </div>
                </div>
                <hr class="dotted">
                <div class="row">
                    <div class="col-md-6 text-md-left">
                        <p>Receiver User :</p>
                        <p>Receiver Address :</p>
                        <p>Receiver Country :</p>
                    </div>
                    <div class="col-md-6 text-md-right">
                        <p>{{receiverUser}}</p>
                        <p>{{receiverAddress}}</p>
                        <p>{{receiverCountry}}</p>
                    </div>
                </div>
                <hr class="dotted">
                <div class="row">
                    <div class="col-md-6 text-md-left">
                        <p>Quantity :</p>
                        <p>Volume :</p>
                        <p>Weight : </p>
                    </div>
                    <div class="col-md-6 text-md-right">
                        <p>{{shipQuantity}}</p>
                        <p>{{shipVolume}} m3</p>
                        <p>{{shipWeight}} kg</p>
                    </div>
                </div>
                <div class="text-center">
                    <div class="text-center">
                        <h3>Total Price : Rp {{shipPrice}}</h3>
                    </div>
                    <br>
                    <b-button class="confirm" variant="info" @click="paymentConfirm">Confirm</b-button>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</template>

<script>
    import {BIcon} from 'bootstrap-vue';
    export default {
        name: "shippingsuccess",
        component: {BIcon},
        data() {
            const sender = JSON.parse(localStorage.getItem('origin'));
            const receiver = JSON.parse(localStorage.getItem('aim'));
            const payment = JSON.parse(localStorage.getItem('payment'));
            console.log(sender, receiver, payment);
            return {
                shipCreated: payment.created_at,
                senderUser: sender.fullName,
                senderCity: sender.city,
                senderAddress: sender.addressOne,
                senderCounty : sender.country,
                receiverUser: receiver.fullName,
                receiverCity: receiver.city,
                receiverAddress: receiver.addressOne ,
                receiverCountry: receiver.country,
                shipType: payment.type,
                shipPurpose: payment.purpose,
                shipService: payment.service,
                shipQuantity: payment.items,
                shipVolume: payment.volume,
                shipWeight: payment.weights,
                shipPrice: payment.price
            }
        },
        methods : {
            paymentConfirm() {
                localStorage.clear();
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
.jumbotron {
    background: #fff;
}
.check-icon {
    font-size: 100px;
}
.dotted {
    border-top: 1px dashed darkgrey;
    margin-top: 0px;
}
.confirm {
    width: 80%;
}
</style>
