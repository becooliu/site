<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-title">
                        <h3 class="title wow animated slideInDown">{{ mod_title }}</h3>
                        <p class="sub-title wow animated slideInUp">{{ mod_subtitle }}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="article">
                        <div class="article-vertical wow animated fadeInLeft" v-for="(item, index) in news_items" :key="index">
                            <div class="article-image">
                                <a href="ArticleDetail.html">
                                    <img :src="item.cover_img" alt="">
                                </a>
                            </div>
                            <div class="article-body">
                                <h4 class="title">{{ item.news_title }}</h4>
                                <hr>
                                <span class="create-time">发布日期：{{ item.created_time }}</span>
                                <p>{{ item.news_subtitle }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'News',
    data(){
        return {
            mod_title: '',
            mod_subtitle: '',
            news_items: []
        }
    },
    mounted(){
        this.$http.get('/api/home/get_news').then(response => {
            let res = response.body.response_data.data[0];
            console.log(res);
            this.mod_title = res.mod_title;
            this.mod_subtitle = res.mod_sub_title;
            this.news_items = res.mod_items;
        })
    }
}
</script>

