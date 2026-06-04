<template>
  <div class="q-pa-md">
    <div class="row items-center q-mb-md">
      <div class="col">
        <div class="text-h5 text-weight-bold text-grey-9">주문 관리</div>
        <div class="text-caption text-grey-7 q-mt-xs">
          주문 상태별 현황과 송장 입력을 관리합니다.
        </div>
      </div>
    </div>

    <!-- 1. 상단 요약 카드 -->
    <div class="row q-col-gutter-md q-mb-lg">
      <div
        v-for="card in summaryCards"
        :key="card.status"
        class="col-6 col-sm-4 col-md"
      >
        <q-card flat bordered class="summary-card">
          <q-card-section class="q-pa-md">
            <div class="row items-center no-wrap">
              <q-avatar
                :color="card.color"
                text-color="white"
                :icon="card.icon"
                size="40px"
                class="q-mr-md"
              />
              <div>
                <div class="text-caption text-grey-7">{{ card.status }}</div>
                <div class="text-h5 text-weight-bold text-grey-9">
                  {{ statusCounts[card.status] }}
                  <span class="text-body2 text-grey-6">건</span>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- 2. 주문 목록 테이블 -->
    <q-card flat bordered>
      <q-card-section class="q-pb-none">
        <div class="text-subtitle1 text-weight-bold text-grey-9">
          주문 목록
        </div>
      </q-card-section>

      <q-table
        :rows="orders"
        :columns="columns"
        row-key="id"
        flat
        bordered
        separator="horizontal"
        :rows-per-page-options="[10, 20]"
        class="q-mt-sm"
      >
        <template #body-cell-amount="props">
          <q-td :props="props" class="text-right text-weight-medium">
            {{ formatCurrency(props.row.amount) }}
          </q-td>
        </template>

        <template #body-cell-status="props">
          <q-td :props="props">
            <q-badge
              :color="statusBadgeColor(props.row.status)"
              :label="props.row.status"
              class="q-px-sm q-py-xs"
            />
          </q-td>
        </template>

        <template #body-cell-actions="props">
          <q-td :props="props">
            <q-btn
              v-if="showInvoiceButton(props.row.status)"
              unelevated
              dense
              color="primary"
              label="송장 입력"
              icon="local_shipping"
              class="q-px-sm"
              @click="openInvoiceDialog(props.row)"
            />
            <q-btn
              v-else-if="props.row.status === '배송중'"
              unelevated
              dense
              outline
              color="info"
              label="배송 추적"
              icon="pin_drop"
              class="q-px-sm"
              @click="trackShipment(props.row)"
            />
            <span v-else class="text-grey-5 text-caption">—</span>
          </q-td>
        </template>
      </q-table>
    </q-card>

    <!-- 3. 송장 입력 팝업 -->
    <q-dialog v-model="invoiceDialogOpen" persistent>
      <q-card style="min-width: 360px; max-width: 420px" class="q-pa-sm">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-weight-bold">송장 입력</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section v-if="selectedOrder">
          <div class="text-caption text-grey-7 q-mb-md">
            주문번호
            <span class="text-grey-9 text-weight-medium">
              {{ selectedOrder.orderNumber }}
            </span>
            · {{ selectedOrder.customerName }}
          </div>

          <q-select
            v-model="invoiceForm.courier"
            :options="courierOptions"
            label="택배사"
            outlined
            dense
            emit-value
            map-options
            class="q-mb-md"
          />

          <q-input
            v-model="invoiceForm.trackingNumber"
            label="송장번호"
            outlined
            dense
            placeholder="송장번호를 입력하세요"
            :rules="[(val) => !!val?.trim() || '송장번호를 입력해 주세요']"
            @keyup.enter="saveInvoice"
          />
        </q-card-section>

        <q-card-actions align="right" class="q-px-md q-pb-md">
          <q-btn flat label="취소" color="grey-7" v-close-popup />
          <q-btn
            unelevated
            label="저장"
            color="primary"
            :disable="!canSaveInvoice"
            @click="saveInvoice"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const ORDER_STATUSES = [
  "입금대기",
  "결제완료",
  "배송준비중",
  "배송중",
  "배송완료",
];

const summaryCards = [
  { status: "입금대기", color: "orange-8", icon: "schedule" },
  { status: "결제완료", color: "teal-7", icon: "payments" },
  { status: "배송준비중", color: "purple-6", icon: "inventory_2" },
  { status: "배송중", color: "info", icon: "local_shipping" },
  { status: "배송완료", color: "positive", icon: "check_circle" },
];

const courierOptions = [
  "CJ대한통운",
  "우체국택배",
  "로젠택배",
  "한진택배",
];

const columns = [
  {
    name: "orderNumber",
    label: "주문번호",
    field: "orderNumber",
    align: "left",
    sortable: true,
  },
  {
    name: "customerName",
    label: "고객명",
    field: "customerName",
    align: "left",
    sortable: true,
  },
  {
    name: "productName",
    label: "상품명",
    field: "productName",
    align: "left",
  },
  {
    name: "amount",
    label: "결제금액",
    field: "amount",
    align: "right",
    sortable: true,
  },
  {
    name: "status",
    label: "상태",
    field: "status",
    align: "center",
    sortable: true,
  },
  {
    name: "actions",
    label: "관리",
    field: "actions",
    align: "center",
  },
];

const orders = ref([
  {
    id: 1,
    orderNumber: "CM20260320001",
    customerName: "김수민",
    productName: "캐시미어 터틀넥",
    amount: 89000,
    status: "입금대기",
    courier: null,
    trackingNumber: null,
  },
  {
    id: 2,
    orderNumber: "CM20260319002",
    customerName: "이지은",
    productName: "울 블렌드 오버코트",
    amount: 289000,
    status: "결제완료",
    courier: null,
    trackingNumber: null,
  },
  {
    id: 3,
    orderNumber: "CM20260318003",
    customerName: "박현우",
    productName: "와이드 슬랙스 · 실크 미디 드레스",
    amount: 266000,
    status: "배송준비중",
    courier: null,
    trackingNumber: null,
  },
  {
    id: 4,
    orderNumber: "CM20260317004",
    customerName: "최예린",
    productName: "A라인 롱 스커트",
    amount: 72000,
    status: "배송중",
    courier: "CJ대한통운",
    trackingNumber: "123456789012",
  },
  {
    id: 5,
    orderNumber: "CM20260315005",
    customerName: "정민호",
    productName: "오버사이즈 블레이저",
    amount: 198000,
    status: "배송완료",
    courier: "로젠택배",
    trackingNumber: "987654321098",
  },
]);

const invoiceDialogOpen = ref(false);
const selectedOrder = ref(null);
const invoiceForm = reactive({
  courier: "CJ대한통운",
  trackingNumber: "",
});

const statusCounts = computed(() => {
  const counts = Object.fromEntries(ORDER_STATUSES.map((s) => [s, 0]));
  orders.value.forEach((order) => {
    if (counts[order.status] !== undefined) {
      counts[order.status] += 1;
    }
  });
  return counts;
});

const canSaveInvoice = computed(
  () =>
    !!invoiceForm.courier?.trim() && !!invoiceForm.trackingNumber?.trim()
);

function formatCurrency(value) {
  return new Intl.NumberFormat("ko-KR").format(value) + "원";
}

function statusBadgeColor(status) {
  const map = {
    입금대기: "orange-8",
    결제완료: "teal-7",
    배송준비중: "purple-6",
    배송중: "info",
    배송완료: "positive",
  };
  return map[status] ?? "grey-6";
}

function showInvoiceButton(status) {
  return status === "결제완료" || status === "배송준비중";
}

function openInvoiceDialog(order) {
  selectedOrder.value = order;
  invoiceForm.courier = order.courier ?? "CJ대한통운";
  invoiceForm.trackingNumber = order.trackingNumber ?? "";
  invoiceDialogOpen.value = true;
}

function saveInvoice() {
  if (!selectedOrder.value || !canSaveInvoice.value) return;

  const order = orders.value.find((o) => o.id === selectedOrder.value.id);
  if (!order) return;

  order.courier = invoiceForm.courier;
  order.trackingNumber = invoiceForm.trackingNumber.trim();
  order.status = "배송중";

  invoiceDialogOpen.value = false;
  selectedOrder.value = null;
  invoiceForm.trackingNumber = "";

  $q.notify({
    type: "positive",
    message: `송장이 저장되었습니다. (${order.courier} / ${order.trackingNumber})`,
    position: "top",
  });
}

function trackShipment(order) {
  $q.notify({
    type: "info",
    message: `[${order.courier}] ${order.trackingNumber} 배송 추적`,
    caption: order.orderNumber,
    position: "top",
  });
}
</script>

<style scoped>
.summary-card {
  border-radius: 10px;
  transition: box-shadow 0.2s ease;
}

.summary-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}
</style>
