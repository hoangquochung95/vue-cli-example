<template>

  <table class="table">
    <tbody>
      <tr>
        <th>Tên sản phẩm</th>
        <th>Thao tác</th>
      </tr>
      <tr v-for="product in p.products">
        <td>
          {{product.name}}
        </td>
        <td >
            <template v-for="item in p.action">
              <ul class="nav">
                <li class="nav-item">
                  <router-link :to="{name:item.name, params: {id: product.id}}" class="nav-link" > {{ item.alias }}                                                       </router-link>
                </li>
              </ul>
            </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hung dep trai',
        p:{
          products:{
              'a':{
                  name:'Bàn',
                  id:'1'
              },
              'b':{
                  name:'Ghế',
                  id:'2'
              },
              'c':{
                  name:'Tủ',
                  id:'3'
              },

          },
          action: [
            {
                alias:'Xóa',
                name:'delete'
            },
            {
                alias:'Example2',
                name:'example2'
            },
            {
                alias:'Example1',
                name:'example1'
            },
        ]
        }
    }
  }
}
</script>