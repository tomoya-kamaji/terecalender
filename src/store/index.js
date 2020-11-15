import Vue from 'vue'
import Vuex from 'vuex'
// import firebase from "firebase/app";
import "firebase/database";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fields: [
    ],
    MonthlyAggregate:[
      {
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
      }
    ],

    menuItems: [
      {
        name: 'Home',
        to: 'Home'
      },
      // {
      //   name: 'Profitability',
      //   to: "Profitability"
      // },        
      {
        name: '利用説明',
        to: "out"
      },
    ] 
  },
  mutations: {
    insertlink(state,organization){
        
        let linkid = Math.random().toString(32).substring(2)
        state.menuItems.push({
           name: organization, 
           to: `/profitability/${linkid}`   
        })
      
    },

    insertfields(state){
      // firebase.database().ref("fields")
      // .push({
      //   // content: this.mess,
      //   fields:{
      //     id:Math.random().toString(32).substring(2),
      //     month: "2020年11月",
      //     ShipmentValue: 0, //出荷額
      //     InSales: 0, //社内売
      //     Inpurchase: 0, //社内買
      //     Gross: 0, //総生産
      //     Deduction: 0, //控除額
      //     PurchaseCost:0, //仕入れ商品費
      //     Outsourved:0, //外注
      //     Technicaldispatch:0, //技術派遣
      //     Rent1:0, //賃借料
      //     TravelExpenses:0, //旅費交通費
      //     TechnicalFee:0, //内部技術料
      //     OperatingFee:0, //営業手数料
      //     OtherExpenses:0,//その他経費
      //     DeductedIncome:0,//差引収益
      //     TotalTime:0,//総時間
      //     DirectTime:0,//直接時間
      //     IndirectDepartment:0,//部門内関節時間
      //     DepartmentTime:0,//部門共通時間
      //     PerHour:0, // 時間当り
      //     PretaxProfit:0, //税前利益
      //     PretaxMargin:0, //税前利益率
      //   },
      // })

      state.fields.push(
        {
          id:Math.random().toString(32).substring(2),
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
    insertlink(store,payload){
      console.log(payload)
      store.commit('insertlink', payload)
    },
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

    getmenuItems:function(state){
      return state.menuItems
    },
    getfields: function(state){
      for(let field of state.fields){
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
    },

    getMonthlyAggregate:function(state){
      state.MonthlyAggregate[0].ShipmentValue = 0
      state.MonthlyAggregate[0].InSales = 0
      state.MonthlyAggregate[0].Inpurchase = 0
      state.MonthlyAggregate[0].Gross = 0
      state.MonthlyAggregate[0].Deduction = 0
      state.MonthlyAggregate[0].PurchaseCost = 0
      state.MonthlyAggregate[0].Outsourved = 0
      state.MonthlyAggregate[0].Technicaldispatch = 0
      state.MonthlyAggregate[0].Rent1 = 0
      state.MonthlyAggregate[0].TravelExpenses = 0
      state.MonthlyAggregate[0].TechnicalFee = 0
      state.MonthlyAggregate[0].OperatingFee = 0
      state.MonthlyAggregate[0].OtherExpenses = 0
      state.MonthlyAggregate[0].DeductedIncome = 0
      state.MonthlyAggregate[0].TotalTime = 0
      state.MonthlyAggregate[0].DirectTime = 0
      state.MonthlyAggregate[0].IndirectDepartment = 0
      state.MonthlyAggregate[0].DepartmentTime = 0
      state.MonthlyAggregate[0].PerHour = 0
      state.MonthlyAggregate[0].PretaxProfit = 0
      state.MonthlyAggregate[0].PretaxMargin = 0

      for(let field of state.fields){
        state.MonthlyAggregate[0].ShipmentValue += Number(field.ShipmentValue)
        state.MonthlyAggregate[0].InSales += Number(field.InSales)
        state.MonthlyAggregate[0].Inpurchase += Number(field.Inpurchase)
        state.MonthlyAggregate[0].Gross += Number(field.Gross)
        state.MonthlyAggregate[0].Deduction += Number(field.Deduction)
        state.MonthlyAggregate[0].PurchaseCost += Number(field.PurchaseCost)
        state.MonthlyAggregate[0].Outsourved += Number(field.Outsourved)
        state.MonthlyAggregate[0].Technicaldispatch += Number(field.Technicaldispatch)
        state.MonthlyAggregate[0].Rent1 += Number(field.Rent1)
        state.MonthlyAggregate[0].TravelExpenses += Number(field.TravelExpenses)
        state.MonthlyAggregate[0].TechnicalFee += Number(field.TechnicalFee)
        state.MonthlyAggregate[0].OperatingFee += Number(field.OperatingFee)
        state.MonthlyAggregate[0].OtherExpenses += Number(field.OtherExpenses)
        state.MonthlyAggregate[0].DeductedIncome += Number(field.DeductedIncome)
        state.MonthlyAggregate[0].TotalTime += Number(field.TotalTime)
        state.MonthlyAggregate[0].DirectTime += Number(field.DirectTime)
        state.MonthlyAggregate[0].IndirectDepartment += Number(field.IndirectDepartment)
        state.MonthlyAggregate[0].DepartmentTime += Number(field.DepartmentTime)
        state.MonthlyAggregate[0].PerHour += Number(field.PerHour)
        state.MonthlyAggregate[0].PretaxProfit += Number(field.PretaxProfit)
        state.MonthlyAggregate[0].PretaxMargin += Number(field.PretaxMargin)
      }
      return state.MonthlyAggregate
    },
    
  }
})
