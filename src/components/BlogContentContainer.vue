<template>
    <div class="blog-detail">
        <v-btn text style="margin-top: 20px;">
            <i class="fa fa-angle-left" style="font-size:45px;color: #f2fe02"></i>
        </v-btn>
        <div style="background-color: rgb(33, 33, 33);padding:25px">
            <div class="blog-detail-title font-coolvetica">{{title}}</div><br/>
            <div class="blog-detail-content">
                <div style="margin-left: 10px">
                Donec sit amet ipsum ullamcorper mi tempus suscipit. Aliquam erat volutpat. Duis non tristique orci, quis 
pulvinar erat. Nam dignissim a nisl et vulputate. Praesent quis pharetra metus, in consequat lacus. Pellentesque 
dictum sapien odio, eu venenatis ante semper nec. Pellentesque condimentum, orci ac malesuada imperdiet, ex 
dui tincidunt felis, non imperdiet ipsum lacus vel nisi. <br/><br/>Etiam vel lectus consequat, molestie tellus non, luctus arcu. Vivamus hendrerit, urna sed porttitor volutpat, 
dolor ex rutrum metus, ut tempor lacus est et metus. In vel mattis magna, eget feugiat mauris. Vivamus quis 
congue magna. Praesent pretium eros quis velit convallis cursus. In lorem urna, maximus vitae bibendum 
euismod, egestas et enim. In efficitur purus mauris, sit amet lacinia nunc volutpat in. Nullam porttitor 
elementum dolor id cursus. Aliquam interdum euismod odio et egestas. Nam ac rhoncus turpis, pretium 
tincidunt mauris. Fusce non rutrum turpis, in ultricies mi. Maecenas non imperdiet neque. Aliquam aliquet orci 
nec tincidunt commodo. Sed eu lacinia est. Ut placerat bibendum vehicula. Quisque dignissim leo eros, vel 
euismod arcu convallis id.<br/><br/>
                <div style="display: flex;width:100%">
                    <div style="width:60%">Donec sit amet ipsum ullamcorper mi tempus suscipit. 
Aliquam erat volutpat. Duis non tristique orci, quis pulvinar 
erat. Nam dignissim a nisl et vulputate. Praesent quis 
pharetra metus, in consequat lacus. Pellentesque dictum 
sapien odio, eu venenatis ante semper nec. Pellentesque 
condimentum, orci ac malesuada imperdiet, ex dui tincidunt 
felis, non imperdiet ipsum lacus vel nisi. <br/><br/>Etiam vel lectus consequat, molestie tellus non, luctus arcu. 
Vivamus hendrerit, urna sed porttitor volutpat, dolor ex 
rutrum metus, ut tempor lacus est et metus. In vel mattis 
magna, eget feugiat mauris. Vivamus quis congue magna. 
Praesent pretium eros quis velit convallis cursus. In lorem 
urna, maximus vitae bibendum euismod, egestas et enim. In 
efficitur purus mauris, sit amet lacinia nunc volutpat in.</div>
                    <div class="place-content"></div>
                </div>
            </div>
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
.blog-detail {
    display: flex;
}.blog-detail-title {
    color: #f2fe02;
    font-size: 35px;
}
.blog-detail-content {
    color: #616161; 
    font-size: 16pt;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: scroll;
    height: calc(100vh - 232px);
    direction: rtl;
}
.blog-detail-content div:first-child {
    direction: ltr;
}
.place-content {
    bottom: 20px;
    width: 35%;
    height: auto;
    border-radius: 10px;
    border: solid 1px #616161;
    border-style: dashed;
    margin-left: 5%;
}
</style>