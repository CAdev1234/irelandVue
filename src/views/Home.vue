<template>
    <div class="home-page">
        <v-container fluid>
            <v-row>
                <v-col cols="3" sm="4" md="4" lg="4" xl="4" class="hello-kush">
                    <div class="font-coolvetica" style="font-size: 70pt;color:white;">Hello, i'm</div>
                    <div class="font-coolvetica" style="font-size: 70pt;color:white;">An Kush</div><br/><br/>
                    <div style="color: #616161; font-size: 16pt">
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
export default {
    data() {
        return {
            isshowed_menu_list: "none",
        }
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
    position: absolute;
    bottom: 20px;
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
</style>