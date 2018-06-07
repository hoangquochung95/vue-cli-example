<template >
    <table class="table" v-show="display">
        <tbody>
            <tr>
                <td>{{form.height}}</td>
                <td>{{form.width}}</td>
                <td>{{form.weight}}</td>
                <td> <button class="btn btn-danger" @click="deleted" >Xóa</button></td>
            </tr>

        </tbody>
    </table>
</template>

<script type="module">
    import { EventBus } from '../components/event-bus.js';
    export default {
        name: 'thaythe',
        data () {
            return {
                form:{
                    height:'',
                    width:'',
                    weight:'',
                },
                display:false,
            }
        },
        created:function(){
            var that = this;
            EventBus.$on('getData', function (data) {
                if(typeof data !=="undefined"){
                    that.display=true;
                    that.form.height=data.height;
                    that.form.width=data.width;
                    that.form.weight =data.weight;
                }
            });
        },
        methods:{
            deleted:function () {
                EventBus.$emit('DeleteEvent');
                EventBus.$emit('Deleted',this.form);
            }
        },
    }
</script>