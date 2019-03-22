<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <!--标题模块-->
                <BlockTitle :mod-title="mod_title" :mod-subtitle="mod_subtitle" ></BlockTitle>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-6 col-sm-6" v-for="(member, index) in members" :key="index">
                        <div class="team-item">
                            <div class="left-img">
                                <a href="javascript:void(0);">
                                    <img :src="member.avatar" alt="">
                                </a>
                                <div class="intr">
                                    <h4>{{ member.title }}</h4>
                                    <p>{{member.position}} {{ member.name }}</p>
                                </div>
                            </div>
                            <div class="right-body">
                                <div class="content">
                                    <p>{{ member.intr }}</p>
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
import BlockTitle from '@/components/Title';

export default {
    name: 'Team',
    data(){
        return {
            mod_title: '',
            mod_subtitle: '',
            members: []
        }
    },
    
    mounted(){
        this.$http.get('/api/team/get_members').then(result => {
            //console.log(result.body.data[0]);
            let res = result.body.data[0];
            this.mod_title = res.mod_title;
            this.mod_subtitle = res.mod_subtitle;
            this.members = res.members;
        })
    },
    components: {
        BlockTitle
    }
}
</script>