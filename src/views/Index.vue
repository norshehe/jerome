<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <h2 class="font-bold text-lg my-3 text-center border-b pb-5">
      Sales Order
    </h2>

    <div class="flex col-span-2 gap-3">
      <form class="space-y-8 divide-y divide-gray-200 w-full">
        <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div>
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Order Information
              </h3>
            </div>
            <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div
                class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200"
              >
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  ID No
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg flex rounded-md shadow-sm">
                    <el-input
                      size="small"
                      type="text"
                      v-model="orderInformation.id"
                    />
                  </div>
                </div>
              </div>
              <div
                class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200"
              >
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Transaction Type
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg flex rounded-md shadow-sm">
                    <el-input
                      size="small"
                      type="text"
                      v-model="orderInformation.transactionType"
                    />
                  </div>
                </div>
              </div>
              <div
                class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200"
              >
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  SO Number
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg flex rounded-md shadow-sm">
                    <el-input
                      size="small"
                      type="text"
                      v-model="orderInformation.soNumber"
                    />
                  </div>
                </div>
              </div>
              <div
                class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200"
              >
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Transaction Date
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg flex rounded-md shadow-sm">
                    <el-date-picker
                      class="w-full"
                      size="small"
                      v-model="orderInformation.transactionDate"
                    />
                  </div>
                </div>
              </div>
              <div
                class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200"
              >
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Sub Total
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg flex rounded-md shadow-sm">
                    <el-input size="small" type="text" :model-value="totalSub">
                      <template #prepend>PHP</template>
                    </el-input>
                  </div>
                </div>
              </div>
              <div
                class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200"
              >
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  B1T1 Discount
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg flex rounded-md shadow-sm">
                    <el-input
                      size="small"
                      type="text"
                      v-model="orderInformation.b1t1Discount"
                    >
                      <template #prepend>PHP</template>
                    </el-input>
                  </div>
                </div>
              </div>
              <div
                class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200"
              >
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Shipping Fee
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg flex rounded-md shadow-sm">
                    <el-input
                      size="small"
                      type="text"
                      v-model="orderInformation.shippingFee"
                    >
                      <template #prepend>PHP</template></el-input
                    >
                  </div>
                </div>
              </div>
              <div
                class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200"
              >
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Grand Total
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg flex rounded-md shadow-sm">
                    <el-input
                      size="small"
                      type="text"
                      :model-value="grandTotal"
                    >
                      <template #prepend>PHP</template></el-input
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <form class="space-y-8 divide-y divide-gray-200 w-full">
        <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div>
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Delivery Details
              </h3>
            </div>
            <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div
                class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200"
              >
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Name
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg flex rounded-md shadow-sm">
                    <el-input
                      size="small"
                      type="text"
                      v-model="deliveryDetails.name"
                    />
                  </div>
                </div>
              </div>
              <div
                class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200"
              >
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Contact Name
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg flex rounded-md shadow-sm">
                    <el-input
                      size="small"
                      type="text"
                      v-model="deliveryDetails.contactName"
                    />
                  </div>
                </div>
              </div>

              <div
                class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200"
              >
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Email
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg flex rounded-md shadow-sm">
                    <el-input
                      size="small"
                      type="text"
                      v-model="deliveryDetails.email"
                    />
                  </div>
                </div>
              </div>
              <div
                class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200"
              >
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Details
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg flex rounded-md shadow-sm">
                    <el-input
                      size="small"
                      type="text"
                      v-model="deliveryDetails.details"
                    />
                  </div>
                </div>
              </div>
              <div
                class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200"
              >
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Shipping Status
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg flex rounded-md shadow-sm">
                    <el-input
                      size="small"
                      type="text"
                      v-model="deliveryDetails.shippingStatus"
                    />
                  </div>
                </div>
              </div>
              <div
                class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200"
              >
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Bill No.
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg flex rounded-md shadow-sm">
                    <el-input
                      size="small"
                      type="text"
                      v-model="deliveryDetails.billNo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="flex flex-col py-5">
      <div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Item Details
        </h3>
      </div>
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Item
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Subtotal
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(table, tableIndex) in itemTable" :key="tableIndex">
                  <td
                    class="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    <el-select
                      v-model="itemTable[tableIndex].index"
                      @change="fillItem(tableIndex, $event)"
                      size="small"
                      class="w-full"
                      filterable
                    >
                      <el-option
                        v-for="(item, index) in items"
                        :key="index"
                        :label="item.productName"
                        :value="index"
                      ></el-option>
                    </el-select>
                  </td>
                  <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                    <el-input v-model="itemTable[tableIndex].srp" size="small">
                      <template #prepend>
                        <el-select
                          @change="fillItem(tableIndex, $event)"
                          v-model="itemTable[tableIndex].isDistributor"
                          placeholder="Select"
                          size="small"
                          style="width: 80px"
                        >
                          <el-option
                            label="Distributor"
                            :value="true"
                          ></el-option>
                          <el-option label="SRP" :value="false"></el-option>
                        </el-select>
                      </template>
                    </el-input>
                  </td>
                  <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                    <el-input
                      size="small"
                      v-model="itemTable[tableIndex].quantity"
                    ></el-input>
                  </td>
                  <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                    <el-input
                      readonly
                      size="small"
                      :model-value="getSubTotal(tableIndex)"
                    >
                      <template #prepend>PHP</template>
                    </el-input>
                  </td>
                  <td
                    class="px-3 py-2 whitespace-nowrap text-right text-sm font-medium"
                  >
                    <el-button
                      @click="addItem"
                      icon="el-icon-plus"
                      type="warning"
                      size="small"
                    ></el-button>
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-3 py-2 whitespace-nowrap text-sm font-bold text-gray-700"
                    colspan="3"
                  >
                    Subtotal
                  </td>

                  <td
                    class="px-3 py-2 whitespace-nowrap text-right text-sm font-medium"
                  >
                    PHP {{ totalSub }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="flex col-span-2 gap-3">
      <form class="space-y-8 divide-y divide-gray-200 w-full">
        <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div>
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Payment Information
              </h3>
            </div>
            <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div
                class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200"
              >
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Payment Status
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg flex rounded-md shadow-sm">
                    <el-input
                      size="small"
                      type="text"
                      v-model="paymentInfo.status"
                    />
                  </div>
                </div>
              </div>
              <div
                class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200"
              >
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  PPV Payment
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg flex rounded-md shadow-sm">
                    <el-input
                      size="small"
                      type="text"
                      v-model="paymentInfo.ppvPayment"
                    >
                      <template #prepend>PHP</template>
                    </el-input>
                  </div>
                </div>
              </div>
              <div
                class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200"
              >
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Total
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg flex rounded-md shadow-sm">
                    <el-input
                      size="small"
                      type="text"
                      v-model="paymentInfo.ppvPayment"
                    >
                      <template #prepend>PHP</template>
                    </el-input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div class="flex justify-end my-5">
    <el-button type="danger">Print</el-button>
  </div>
</template>
<script>
import { computed, defineComponent, reactive, ref } from "vue";
import { items } from "@/views/items.js";
export default defineComponent({
  setup() {
    const orderInformation = reactive({
      id: "",
      transactionType: "",
      soNumber: "",
      transactionDate: new Date(),
      b1t1Discount: 0,
      shippingFee: 0,
    });
    const deliveryDetails = reactive({
      name: "",
      contactName: "",
      email: "",
      details: "",
      shippingStatus: "",
      billNo: "",
    });
    const paymentInfo = reactive({
      status: "",
      ppvPayment: "",
      total: "",
    });
    const itemTable = ref([
      { index: null, isDistributor: false, srp: 0, quantity: 1 },
    ]);
    function fillItem(tableIndex, index) {
      const item = items.find((d, i) => i == index);
      if (item) {
        if (itemTable.value[tableIndex].isDistributor == true) {
          itemTable.value[tableIndex].srp = item.distributorPrice;
        } else {
          itemTable.value[tableIndex].srp = item.srp;
        }
      }

      console.log(tableIndex, index);
    }
    function getSubTotal(tableIndex) {
      return (
        itemTable.value[tableIndex].srp * itemTable.value[tableIndex].quantity
      );
    }
    function addItem() {
      itemTable.value.push({
        index: null,
        isDistributor: false,
        srp: 0,
        quantity: 1,
      });
    }
    const totalSub = computed(() => {
      let total = 0;
      itemTable.value.map((d, index) => {
        total = total + getSubTotal(index);
      });
      return total;
    });
    const grandTotal = computed(() => {
      let total = 0;
      itemTable.value.map((d, index) => {
        total = total + getSubTotal(index);
      });

      return (
        total + +orderInformation.shippingFee - +orderInformation.b1t1Discount
      );
    });
    return {
      orderInformation,
      grandTotal,
      deliveryDetails,
      itemTable,
      items,
      fillItem,
      getSubTotal,
      addItem,
      totalSub,
      paymentInfo,
    };
  },
});
</script>
