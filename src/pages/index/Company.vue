<template>
    <div>
        <div class="address-list wow animated slideInLeft">
            <h3 class="comp-name">{{ mode_data.company_name }}</h3>
            <p><span class="title">地址：</span>{{ mode_data.address }}</p>
            <p><span class="title">邮编：</span>{{ mode_data.zip_code }}</p>
            <p><span class="title">电话：</span>{{ mode_data.mobile_phone }}</p>
            <p><span class="title">传真：</span>{{ mode_data.fax }}</p>
            <p><span class="title">手机：</span>{{ mode_data.mobile_phone }}</p>
            <p><span class="title">邮箱：</span>{{ mode_data.email }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Company',
    data(){
        return {
            mode_data: null
        }
    },
    mounted() {
        this.$http.get('/api/home/get_company_info').then(res => {
            let response = res.body.response_data.data[0];
            this.mode_data = response.mod_items[0];
            console.log(this.mode_data);
        })
    },
}
</script>