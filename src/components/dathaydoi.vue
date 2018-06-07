<template>
    <table class="table">
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

<script>
    export default {
        name: 'thaythe',
        data () {
            return {

            }
        },
        methods:{
            deleted:function () {
                this.$emit('deleteEvent');
            }
        },
        props:{
            form:Object,
            deleteEvent:{}
        },
    }
</script>