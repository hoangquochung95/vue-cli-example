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
        <thay-the v-bind:form="form" @deleteEvent="DeleteEvent"></thay-the>
    </div>
</template>

<script>
    import ThayDoi from '../components/dathaydoi';
    export default {
        name: 'example1',
        data () {
            return {
                form:{},
                deleted:false,
            }
        },
        mounted:function () {
            if(this.$route.params.id === "1"){
                this.form ={
                    height:'10',
                    width:'5',
                    weight:'20'
                };
            }

            else if (this.$route.params.id === "2")
                this.form ={
                    height:'20',
                    width:'15',
                    weight:'5'
                };
            else if (this.$route.params.id === "3")
                this.form ={
                    height:'5',
                    width:'15',
                    weight:'25'
                };
        },
        methods:{
          DeleteEvent:function () {
              this.deleted =true;
          }  
        },
        components: {
            'thay-the': ThayDoi
        },
    }
</script>