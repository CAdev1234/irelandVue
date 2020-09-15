<template>
    <div class="home-page">
        <v-container fluid>
            <v-row>
                <v-col cols="3" sm="4" md="4" lg="4" xl="3" class="hello-kush">
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
                <v-col cols="6" sm="7" md="7" lg="6" xl="7" class="feature">
                    <div style="color: #616161; font-size: 16pt;margin-top: 25px">
                        <p>Info/about</p><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Docne frementum tincidunt mi eu elementum. Class aptent taciti sociosqu ad litora torquesnt perconubia nostra, per inceptos himenaeos.</p><br/>
                    </div>
                </v-col>
                <v-col cols="2" sm="1" md="1" lg="2" xl="2"></v-col>
            </v-row>
            <v-row style="margin-top:50px">
                <v-col cols="6" sm="7" md="7" lg="6" xl="6" class="feature">
                    <div class="blog-part">
                        <div class="blog-feature" style="margin-right: 2%;width: 48%;">
                            <div class="font-coolvetica" style="color: #f2fe02;font-size:25pt">Featured Blogs</div>
                            <v-card class="mx-auto blog-card" style="background: #262626;margin-top: 15px">
                                <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title class="headline mb-1 card-title font-coolvetica">Blog title</v-list-item-title>
                                    <v-list-item-subtitle class="card-detail">information about the blog</v-list-item-subtitle>
                                </v-list-item-content>
                                </v-list-item>
                                <div class="goto-each-blog">
                                    <i class="fa fa-external-link" style="font-size:15px;color:#f2fe02"></i>
                                </div>
                            </v-card>
                        </div>
                        <div class="blog-feature" style="margin-left: 2%;width: 48%;">
                            <div class="font-coolvetica" style="color: #f2fe02;font-size:25pt">Featured Tutorials</div>
                            <v-card class="mx-auto blog-card" style="background: #262626;margin-top: 15px">
                                <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title class="headline mb-1 card-title font-coolvetica">Tutorial title</v-list-item-title>
                                    <v-list-item-subtitle class="card-detail">information about the tutorial</v-list-item-subtitle>
                                </v-list-item-content>
                                </v-list-item>
                                <div class="goto-each-blog">
                                    <i class="fa fa-external-link" style="font-size:15px;color:#f2fe02"></i>
                                </div>
                            </v-card>
                            <v-card class="mx-auto blog-card" style="background: #424242;margin-top: 15px">
                                <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title class="headline mb-1 card-title font-coolvetica">Tutorial title</v-list-item-title>
                                    <v-list-item-subtitle class="card-detail">information about the tutorial</v-list-item-subtitle>
                                </v-list-item-content>
                                </v-list-item>
                                <div class="goto-each-blog">
                                    <i class="fa fa-external-link" style="font-size:15px;color:#f2fe02"></i>
                                </div>
                            </v-card>
                            <v-card class="mx-auto blog-card" style="background: #757575;margin-top: 15px">
                                <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title class="headline mb-1 card-title font-coolvetica">Tutorial title</v-list-item-title>
                                    <v-list-item-subtitle class="card-detail">information about the tutorial</v-list-item-subtitle>
                                </v-list-item-content>
                                </v-list-item>
                                <div class="goto-each-blog">
                                    <i class="fa fa-external-link" style="font-size:15px;color:#f2fe02"></i>
                                </div>
                            </v-card>
                        </div>
                    </div>
                </v-col>
                <v-col cols="3" sm="4" md="4" lg="4" xl="4">
                    <div class="place-content"></div>
                </v-col>
                <v-col cols="2" sm="1" md="1" lg="2" xl="2" class="menu">
                    <button class="menu-btn" v-if="isshowed_menu_list === 'none'" @click="MenuBtn_Clicked">Menu/NavBar</button>
                    <button class="menu-btn" v-if="isshowed_menu_list === 'block'" @click="MenuBtn_Clicked" style="text-align: left; padding-left:15px">&#x2573;</button>
                    <div class="sub-menu-list" v-bind:style="{display: isshowed_menu_list}">
                        <div class="sub-menu">
                            <v-btn text small>Blogs</v-btn>
                        </div>
                        <div class="sub-menu">
                            <v-btn text small color="error">Portfolio</v-btn>
                        </div>
                        <div class="sub-menu">
                            <v-btn text small>Misc</v-btn>
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
import $ from 'jquery'
export default {
    data() {
        return {
            isshowed_menu_list: "none",
        }
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
                $(".menu .menu-btn").css("cssText", "bottom:-50px");
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
.card-title {
    color: white;
    font-size: 23pt !important;
}
.card-detail {
    color: #BDBDBD !important;
    font-size: 16pt !important;
}
.blog-card {
    position: relative;
    border-radius: 10px !important;
    padding: 10px;
}
.goto-each-blog {
    position: absolute;
    top: 10px;
    right: 10px;
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
    bottom: -50px;
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
</style>