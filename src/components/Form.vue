<template>
  <div class="">
    <div class="form-select">
      <v-select
        :options="address"
        label="name"
        @input="SET_HAS_PROVINCE"
        :value="hasProvince"
        placeholder="Hãy chọn Tỉnh, thành phố"
      ></v-select>

      <br />

      <v-select
        v-if="hasProvince"
        :options="hasProvince.districts"
        label="name"
        @input="SET_HAS_DISTRICT"
        :value="hasDistrict"
        placeholder="Hãy chọn Quận, Huyện"
      ></v-select>
      
    </div>
    <div class="show-select">
      <div v-if="hasProvince">
        Tỉnh: {{ hasProvince.name || null }}
        <br />
      </div>
      <div v-if="hasDistrict">Huyện: {{ hasDistrict.name || null }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Form",
  methods: {
    ...mapMutations(["SET_HAS_PROVINCE", "SET_HAS_DISTRICT"]),
  },
  computed: {
    ...mapState(["address", "hasProvince", "hasDistrict"]),
  },
};
</script>

<style>
</style>