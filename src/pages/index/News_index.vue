<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="block-title">
                    <h3 class="title">{{ mod_title}}</h3>
                    <p class="sub-title">{{ mod_subtitle }}</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div v-for="(item, index) in limit_news_items" :key="index" class="col-md-4">
                        <div class="article">
                            <div class="article_item">
                                <div class="article-head">
                                    <p class="year">{{ formatDate(item.created_time, 'yyyy') }}</p>
                                    <p class="month-day">{{ formatDate(item.created_time, 'mm-dd') }}</p>
                                </div>
                                <div class="article-body">
                                    <p class="title">{{ item.news_title }}</p>
                                    <p class="description">{{ item.news_subtitle }}</p>
                                    <a class="link" href="NewsDetail.html">详细内容</a>
                                </div>
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
    name: 'News_index',
    data () {
        return {
            news_obj: null,
            mod_title: '',
            mod_subtitle: '',
            news_items: []
        }
    },
    computed: {
        limit_news_items: function(){
            return this.news_items.slice(0,3)
        }
    },
    mounted() {
        this.$http.get('/api/home/get_news').then(res => {
            //console.log(res.body.response_data.data[0]);
            this.news_obj = res.body.response_data.data[0];
            //console.log(this.news_obj);
            this.mod_title = this.news_obj.mod_title;
            this.mod_subtitle = this.news_obj.mod_sub_title;
            this.news_items = this.news_obj.mod_items;
        })
    }
}
</script>