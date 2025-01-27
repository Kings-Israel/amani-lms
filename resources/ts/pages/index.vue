<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { getAreaChartSplineConfig } from '@core/libs/apex-chart/apexCharConfig'
import CardStatisticsHorizontal from '@core/components/CardStatisticsHorizontal.vue'
import ApexChartAreaChart from '@/views/charts/apex-chart/ApexChartAreaChart.vue'

const vuetifyTheme = useTheme()

const chartConfig = computed(() => getAreaChartSplineConfig(vuetifyTheme.current.value))

const series = [
  {
    name: 'Loans Disbursed Count',
    data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375],
  },
  {
    name: 'Loans Amount',
    data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275],
  },
]

const repayment_series = [
  {
    name: 'Loans Repaid Count',
    data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375],
  },
  {
    name: 'Paid Amount',
    data: [60, 80, 70, 110, 80, 10, 90, 180, 160, 140, 200, 220, 270],
  },
]

const statistics = [
  {
    title: 'Customers',
    stats: '2000',
    icon: 'tabler-users',
    color: 'warning',
  },
  {
    title: 'Active Loans',
    stats: '50',
    icon: 'tabler-check',
    color: 'success',
  },
  {
    title: 'Dibsursed Amounts',
    stats: 'KES 10,000',
    icon: 'tabler-currency-dollar',
    color: 'success',
  },
  {
    title: 'Loans With Arrears',
    stats: '20',
    icon: 'tabler-coins',
    color: 'error',
  },
  {
    title: 'Total Arrears',
    stats: 'KES 5,200',
    icon: 'tabler-receipt-2',
    color: 'error',
  },
  {
    title: 'Loans Due Today',
    stats: '40',
    icon: 'tabler-moneybag',
    color: 'info',
  },
  {
    title: 'Value of Loans Due Today',
    stats: 'KES 2000',
    icon: 'tabler-businessplan',
    color: 'info',
  },
]

const statisticsHorizontal = [
  {
    title: 'Total Payments',
    color: 'success',
    icon: 'tabler-graph',
    stats: 'KES 86,000',
  },
  {
    title: 'MTD Dibursed Loans',
    color: 'success',
    icon: 'tabler-books',
    stats: '20 Loans',
  },
  {
    title: 'Paid Amount',
    color: 'success',
    icon: 'tabler-chart-pie-2',
    stats: 'KES 50,000',
  },
  {
    title: 'Total Profit',
    color: 'success',
    icon: 'tabler-chart-bar',
    stats: 'KES 128',
  },
]
</script>

<template>
  <div>
    <VCard title="Statistics">
      <template #append>
        <span class="text-body-2">Updated 1 hour ago</span>
      </template>

      <VCardText class="pt-6">
        <VRow>
          <VCol
            v-for="item in statistics"
            :key="item.title"
            cols="6"
            md="3"
          >
            <div class="d-flex">
              <VAvatar
                :color="item.color"
                variant="tonal"
                size="42"
                class="me-3"
              >
                <VIcon
                  size="24"
                  :icon="item.icon"
                />
              </VAvatar>

              <div class="d-flex flex-column">
                <span class="text-h6 font-weight-medium">{{ item.stats }}</span>
                <span class="text-caption">
                  {{ item.title }}
                </span>
              </div>
            </div>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
    <VRow class="match-height mt-2">
      <VCol
        v-for="payments in statisticsHorizontal"
        :key="payments.title"
        cols="12"
        sm="6"
        md="3"
      >
        <CardStatisticsHorizontal v-bind="payments" />
      </VCol>

      <VCol cols="12">
        <VCard>
          <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
            <VCardTitle>Monthly Disbursement Data - November 2024</VCardTitle>
            <VCardSubtitle>Graph displaying Loan Disbursements and Total Disbursed Amount</VCardSubtitle>

            <template #append>
              <div class="date-picker-wrapper">
                <AppDateTimePicker
                  model-value="2022-06-09"
                  prepend-inner-icon="tabler-calendar"
                  density="compact"
                  :config="{ position: 'auto right' }"
                />
              </div>
            </template>
          </VCardItem>

          <VCardText>
            <VueApexCharts
              type="area"
              height="400"
              :options="chartConfig"
              :series="series"
            />
          </VCardText>
        </VCard>
      </VCol>

      <VCol cols="12">
        <VCard>
          <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
            <VCardTitle>Monthly Repayments Data - November 2024</VCardTitle>
            <VCardSubtitle>Repayments Include both loan settlements and loan processing fees</VCardSubtitle>

            <template #append>
              <div class="date-picker-wrapper">
                <AppDateTimePicker
                  model-value="2022-06-09"
                  prepend-inner-icon="tabler-calendar"
                  density="compact"
                  :config="{ position: 'auto right' }"
                />
              </div>
            </template>
          </VCardItem>

          <VCardText>
            <VueApexCharts
              type="area"
              height="400"
              :options="chartConfig"
              :series="repayment_series"
            />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss">
@use "@core-scss/template/libs/apex-chart.scss";

.date-picker-wrapper {
  inline-size: 10.5rem;
}

#apex-chart-wrapper {
  .v-card-item__append {
    padding-inline-start: 0;
  }
}
</style>
