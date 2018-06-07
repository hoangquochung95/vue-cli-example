<template>
    <div>
        <san-pham></san-pham>
        <thay-the v-bind:form="form" @deleteEvent="DeleteEvent"></thay-the>
    </div>
</template>

<script>;
    import ThayDoi from '../components/dathaydoi-example';
    import SanPham from '../components/sanpham';

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
        methods:{
            DeleteEvent:function () {
                this.deleted =true;
            }
        },
        components: {
            'thay-the': ThayDoi,
            'san-pham':SanPham
        },
    }
</script>