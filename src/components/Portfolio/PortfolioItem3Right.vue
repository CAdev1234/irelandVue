<template>
    <div style="display: flex;width:100%;margin-bottom: 20px;direction:ltr">
        <div class="portfolio-detail-left-empty"></div>
        <div>
            <v-card class="portfolio-card"></v-card>
        </div>
        <div class="portfolio-detail-right">
            <div class="font-coolvetica" style="color: white;font-size: 20pt;margin-bottom: 20px;">{{title}}</div>
            <div style="color: #BDBDBD;line-height: 1.6;font-size: 14pt; height: 160px; overflow-y: scroll;overflow-x: hidden;overflow: auto;">
                {{detail}}
            </div>
            <div style="margin-top: 40px;color: rgb(242, 254, 2);text-decoration: underline;font-size: 14pt">View project<i class="fa fa-external-link" style="font-size:15px;color:#f2fe02;margin-left:10px"></i></div>
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
.portfolio-detail-left-empty {
    width: 20%;
    margin-left: 2%;
}

.portfolio-detail-right {
    width: 20%;
    direction: ltr;
}
.portfolio-card {
    border-radius: 10px;
    background-color: #212121;
    width: 500px;
    height: 300px;
    margin-left: 20px;
    margin-right: 20px;
}
</style>