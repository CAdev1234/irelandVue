<template>
    <div style="direction: ltr; display: flex; margin-bottom: 20px">
        <v-card class="mx-auto portfolio-card" style="background-color: #212121">
            <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1"></v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
        </v-card>
        <div style="width:300px;margin-left:20px">
            <div class="font-coolvetica" style="color: white;font-size: 20pt;margin-bottom: 20px;">{{title}}</div>
            <div style="color: #BDBDBD;line-height: 1.6;font-size:14pt">
                {{detail}}
            </div>
            <div style="margin-top: 40px;color: rgb(242, 254, 2);text-decoration: underline;font-size:14pt">View project <i class="fa fa-external-link" style="font-size:15px;color:#f2fe02;margin-left:10px"></i></div>
        </div>
    </div>
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
    background-color: rgb(33, 33, 33);
    height: 300px;
    border-radius: 10px;
    width: 500px;
}
</style>