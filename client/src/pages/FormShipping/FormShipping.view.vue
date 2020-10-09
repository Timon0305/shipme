<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <horizontal-stepper
                    :steps="demoSteps" @completed-step="completeStep"
                    @active-step="isStepActive" @stepper-finished="alert"
            >
            </horizontal-stepper>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HorizontalStepper from 'vue-stepper';
import SenderForm from "../../components/FormShippings/SenderForm";
import ReceiverForm from "../../components/FormShippings/ReceiverForm";
import PayloadForm from "../../components/FormShippings/PayloadForm";

export default {
    name: "form-shipping",
    components: {
      HorizontalStepper
    },
    data() {
      return {
          demoSteps: [
              {
                  icon: 'check',
                  name: 'first',
                  title: 'Pengirim',
                  subtitle: '',
                  component: SenderForm,
                  completed: false

              },
              {
                  icon: 'check',
                  name: 'second',
                  title: 'Penerima',
                  subtitle: '',
                  component: ReceiverForm,
                  completed: false
              },
              {
                  icon: 'check',
                  name: 'third',
                  title: 'Documen',
                  subtitle: '',
                  component: PayloadForm,
                  completed: false
              }
          ]
      }
    },
    methods: {
        completeStep(payload) {
            this.demoSteps.forEach((step) => {
                if (step.name === payload.name) {
                    step.completed = true;
                }
            })
        },
        // Executed when @active-step event is triggered
        isStepActive(payload) {
            this.demoSteps.forEach((step) => {
                if (step.name === payload.name) {
                    if(step.completed === true) {
                        step.completed = false;
                    }
                }
            })
        },
        alert(payload) {
            alert(payload)
        }
    }
};
</script>

<style>
</style>
