<template>
    <div>
        <div class="address-list wow animated slideInLeft">
            <!-- <h3 class="comp-name" v-for="(value, key) in mode_data" :key="key">{{ value }}</h3> -->
            <h3 class="comp-name">{{ items.company_name }}</h3>
            <p><span class="title">地址：</span>{{ items.address }}</p>
            <p><span class="title">邮编：</span>{{ items.zip_code }}</p>
            <p><span class="title">电话：</span>{{ items.tel }}</p>
            <p><span class="title">传真：</span>{{ items.fax }}</p>
            <p><span class="title">手机：</span>{{ items.mobile_phone }}</p>
            <p><span class="title">邮箱：</span>{{ items.email }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Company',
    data(){
        return {
            mode_data: null,
            items: {}
        }
    },
    mounted() {
        this.$http.get('/api/home/get_company_info').then(res => {
            let response = res.body.response_data.data[0];
            this.mode_data = response.mod_items[0];
            this.items = {
                company_name: this.mode_data.company_name,
                address: this.mode_data.address,
                zip_code: this.mode_data.zip_code,
                tel: this.mode_data.tel,
                fax: this.mode_data.fax,
                mobile_phone: this.mode_data.mobile_phone,
                email: this.mode_data.email
            }
            /* console.log(this.mode_data);
            console.log(typeof(this.mode_data)); */
        })
    }
}
</script>