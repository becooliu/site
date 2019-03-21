<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="block-title">
                    <h3 class="title wow animated slideInDown">{{ mod_data.mod_title }}</h3>
                    <p class="sub-title wow animated slideInUp">{{ mod_data.mod_subtitle }}</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="about-item">
                    <div class="left-img"><img :src="mod_data.mod_cover_img" alt=""></div>
                    <div class="right-body">
                        <p v-for="(item , index) in mod_desc" :key="index">{{ item.p_text }}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'About',
    data(){
        return {
            mod_data: {},
            mod_desc: []
        }
    },
    mounted(){
        this.$http.get('/api/about/get_about_info').then(response => {
            this.mod_data = response.body.data[0];
            console.log(response.body.data[0]);
            this.mod_desc = this.mod_data.mod_items;
        })
    }
}
</script>
