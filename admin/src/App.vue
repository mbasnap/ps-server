<template>
  <div id="app" >
    <div class="">
      <mba-header class=""></mba-header>
      <router-view class="mt-5" />
    </div>
  </div>
</template>

<script>
import MbaHeader from '@/components/Header'

export default {
  name: 'App',
  components: { MbaHeader },
  created() {
    this.$store.dispatch('update')
  }
  
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  .flex-between {
    display: flex;
    justify-content: space-between;
  }
  .flex-end {
    display: flex;
    justify-content: flex-end;
  }
  .center {
    display: flex;
    justify-content: center;
  }
  .flex-center {
    display: flex;
    align-items: center;
  }
  .flex-end {
    display: flex;
    align-items: flex-end;
  }
  .absolute-center {
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
  }
  .relative {
    position: relative;
  }
  .pointer {
    cursor: pointer;
  }
  .grey {
    background-color: rgba(128, 128, 128, 0.096);
  }
  .overflow-wrap {
    overflow-wrap: anywhere;
  }
  .display-none {
    display: none;
  }
  .sticky-header thead>tr>th {
    background-color: white;
    position: sticky;
    top: 55px;
    z-index: 2000;
    border-bottom: none;
  } 
  .sticky {
    background-color: white;
    position: sticky;
    top: 55px;
    z-index: 2000;
    border-bottom: none;
  } 
</style>
