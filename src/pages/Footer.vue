<template>
<div class="container-fluid" style="background-color: #2a2a2e;">
    <div class="row">
        <div class="col-md-12">
            <div class="copy-right">
                <span>&copy;2010-{{year}} {{domain}} All Rights Reserved.</span>
                <router-link tag="a" :to="{path: '/admin'}" style="color: #fff;">管理后台</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return {
            year: new Date().getFullYear(),
            domain: 'abc.cn'
        }
    }
}
</script>