<template>
    <v-card class="mx-auto blog-card" v-bind:style="{background:bgColor}">
        <v-list-item three-line>
        <v-list-item-content>
            <v-list-item-title class="headline mb-1 card-title font-coolvetica">{{title}}</v-list-item-title>
            <v-list-item-subtitle class="card-detail">information about the blog</v-list-item-subtitle>
        </v-list-item-content>
        </v-list-item>
        <div class="goto-each-blog">
            <i class="fa fa-external-link" style="font-size:15px;color:#f2fe02"></i>
        </div>
    </v-card>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: {
        title: String,
        bgColor: String
    },
}
</script>
<style scoped>
.blog-card {
    position: relative;
    border-radius: 10px !important;
    padding: 10px;
    margin-top: 15px;
}
.card-title {
    color: white;
    font-size: 23pt !important;
}
.card-detail {
    color: #BDBDBD !important;
    font-size: 16pt !important;
}
.goto-each-blog {
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>