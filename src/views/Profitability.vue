<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td v-if=false v-on:dblclick="isEditName = true">{{ item.calories }}</td>
          <td v-else><input type="text" class="form-control" v-model="item.calories" ></td>
        
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  name:'Profitability',
      data () {
      return {
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
        ],
      }
    },
  }
</script>

