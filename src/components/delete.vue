<template>
    <table class="table">
        <tbody>
        <tr colspan="3">
            <th>Sản phẩm đã xóa</th>
        </tr>
        <tr>
            <td v-for="(item,index) in form">{{index}} : {{item}}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    import { EventBus } from '../components/event-bus.js'
    import Vue from 'vue';
    var form;
    EventBus.$on('Deleted', function (data) {
        form=data;
    });
    export default {
        name: 'delete',
        data:function () {
          return {
              form:null
          }
        },
        mounted:function () {
            this.form=form;
        }

    }
</script>