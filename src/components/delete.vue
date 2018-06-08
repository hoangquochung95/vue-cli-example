<template>
    <table class="table">
        <tbody>
        <tr colspan="3">
            <th>Sản phẩm đã xóa</th>
        </tr>
        <tr v-for="item in form">
            <td v-for="subitem in item">{{subitem}}</td>
        </tr>
        <tr>
            <button @click="$router.go(-1)">back</button>
        </tr>
        </tbody>
    </table>
</template>

<script>
    import { EventBus } from '../components/event-bus.js'
    var form=0;
    EventBus.$on('Deleted', function (data) {
        // console.log(data);
        // form.push(data);
        // // form.push(data);
        // console.log(form);
        // // console.log("sdasd");
        // console.log(data);
        form=data;
    });
    export default {
        name: 'delete',
        data:function () {
          return {
              form:[]
          }
        },
        mounted:function () {
            console.log(this.form);
            console.log(form);
            this.form.push(form);
        }

    }
</script>