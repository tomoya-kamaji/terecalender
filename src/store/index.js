import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fields: [
      // {
      //   month: "2020年10月",
      //   ShipmentValue: 70, //出荷額
      //   InSales: 40, //社内売
      //   Inpurchase: 80, //社内買
      //   Gross: 40, //総生産
      //   Deduction: 0, //控除額
      //   PurchaseCost:20, //仕入れ商品費
      //   Outsourved:10, //外注
      //   Technicaldispatch:0, //技術派遣
      //   Rent1:30, //賃借料
      //   TravelExpenses:0, //旅費交通費
      //   TechnicalFee:0, //内部技術料
      //   OperatingFee:0, //営業手数料
      //   OtherExpenses:0,//その他経費
      //   DeductedIncome:0,//差引収益
      //   TotalTime:0,//総時間
      //   DirectTime:0,//直接時間
      //   IndirectDepartment:0,//部門内関節時間
      //   DepartmentTime:0,//部門共通時間
      //   PerHour:0, // 時間当り
      //   PretaxProfit:0, //税前利益
      //   PretaxMargin:0, //税前利益率
      // },
      // {
      //   month: "2020年11月",
      //   ShipmentValue: 0, //出荷額
      //   InSales: 0, //社内売
      //   Inpurchase: 0, //社内買
      //   Gross: 0, //総生産
      //   Deduction: 0, //控除額
      //   PurchaseCost: 0, //仕入れ商品費
      //   Outsourved: 0, //外注
      //   Technicaldispatch:0, //技術派遣
      //   Rent1: 0, //賃借料
      //   TravelExpenses:0, //旅費交通費
      //   TechnicalFee:0, //内部技術料
      //   OperatingFee:0, //営業手数料
      //   OtherExpenses:0,//その他経費
      //   DeductedIncome:0,//差引収益
      //   TotalTime:0,//総時間
      //   DirectTime:0,//直接時間
      //   IndirectDepartment:0,//部門内関節時間
      //   DepartmentTime:0,//部門共通時間
      //   PerHour:0, // 時間当り
      //   PretaxProfit:0, //税前利益
      //   PretaxMargin:0, //税前利益率
      // },
    ],
  },
  mutations: {
    insertfields(state){
      state.fields.push(
        {
          month: "2020年11月",
          ShipmentValue: 0, //出荷額
          InSales: 0, //社内売
          Inpurchase: 0, //社内買
          Gross: 0, //総生産
          Deduction: 0, //控除額
          PurchaseCost:0, //仕入れ商品費
          Outsourved:0, //外注
          Technicaldispatch:0, //技術派遣
          Rent1:0, //賃借料
          TravelExpenses:0, //旅費交通費
          TechnicalFee:0, //内部技術料
          OperatingFee:0, //営業手数料
          OtherExpenses:0,//その他経費
          DeductedIncome:0,//差引収益
          TotalTime:0,//総時間
          DirectTime:0,//直接時間
          IndirectDepartment:0,//部門内関節時間
          DepartmentTime:0,//部門共通時間
          PerHour:0, // 時間当り
          PretaxProfit:0, //税前利益
          PretaxMargin:0, //税前利益率
        },

      )
    },
    // updatefields(state, payload){
    

    // },


  },
  actions: {
    insertfields(store,payload){
      store.commit('insertfields' ,payload)
    },
    updatefields(store,payload){
      store.commit('updatefields' ,payload)
    },
    
  },
  modules: {
  },
  getters: {
    getfields: function(state){
      console.log(state)
      for(let field of state.fields){
        console.log("回数")

        field.Gross =
          field.ShipmentValue + 
          field.InSales + 
          field.Inpurchase
          
        field.Deduction =
          field.PurchaseCost + 
          field.Outsourved + 
          field.Technicaldispatch +
          field.Rent1 +
          field.OperatingFee +
          field.OtherExpenses
        
        field.TotalTime =
          field.DirectTime + 
          field.IndirectDepartment +
          field.DepartmentTime
          
        field.DeductedIncome =
          field.Gross - 
          field.Deduction

        }

      return state.fields
    }
  }
})
