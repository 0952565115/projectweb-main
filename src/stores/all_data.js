import { ref } from 'vue';
import { defineStore } from 'pinia'

export const HealPage_menu = defineStore('menu01', () => {

const HealPage_data = ref([
      {
        id: 1,
        name: "Espresso",
        coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/0rta2kzzmpjp.jpg",
        price: "45"
      },
      {
        id: 2,
        name: "Espresso con panna coffee",
        coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/ba8tsfypxocw.jpg",
        price: "55"
      },
      {
        id: 3,
        name: "Long Black",
        coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/jvbo4z0urqfp.jpg",
        price: "45"
      }
])

return { HealPage_data }
})

export const HealBoby_menu = defineStore('menu02', () => {

const HealBoby_data = ref([
      {
        id: 4,
        name: "Latte",
        coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/vrrocyts6ngu.jpg",
        price: "40"
      },
      {
        id: 5,
        name: "Flat White",
        coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/jeumhnaierva.jpg",
        price: "65"
      },
      {
        id: 6,
        name: "Cappuccino",
        coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/3b2xlwjr0dp1.jpg",
        price: "60",
      }
])

return { HealBoby_data }
})

export const FoodHeal_menu = defineStore('menu03', () => {

const FoodHeal_data = ref([
      {
        id: 7,
        name: "Piccolo",
        coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/eabxqspvserw.jpg",
        price: "60"
      },
      {
        id: 8,
        name: "Mocha",
        coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/1qvzuvtyfzw4.jpg",
        price: "45"
      },
      {
        id: 9,
        name: "Caramel Macchiato",
        coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/dlokkom1qe86.jpg",
        price: "50"
      }
])

return { FoodHeal_data }
})

export const Hospitel_menu = defineStore('menu04', () => {

const Hospitel_data = ref([
      {
        id: 10,
        name: "Dirty Coffee",
        coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/rsnexrqi9xhp.jpg",
        price: "45"
      },
      {
        id: 11,
        name: "Dalgona Coffee",
        coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/4dl7s4grlgit.jpg",
        price: "55"
      },
      {
        id: 12,
        name: "Americano",
        coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/t411m0ct7h7j.jpg",
        price: "40"
      }
])

return { Hospitel_data }
})

export const NewsPage_menu = defineStore('menu05', () => {

const NewsPage_data = ref([
      {
        id: 1,
        name: "Espresso",
        coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/0rta2kzzmpjp.jpg",
        price: "45"
      },
      {
        id: 2,
        name: "Espresso con panna coffee",
        coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/ba8tsfypxocw.jpg",
        price: "55"
      },
      {
        id: 3,
        name: "Long Black",
        coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/jvbo4z0urqfp.jpg",
        price: "45"
      },
      {
        id: 4,
        name: "Latte",
        coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/vrrocyts6ngu.jpg",
        price: "40"
      },
      {
        id: 5,
        name: "Flat White",
        coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/jeumhnaierva.jpg",
        price: "65"
      },
      {
        id: 6,
        name: "Cappuccino",
        coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/3b2xlwjr0dp1.jpg",
        price: "60",
      }
])
    
return { NewsPage_data }
})