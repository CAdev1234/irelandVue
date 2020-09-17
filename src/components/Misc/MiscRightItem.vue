<template>
    <div class="misc-item">
        <div>
            <v-card class="misc-card"></v-card>
        </div>
        <div class="misc-detail-right">
            <div class="font-coolvetica" style="color: #f2fe02;font-size: 30pt;margin-bottom: 20px;">{{title}}</div>
            <div style="color: #BDBDBD;line-height: 1.6;font-size: 14pt; height: 160px; overflow-y: scroll;overflow-x: hidden;overflow: auto;">
                <span style="font-size: 25pt">Me:</span> I'm so sorry, my dog ate my homework<br/>
                <span style="font-size: 25pt">Proffesor:</span>  Your dog ate your coding assignment?<br/> 
                <span style="font-size: 25pt">Me:</span>Yeah, it took him a couple of bytes
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
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
.misc-card {
    border-radius: 10px;
    background-color: #212121;
    width: 400px;
    height: 250px;
    margin-left: 40px;
    margin-right: 40px;
}
.misc-detail-right {
    width: 500px;
    direction: ltr;
    border: solid 1px  #f2fe02;
    border-top: none;
    border-right: none;
    padding-left: 30px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>