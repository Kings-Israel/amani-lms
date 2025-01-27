<script lang="ts" setup>
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { getAreaChartSplineConfig } from '@core/libs/apex-chart/apexCharConfig'

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
</script>

<template>
  <VueApexCharts
    type="area"
    height="400"
    :options="chartConfig"
    :series="series"
  />
</template>
