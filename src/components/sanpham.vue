<template>
    <div>
        <div class="alert alert-danger" role="alert" v-show="deleted">
            Đã Xóa
        </div>
        <table class="table">
            <tbody>
            <tr>
                <th>Chi tiết</th>
                <th>Thông Số</th>
                <th>Thao tác</th>
            </tr>
            <tr v-for="(item, index) in form">
                <td>{{index}}</td>
                <td>{{item}}</td>
                <td><input type="text" v-model="form[index]"></td>
            </tr>
            <tr>
                <td colspan="3">
                    <button @click="$router.go(-1)">back</button>
                    <button @click="save()">Save</button>
                </td>
            </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
    import { EventBus } from '../components/event-bus.js';
    console.log(EventBus);
    export default {
        name: 'Example2',
        data () {
            return {
                form:{
                    height:'10',
                    width:'5',
                    weight:'20'
                },
                deleted:false,
            }
        },
        created:function () {
            var that=this;
            EventBus.$on('DeleteEvent', function () {
                that.deleted =true;
            });
        },
        methods:{
            save:function () {
                EventBus.$emit('getData', this.form);
            }
        },
    }
</script>