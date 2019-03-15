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
                    <div class="sys_message_01 wow animated slideInRight">
                        <h3>欢迎你给我们留言</h3>
                        <form action="">
                            <div class="box">
                                <p>姓名:</p>
                                <div class="input-box">
                                    <input type="text" data-type="username" id="username" name="username" placeholder="请输入你的姓名">
                                </div>
                            </div>
                            <div class="box">
                                <p>邮箱:</p>
                                <div class="input-box">
                                    <input type="text" data-type="email" id="email" name="email" placeholder="请输入邮箱">
                                </div>
                            </div>
                            <div class="box">
                                <p>电话:</p>
                                <div class="input-box">
                                    <input type="number" data-type="tel" id="tel" name="tel" placeholder="请输入联系电话">
                                </div>
                            </div>
                            
                            <div class="box">
                                <p>留言内容:</p>
                                <div class="input-box">
                                    <textarea  data-type="content" id="content" name="content" rows="4" placeholder="请输入留言内容"></textarea>
                                </div>
                            </div>
                            <div class="box">
                                <input type="button" value="提交" onclick="Word.post(this)">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
        </div>  
    </div>
</template>

<script>
import Example from './Example.vue';
import NewsIndex from './News_index.vue';
import Company from './Company.vue';
export default {
    name: 'Home',
    components: {
        Example,
        NewsIndex,
        Company
    }
}
</script>