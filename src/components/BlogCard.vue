<template>
    <v-card class="mx-auto blog-card" v-bind:style="{background: bgColor}">
        <v-list-item three-line>
        <v-list-item-content>
            <v-list-item-title class="headline mb-1 card-title font-coolvetica">{{title}}</v-list-item-title>
            <v-list-item-subtitle class="card-detail">information about the blog</v-list-item-subtitle>
        </v-list-item-content>
        </v-list-item>
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
    }   
}
</script>
<style scoped>
.blog-card {
    position: relative;
    border-radius: 10px !important;
    padding: 10px;
    width: 100%;
    height: 250px;
    direction: ltr;
    cursor: pointer;
}
.card-title {
    color: white;
    font-size: 23pt !important;
}
.card-detail {
    color: #BDBDBD !important;
    font-size: 16pt !important;
}
</style>