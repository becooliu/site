<template>
    <div>
        <div class="container-fluid" style="background-color: #f9f9f9;">
            <div class="row row-static">
                <div class="col-md-12">
                    <BlockTitle :mod-title="example_title" :mod-subtitle="example_subtitle"></BlockTitle>
                </div>
            </div>
            <div class="row row-static">
                <div class="col-md-12">
                    <div class="row">
                        <div v-for="(item, index) in example_items" :key="index" class="col-md-4 col-sm-4">
                            <div class="card">
                                <div class="image"><img v-bind:src="item.image" alt=""></div>
                                <h3>{{ item.title }}</h3>
                                <p>{{ item.introduction }}</p>
                                <a :href="item.linkUrl" class="btn btn-more" >查看详情</a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>   
        </div>
    </div>
</template>
<script>
import BlockTitle from '@/components/Title';

export default {
    name: 'Example',
    data(){
        return {
            example_title: '',
            example_subtitle: '',
            example_data: null,
            example_items: null
        }
    },
    mounted() {
        this.$http.get('/api/home/get_example').then(res => {
            //console.log(res.body.response_data.data);
            this.example_data = res.body.response_data.data[0];
            this.example_title = this.example_data.example_title;
            this.example_subtitle = this.example_data.example_subtitle;
            //console.log(this.example_data);
            this.example_items = this.example_data.example_item;
        })
    },
    components: {
        BlockTitle
    }
}
</script>