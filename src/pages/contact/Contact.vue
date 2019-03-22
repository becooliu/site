<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <div id="map-loader" style="height: 400px;"></div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <Company></Company>
        </div>
        <div class="col-md-8">
            <Message></Message>
        </div>
    </div>
</div>
</template>

<script>
import MapLoader from '@/assets/js/amap.js';
import Company from '@/pages/index/Company';
import Message from '@/pages/index/Message';
export default {
    name: 'contact',
    data(){
        return {
            map: null
        }
    },
    components: {
        Company,
        Message
    },
    mounted() {
        //高德地图
        let that = this;
        MapLoader().then(AMap => {
            console.log('AMap 加载成功。');
            that.map = new AMap.Map('map-loader', {
                center: [116.31979,39.97648],
                zoom: 18
            })
            const marker = new AMap.Marker({
                position: [116.31979,39.97648], //marker所在的位置
                map:that.map //创建时直接赋予map属性
            })
        } , e => {
            console.log('地图加载失败' , e)
        })
    }
}
</script>
