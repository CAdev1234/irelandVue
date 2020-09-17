<template>
    <div class="home-page">
        <v-container fluid>
            <v-row>
                <v-col cols="12" sm="12" md="5" lg="4" xl="4" class="hello-kush">
                    <div class="font-coolvetica" style="font-size: 70pt;color:white;">Hello, i'm</div>
                    <div class="font-coolvetica" style="font-size: 70pt;color:white;">An Kush</div><br/><br/>
                    <div style="color: #616161; font-size: 16pt;height: 250px; overflow-y: scroll;overflow-x: hidden;overflow: auto;">
                        <p>Info/about</p><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p><br/>
                        <p>elit. Docne frementum tincidunt mi eu elementum.</p><br/>
                        <p>Class aptent taciti sociosqu ad litora torquesnt per</p><br/>
                        <p>conubia nostra, per inceptos himenaeos.</p><br/>
                    </div>
                    <div class="social-media-handle">
                        <div style="display: flex">
                            <div style="width: 20px; height:20px;border-radius: 50%;background-color:#616161;margin-right:20px"></div>
                            <span>social media handle</span>
                        </div>
                        <div style="display: flex;margin-top:10px">
                            <div style="width: 20px; height:20px;border-radius: 50%;background-color:#616161;margin-right:20px"></div>
                            <span>social media handle</span>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="feature">
                    <div class="blog-part">
                        <div class="blog-feature" style="margin-right: 2%;width: 48%;">
                            <div class="font-coolvetica" style="color: #f2fe02;font-size:25pt">Featured Blogs</div>
                            <HomeBlogItem title="Blog title" bgColor="#424242"/>
                        </div>
                        <div class="blog-feature" style="margin-left: 2%;width: 48%;">
                            <div class="font-coolvetica" style="color: #f2fe02;font-size:25pt">Featured Tutorials</div>
                            <HomeBlogItem title="Tutorial title" bgColor="#424242"/>
                            <HomeBlogItem title="Tutorial title" bgColor="#616161"/>
                            <HomeBlogItem title="Tutorial title" bgColor="#757575"/>
                        </div>
                    </div>
                    <div class="place-content"></div>
                </v-col>
                <v-col cols="12" sm="12" md="1" lg="2" xl="2" class="menu">
                    <button class="menu-btn" v-if="isshowed_menu_list === 'none'" @click="MenuBtn_Clicked">Menu/NavBar</button>
                    <button class="menu-btn" v-if="isshowed_menu_list === 'block'" @click="MenuBtn_Clicked" style="text-align: left; padding-left:15px">&#x2573;</button>
                    <div class="sub-menu-list" v-bind:style="{display: isshowed_menu_list}">
                        <div class="sub-menu">
                            <v-btn text small @click="$router.push('/blog')">Blogs</v-btn>
                        </div>
                        <div class="sub-menu">
                            <v-btn text small @click="$router.push('/portfolio')">Portfolio</v-btn>
                        </div>
                        <div class="sub-menu">
                            <v-btn text small @click="$router.push('/misc')">Misc</v-btn>
                        </div>
                        <div class="sub-menu">
                            <v-btn text small >Contact</v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        
    </div>
</template>
<script>
import HomeBlogItem from '../components/HomeBlogItem'
export default {
    data() {
        return {
            isshowed_menu_list: "none",
        }
    },
    components: {
        HomeBlogItem
    },
    methods: {
        MenuBtn_Clicked() {
            console.log("isshowed_menu_list=", this.isshowed_menu_list);
            if(this.isshowed_menu_list == "none") this.isshowed_menu_list = "block"
            else this.isshowed_menu_list = "none"
        }
    }
}   
</script>
<style scoped>
.home-page {
    background-color: black;
    height: 100vh;
    padding-left: 50px;
    padding-top: 80px;
}
.center-css {
    display: flex;
    justify-content: center;
    align-items: center;
}
.hello-kush {
    position: relative;
}
.hello-kush .social-media-handle {
    color: #616161;
    margin-top: 200px;
    bottom: 20px;
}
.feature .blog-part {
    display: flex;
    width: 100%;
}
.feature .place-content {
    bottom: 20px;
    width: 100%;
    height: 300px;
    border-radius: 10px;
    border: solid 1px #616161;
    border-style: dashed; 
    margin-top: 40px;
}
.menu .menu-btn {
    background: #f2fe02;
    width: 130px;
    height: 40px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 10pt;
    margin-right: 10px;
    margin-top: -80px;
    float: right;
}
.menu .sub-menu-list {
    display: none;
    float: right;
    width: 120px;
    margin-right: 10px;
    margin-top: -30px;
}
.menu .sub-menu-list .sub-menu button {
    color: white;
    margin-bottom: 15px;
}
.menu .sub-menu {
    text-align: left;
    margin-right: 10px;
}
@media only screen and ( max-width: 1366px) {
    .home-page {
        height: 100%;
        padding-left: 0px;
    }
    .menu {
        position: absolute;
        top: 100px;
        right: 0px;
    }
}
@media only screen and ( max-width: 720px) {
    .home-page {
        height: 100%;
        padding-left: 0px;
    }
    .menu {
        position: absolute;
        top: 100px;
        right: 0px;
    }
}
</style>