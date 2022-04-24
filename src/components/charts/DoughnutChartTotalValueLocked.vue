<template>
  <div class="doughnut-chart-total-value-locked">
    <doughnut-chart
      :width="width"
      :height="height"
      :plugins="[htmlLegendPlugin]"
      :chartData="chartData"
      :chartOptions="chartOptions"
    />
    <div class="legend-container"></div>
  </div>
</template>

<script>
import DoughnutChart from "@/components/charts/DoughnutChart.vue";

const getOrCreateLegendList = () => {
  const legendContainer = document.querySelector(".legend-container");
  let listContainer = legendContainer.querySelector("ul");

  if (!listContainer) {
    listContainer = document.createElement("ul");

    legendContainer.appendChild(listContainer);
  }

  return listContainer;
};

export default {
  components: {
    DoughnutChart,
  },
  props: {
    width: {
      type: Number,
      default: 175,
    },
    height: {
      type: Number,
      default: 175,
    },
  },
  data() {
    return {
      chartData: {
        labels: ["Total Deposit", "Fixed Interest"],
        datasets: [
          {
            data: [40, 20],
            backgroundColor: ["#A81B15", "#EDC612"],
            borderWidth: 0,
            cutout: "80%",
          },
        ],
      },
      chartOptions: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
      htmlLegendPlugin: {
        id: "htmlLegend",
        afterUpdate(chart) {
          const ul = getOrCreateLegendList();

          // Remove old legend items
          while (ul.firstChild) {
            ul.firstChild.remove();
          }

          // Reuse the built-in legendItems generator
          const items =
            chart.options.plugins.legend.labels.generateLabels(chart);

          items.forEach((item, index) => {
            const li = document.createElement("li");
            const boxSpan = document.createElement("span");
            const textContainer1 = document.createElement("p");
            const textContainer2 = document.createElement("p");
            const text = document.createTextNode(item.text);
            const value = document.createTextNode(
              `${chart.config.data.datasets[0].data[index]} USDT`
            );

            boxSpan.style.backgroundColor =
              chart.config.data.datasets[0].backgroundColor[index];
            textContainer1.appendChild(boxSpan);
            textContainer1.appendChild(text);
            textContainer2.appendChild(value);

            li.appendChild(textContainer1);
            li.appendChild(textContainer2);
            ul.appendChild(li);
          });
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.doughnut-chart-total-value-locked {
  display: flex;
  justify-content: center;
  align-items: center;

  .legend-container {
    display: flex;
    flex-direction: column;

    ::v-deep {
      > ul {
        margin-left: 50px;
        padding: 0;
        list-style-type: none;

        > li {
          & + li {
            margin-top: 16px;
          }

          p {
            position: relative;
            margin: 0;
            padding-left: 24px;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.02em;
            color: $brand-dark;

            &:first-child {
              margin-bottom: 8px;
              color: $gray-2;
            }
          }

          span {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>
