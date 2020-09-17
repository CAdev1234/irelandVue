<template>
    <div class="misc-item">
        <div class="misc-detail-left">
            <div class="font-coolvetica" style="color: #f2fe02;font-size: 30pt;margin-bottom: 20px;">{{title}}</div>
            <div style="color: #BDBDBD;line-height: 1.6;font-size: 14pt; height: 100px; overflow-y: scroll;overflow-x: hidden;overflow: auto;">
                {{detail}}
            </div>
        </div>
        <div>
            <v-card class="misc-card"></v-card>
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
.misc-item {
    display: flex;
    width:100%;
    margin-bottom: 40px;
    direction:ltr;
}
.misc-detail-left {
    width: 400px;
    direction: ltr;
    margin-left: 40px;
}
.misc-card {
    border-radius: 10px;
    background-color: #212121;
    width: 400px;
    height: 250px;
    margin-left: 40px;
    margin-right: 40px;
}
</style>