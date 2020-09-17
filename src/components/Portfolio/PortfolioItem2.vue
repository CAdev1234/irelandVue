<template>
    <v-card class="mx-auto portfolio-card">
        <v-card-title class="headline mb-1 font-coolvetica" style="font-size: 20pt;color: white;">
            {{title}}
        </v-card-title>
        <v-card-text class="card-detail">{{detail}}</v-card-text>
        <v-card-actions>
            <div>View project <i class="fa fa-external-link" style="font-size:15px;color:#f2fe02;margin-left:10px"></i></div>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props: {
        title: String, 
        detail: String
    }    
}
</script>
<style scoped>
.portfolio-card {
    background-color: #212121;
    width: 500px;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
}
.portfolio-card .v-card__text {
    color: #BDBDBD !important;
    line-height: 1.6;
    font-size:14pt;
    padding-bottom: 0px;
}
.portfolio-card .v-card__actions div{
    margin-top: 20px;
    color: rgb(242, 254, 2);
    text-decoration: underline;
    margin-left: 10px;
    font-size:14pt;
    padding-bottom: 0px !important;
}
</style>