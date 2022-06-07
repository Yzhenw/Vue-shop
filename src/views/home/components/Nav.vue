<template>
    <div class="wrapper">
        <div class="itemWrapper" v-for="(item,index) in navList" :key="item.public_id">
            <!-- 图片 -->
            <div class="imageWrapper" >
                <img class="image" :src="item.icon_url" :alt="item.name">
            </div>
            <!-- 名称 -->
            <div class="titleWrapper">
                <span class="title">{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Nav',
        props:{
            navList : Array,
        }

    }
</script>

<style scoped>
    .wrapper{
       width: 100%;
       height: 12em; 
       padding-top: 0.90rem;
       padding-bottom: 0.9375rem;
       background-color: white;
    }
    .itemWrapper{
        height: 50%;
        width: 20%;
        float: left;
    }
    .imageWrapper{
        padding: 0.5rem 0.5rem 0.3rem 0.5rem;
    }
    .image{
        width: 100%;
    }
    .titleWrapper{
        font-size: 0.8rem;
        color: #555555;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 0 0.2rem 0 0.2rem;
    }


</style>