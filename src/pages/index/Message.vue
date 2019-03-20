<template>
    <div class="sys_message_01 wow animated slideInRight">
        <h3>欢迎你给我们留言</h3>
        <form action="" @submit.prevent="sendMessage">
            <div class="box">
                <p>姓名:</p>
                <div class="input-box">
                    <input type="text" v-model="username" id="username" name="username" placeholder="请输入你的姓名">
                </div>
            </div>
            <div class="box">
                <p>邮箱:</p>
                <div class="input-box">
                    <input type="text"  v-model="email" @blur="handleCheckEmail()" :class="{'has-error': !emailCorrect}" id="email" name="email" placeholder="请输入邮箱">
                </div>
            </div>
            <div class="box">
                <p>电话:</p>
                <div class="input-box has-error">
                    <input type="number" :class="{'has-error': !telCorrect}" v-model="tel" id="tel" @blur="handleCheckTel()" name="tel" placeholder="请输入联系电话">
                </div>
            </div>
            
            <div class="box">
                <p>留言内容:</p>
                <div class="input-box">
                    <textarea  v-model="content" id="content" name="content" rows="4" placeholder="请输入留言内容"></textarea>
                </div>
            </div>
            <div class="box">
                <input type="submit" class="btn btn-default" value="提交">
            </div>
        </form>
    </div>
</template>
<script>

export default {
    name: 'Message',
    data(){
        return {
            emailCorrect: true,
            telCorrect: true,
            username: '',
            email: '',
            tel: '',
            content: ''
        }
    },
    methods: {
        sendMessage(){
            let form_data = {
                name: this.username,
                email: this.email,
                tel: this.tel,
                content: this.content
            }
            this.$http.post('/api/home/send_message', form_data).then(res => {
                let message = res.body.response_data.message;
                window.alert(message);
            })
        },
        handleCheckEmail(){ //检查邮箱
            if (!this.IsEmail(this.email)) {
                this.emailCorrect = false;
            }else {
                this.emailCorrect = true;
            }
        },
        handleCheckTel(){ //检查电话
            if (!this.IsMobile(this.tel)) {
                this.telCorrect = false;
            }else {
                this.telCorrect = true;
            }
        }
    },
}
</script>
<style>
    input.has-error {
        border-color: #f20 !important;
    }
</style>