<template>
    <div>
        <div class="container-fluid" v-bind:style="{backgroundImage:'url(../../static/images/01.banner.jpg)', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'cover', minHeight: '600px'}"></div>
        <!--样板房模块-->
        <Example></Example>

        <!--首页新闻模块-->
        <News-index></News-index>

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-title">
                        <h3 class="title">联系我们</h3>
                        <p class="sub-title">Contact us</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <!--公司信息模块-->
                    <Company></Company>
                </div>
                <div class="col-md-9">
                    <Message></Message>
                </div>
            </div>
        
        </div>  
    </div>
</template>

<script>
import Example from './Example.vue';
import NewsIndex from './News_index.vue';
import Company from './Company.vue';
import Message from './Message.vue';

export default {
    name: 'Home',
    data(){
        return {
            isLoading: false
        }
    },
    components: {
        Example,
        NewsIndex,
        Company,
        Message
    }
}
</script>