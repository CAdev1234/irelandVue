<template>
    <div class="home-page">
        <v-container fluid>
            <v-row>
                <v-col cols="12" sm="6" md="5" lg="4" xl="3" class="hello-kush">
                    <div class="font-coolvetica" style="font-size: 70pt;color:white;">Hello, i'm</div>
                    <div class="font-coolvetica" style="font-size: 70pt;color:white;">An Kush</div>
                    <div class="social-media-handle">
                        <div style="display: flex">
                            <div style="width: 20px; height:20px;border-radius: 50%;background-color:#616161;margin-right:20px"></div>
                            <span>social media handle</span>
                        </div>
                        <div style="display: flex;margin-left: 20px">
                            <div style="width: 20px; height:20px;border-radius: 50%;background-color:#616161;margin-right:20px"></div>
                            <span>social media handle</span>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="7" xl="7" class="feature">
                    <div style="color: #616161; font-size: 16pt;margin-top: 25px;height: 160px; overflow-y: scroll;overflow-x: hidden;overflow: auto;">
                        <p>Info/about</p><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Docne frementum tincidunt mi eu elementum. Class aptent taciti sociosqu ad litora torquesnt perconubia nostra, per inceptos himenaeos.</p><br/>
                    </div>
                </v-col>
                <v-col cols="12" sm="1" md="1" lg="1" xl="2"></v-col>
            </v-row>
            <v-row style="margin-top:50px">
                <v-col cols="12" sm="12" md="9" lg="7" xl="6" class="feature">
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
                </v-col>
                <v-col cols="12" sm="12" md="2" lg="3" xl="4">
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
                            <v-btn text small color="error">Contact</v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        
    </div>
</template>
<script>
import HomeBlogItem from '../components/HomeBlogItem'
import $ from 'jquery'
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
            if(this.isshowed_menu_list == "none") {
                this.isshowed_menu_list = "block"
                $(".menu .menu-btn").css("cssText", "bottom:150px");
            }
            else {
                this.isshowed_menu_list = "none"
                $(".menu .menu-btn").css("cssText", "bottom:-90px");
            }
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
    min-width: 384px;
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
    display: flex;
}
.feature .blog-part {
    display: flex;
    width: 100%;
}
.place-content {
    bottom: 20px;
    width: 100%;
    height: 350px;
    border-radius: 10px;
    border: solid 1px #616161;
    border-style: dashed; 
    margin-top: 50px;
    margin-left: 30px;
}
.menu {
    position: relative;
}
.menu .menu-btn {
    position: absolute;
    bottom: -90px;
    right: 30px;
    background: #f2fe02;
    width: 130px;
    height: 40px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 10pt;
}
.menu .sub-menu-list {
    position: absolute;
    bottom: -30px;
    right: 10px;
    display: none;
    width: 120px;
}
.menu .sub-menu-list .sub-menu button {
    color: white;
    margin-bottom: 15px;
}
.menu .sub-menu {
    text-align: left;
    margin-right: 10px;
}
@media only screen and ( max-width: 960px) {
    .home-page {
        height: 100%;
        padding-left: 0px;
    }
    .menu {
        position: fixed;
        bottom: 120px;
        right: 0px;
    }
    .place-content {
        margin: 0px;
    }
}
</style>