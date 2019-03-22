<template>
    <div class="block-title">
        <h3 class="title">{{ modTitle}}</h3>
        <p class="sub-title">{{ modSubtitle }}</p>
    </div>
</template>
<script>
export default {
    name: 'Block-title',
    props: {
        modTitle: String,
        modSubtitle: String
    }
}
</script>
