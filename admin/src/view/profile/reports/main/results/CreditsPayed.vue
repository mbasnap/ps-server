<template>
  <div>
    <div>
        1.3. Полученные денежные средства по предоставленным займам
    </div>
    <div class="text-right">
        <i>тысяч российских рублей</i>
    </div>
    <div class="row text-center grey">
      <div class="col border flex-center center">
        Сумма денежных средств, поступивщих от заёмщиков за отчётный период
        в погащение задолженности по основному долгу по предоставленным займам
      </div>
      <div class="col border flex-center center">
        Сумма денежных средств, поступивщих от заёмщиков за отчётный период
        в погащение задолженности по процентам по предоставленным займам
      </div>
      <div class="col border flex-center center">
        Сумма денежных средств от реализации невостребованных вещей,
        поступивщих за отчётный период
        в погащение задолженности по основному долгу по предоставленным займам
      </div>
      <div class="col border flex-center center">
        Сумма денежных средств от реализации невостребованных вещей,
        поступивщих за отчётный период
        в погащение задолженности по процентам по предоставленным займам
      </div>
    </div>
    <div class="row text-center grey">
      <div class="col border"><strong>21</strong></div>
      <div class="col border"><strong>22</strong></div>
      <div class="col border"><strong>23</strong></div>
      <div class="col border"><strong>24</strong></div>
    </div>
    <div class="row text-center">
      <div class="col border">{{ value }}</div>
      <div class="col border">-</div>
      <div class="col border">-</div>
      <div class="col border">-</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style>

</style>