<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components'

import type { CustomerProperties, LoanProperties, RefereeProperties } from '@/@fake-db/types'
import { emailValidator, requiredValidator } from '@validators'

interface Emit {
  (e: 'userData', value: CustomerProperties): void
  (e: 'loanData', value: LoanProperties): void
  (e: 'refereeData', value: RefereeProperties): void
}

const emit = defineEmits<Emit>()

const isFormValid = ref(false)
const refForm = ref<VForm>()
const salutation = ref('')
const fullName = ref('')
const email = ref('')
const phoneNumber = ref('')
const idNumber = ref('')
const country = ref('')
const county = ref('')
const constituency = ref('')
const ward = ref('')

const refereeFullName = ref('')
const refereePhoneNumber = ref('')
const refereeIdNumber = ref('')

const loanProduct = ref('')
const loanRepaymentType = ref('')
const negotiatedInstallments = ref(0)
const loanAmount = ref(0)
const loanPurpose = ref('')
const businessType = ref('')

const salutations = ref([
  'Mr', 'Mrs', 'Ms',
])

const countries = ref([
  'Kenya', 'Uganda',
])

const counties = ref([
  'Nairobi', 'Mombasa',
])

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
      emit('userData', {
        salutation: salutation.value,
        fullName: fullName.value,
        phoneNumber: phoneNumber.value,
        email: email.value,
        idNumber: idNumber.value,
        country: country.value,
        county: county.value,
        constituency: constituency.value,
        ward: ward.value,
      })
      emit('loanData', {
        product: loanProduct.value,
        repaymentType: loanRepaymentType.value,
        negotiatedInstallments: negotiatedInstallments.value,
        loanAmount: loanAmount.value,
        loanPurpose: loanPurpose.value,
        businessType: businessType.value,
      })
      emit('refereeData', {
        fullName: refereeFullName.value,
        phoneNumber: refereePhoneNumber.value,
        idNumber: refereeIdNumber.value,
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
        Add Borrower
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
              User Details
            </h6>
            <VRow>
              <!-- 👉 Title -->
              <VCol cols="3">
                <VSelect
                  v-model="salutation"
                  label="Select Title"
                  :rules="[requiredValidator]"
                  :items="salutations"
                />
              </VCol>

              <!-- 👉 Full name -->
              <VCol cols="3">
                <VTextField
                  v-model="fullName"
                  :rules="[requiredValidator]"
                  label="Full Name"
                />
              </VCol>

              <!-- 👉 Email -->
              <VCol cols="3">
                <VTextField
                  v-model="email"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                />
              </VCol>

              <!-- 👉 Contact -->
              <VCol cols="3">
                <VTextField
                  v-model="phoneNumber"
                  type="number"
                  :rules="[requiredValidator]"
                  label="Phone Number (7xxxxxxxx)"
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
              Referee Details
            </h6>

            <VRow>
              <!-- 👉 Full name -->
              <VCol cols="4">
                <VTextField
                  v-model="refereeFullName"
                  :rules="[requiredValidator]"
                  label="Referee's Full Name"
                />
              </VCol>

              <!-- 👉 Contact -->
              <VCol cols="4">
                <VTextField
                  v-model="refereePhoneNumber"
                  type="number"
                  :rules="[requiredValidator]"
                  label="Referee's Phone Number (7xxxxxxxx)"
                />
              </VCol>

              <!-- 👉 ID Number -->
              <VCol cols="4">
                <VTextField
                  v-model="refereeIdNumber"
                  :rules="[requiredValidator]"
                  label="Referee's ID Number"
                />
              </VCol>
            </VRow>

            <h6 class="text-h6 my-6">
              Location
            </h6>

            <VRow>
              <!-- 👉 Country -->
              <VCol cols="3">
                <VSelect
                  v-model="country"
                  :rules="[requiredValidator]"
                  label="Country"
                  :items="countries"
                />
              </VCol>

              <!-- 👉 County -->
              <VCol cols="3">
                <VSelect
                  v-model="county"
                  label="County"
                  :rules="[requiredValidator]"
                  :items="counties"
                />
              </VCol>

              <!-- 👉 Constituency -->
              <VCol cols="3">
                <VTextField
                  v-model="constituency"
                  label="Constituency"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol cols="3">
                <VTextField
                  v-model="ward"
                  label="Ward"
                  :rules="[requiredValidator]"
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
