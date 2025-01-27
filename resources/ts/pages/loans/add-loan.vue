<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components'

import type { LoanProperties } from '@/@fake-db/types'
import { requiredValidator } from '@validators'

interface Emit {
  (e: 'loanData', value: LoanProperties): void
}

const emit = defineEmits<Emit>()

const isFormValid = ref(false)
const refForm = ref<VForm>()
const fullName = ref('')
const idNumber = ref('')

const loanProduct = ref('')
const loanRepaymentType = ref('')
const negotiatedInstallments = ref(0)
const loanAmount = ref(0)
const loanPurpose = ref('')
const businessType = ref('')
const idFront = ref('')
const idBack = ref('')
const guarantorId = ref('')

const loan_products = ref([
  'Loan Product 1', 'Loan Product 2',
])

const loan_repayment_types = ref([
  'Daily', 'Weekly',
])

const loan_amounts = ref([
  '5000', '8000', '10000', '20000',
])

const loan_purposes = ref([
  'Start Business', 'Business Expense',
])

const business_types = ref([
  'Tailoring', 'Beauty', 'Photography', 'Cleaning Services', 'Barber Shop', 'Legal Services',
])

const onSubmit = () => {
  refForm.value?.validate().then(({ valid }) => {
    if (valid) {
      emit('loanData', {
        product: loanProduct.value,
        repaymentType: loanRepaymentType.value,
        negotiatedInstallments: negotiatedInstallments.value,
        loanAmount: loanAmount.value,
        loanPurpose: loanPurpose.value,
        businessType: businessType.value,
        idFront: idFront.value,
        idBack: idBack.value,
        guarantorId: guarantorId.value,
      })
      nextTick(() => {
        refForm.value?.reset()
        refForm.value?.resetValidation()
      })
    }
  })
}
</script>

<template>
  <div>
    <!-- 👉 Title -->
    <div class="d-flex align-center pb-1">
      <h4 class="text-h4">
        Add Loan
      </h4>
    </div>
    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm
            ref="refForm"
            v-model="isFormValid"
            @submit.prevent="onSubmit"
          >
            <h6 class="text-h6 mb-3">
              Borrower
            </h6>
            <VRow>
              <!-- 👉 Full name -->
              <VCol cols="3">
                <VTextField
                  v-model="fullName"
                  :rules="[requiredValidator]"
                  label="Full Name"
                />
              </VCol>

              <!-- 👉 ID Number -->
              <VCol cols="3">
                <VTextField
                  v-model="idNumber"
                  :rules="[requiredValidator]"
                  label="ID Number"
                />
              </VCol>
            </VRow>

            <h6 class="text-h6 my-6">
              Loan Details
            </h6>

            <VRow>
              <!-- 👉 Product -->
              <VCol cols="3">
                <VSelect
                  v-model="loanProduct"
                  :rules="[requiredValidator]"
                  label="Product"
                  :items="loan_products"
                />
              </VCol>

              <!-- 👉 Repayment Type -->
              <VCol cols="3">
                <VSelect
                  v-model="loanRepaymentType"
                  label="Repayment Type"
                  :rules="[requiredValidator]"
                  :items="loan_repayment_types"
                />
              </VCol>

              <!-- 👉 Negotiated Installments -->
              <VCol cols="3">
                <VTextField
                  v-model="negotiatedInstallments"
                  label="Negotiated Installments"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <!-- 👉 Loan Amount -->
              <VCol cols="3">
                <VSelect
                  v-model="loanAmount"
                  label="Amount"
                  :rules="[requiredValidator]"
                  :items="loan_amounts"
                />
              </VCol>

              <!-- 👉 Purpose -->
              <VCol cols="3">
                <VSelect
                  v-model="loanPurpose"
                  label="Purpose"
                  :rules="[requiredValidator]"
                  :items="loan_purposes"
                />
              </VCol>

              <!-- 👉 Business Type -->
              <VCol cols="3">
                <VSelect
                  v-model="businessType"
                  label="Business Type"
                  :rules="[requiredValidator]"
                  :items="business_types"
                />
              </VCol>

              <VCol cols="6" />

              <!-- 👉 ID Front -->
              <VCol cols="3">
                <VFileInput
                  accept="image/*"
                  label="ID Front"
                />
              </VCol>

              <!-- 👉 ID Back -->
              <VCol cols="3">
                <VFileInput
                  accept="image/*"
                  label="ID Back"
                />
              </VCol>

              <!-- 👉 Guarantor ID -->
              <VCol cols="3">
                <VFileInput
                  accept="image/*"
                  label="Guarantor ID"
                />
              </VCol>
            </VRow>

            <VRow>
              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn
                  type="submit"
                  class="me-3"
                >
                  Submit
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </div>
</template>
