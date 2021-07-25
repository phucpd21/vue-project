import Vue from 'vue'
import VueSelect from 'vue-select'
import vSelect from 'vue-select'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.component('v-select', vSelect)
Vue.component('v-select', VueSelect.VueSelect)

const storeData = {
    state: {
        address: [
            {
                "id": 1,
                "name": "Hà Nội",
                "districts": [
                    {
                        "id": 1,
                        "name": "Ba Đình"
                    },
                    {
                        "id": 2,
                        "name": "Đống Đa"
                    },
                ]
            },
            {
                "id": 2,
                "name": "Hà Giang",
                "districts": [
                    {
                        "id": 1,
                        "name": "Đồng Văn"
                    },
                    {
                        "id": 2,
                        "name": "Quang Bình"
                    },
                ]
            }
        ],
        hasProvince: null,
        hasDistrict: null
    },
    mutations: {
        SET_HAS_PROVINCE(state, province) {
            state.hasProvince = province
            state.hasDistrict = null
        },
        SET_HAS_DISTRICT(state, district) {
            state.hasDistrict = district
        }
    }
}

const store = new Vuex.Store(storeData)

export default store
