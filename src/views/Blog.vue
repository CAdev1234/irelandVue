<template>
    <div class="blog-page">
        <v-container fluid>
            <v-row>
                <v-col cols="12" sm="3" md="4" lg="2" xl="2" class="hello-kush">
                    <div class="font-coolvetica" style="font-size: 70pt;color:white;">Blogs</div>
                </v-col>
                <v-col cols="12" sm="8" md="7" lg="7" xl="7">
                    <div class="place-content"></div>
                </v-col>
                <v-col cols="3" sm="1" md="1" lg="3" xl="3" class="menu">
                    <button class="menu-btn" v-if="isshowed_menu_list === 'none'" @click="MenuBtn_Clicked">
                        <i class="fa fa-reorder" style="font-size:24px"></i>
                    </button>
                    <button class="menu-btn" v-if="isshowed_menu_list === 'block'" @click="MenuBtn_Clicked" style="text-align: center;">&#x2573;</button>
                    <div class="sub-menu-list" v-bind:style="{display: isshowed_menu_list}">
                        <div class="sub-menu">
                            <v-btn text small @click="$router.push('/')">Home</v-btn>
                        </div>
                        <div class="sub-menu">
                            <v-btn text small @click="$router.push('/portfolio')">Portfolio</v-btn>
                        </div>
                        <div class="sub-menu">
                            <v-btn text small @click="$router.push('/misc')">Misc</v-btn>
                        </div>
                        <div class="sub-menu">
                            <v-btn text small>Contact</v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="7" md="8" lg="9" xl="9" class="blog-list">
                    <v-row>
                        <v-col cols="9" sm="6" md="6" xl="4">
                            <v-card class="mx-auto blog-card" style="background-color: #212121" @click="$router.push('/blog1')">
                                <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title class="headline mb-1 card-title font-coolvetica">Hello Sunshine</v-list-item-title>
                                    <v-list-item-subtitle class="card-detail">information about the blog</v-list-item-subtitle>
                                </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-col>
                        <v-col cols="9" sm="6" md="6" xl="4">
                            <v-card class="mx-auto blog-card" style="background-color: #424242">
                                <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title class="headline mb-1 card-title font-coolvetica">Blog title</v-list-item-title>
                                    <v-list-item-subtitle class="card-detail">information about the blog</v-list-item-subtitle>
                                </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-col>
                        <v-col cols="9" sm="6" md="6" xl="4">
                            <v-card class="mx-auto blog-card" style="background-color: #616161">
                                <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title class="headline mb-1 card-title font-coolvetica">Blog title</v-list-item-title>
                                    <v-list-item-subtitle class="card-detail">information about the blog</v-list-item-subtitle>
                                </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="9" sm="6" md="6" xl="4">
                            <v-card class="mx-auto blog-card" style="background-color: #757575">
                                <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title class="headline mb-1 card-title font-coolvetica">Blog title</v-list-item-title>
                                    <v-list-item-subtitle class="card-detail">information about the blog</v-list-item-subtitle>
                                </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-col>
                        <v-col cols="9" sm="6" md="6" xl="4">
                            <v-card class="mx-auto blog-card" style="background-color: #757575">
                                <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title class="headline mb-1 card-title font-coolvetica">Blog title</v-list-item-title>
                                    <v-list-item-subtitle class="card-detail">information about the blog</v-list-item-subtitle>
                                </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-col>
                        <v-col cols="9" sm="6" md="6" xl="4">
                            <v-card class="mx-auto blog-card" style="background-color: #757575">
                                <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title class="headline mb-1 card-title font-coolvetica">Blog title</v-list-item-title>
                                    <v-list-item-subtitle class="card-detail">information about the blog</v-list-item-subtitle>
                                </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" sm="5" md="4" lg="3" xl="3">
                    <div style="display: flex; margin-top: 50px; margin-left: 20px;">
                        <input class="blog-search" type="text" placeholder="Search">
                        <button class="blog-search-btn"><i class="fa fa-search" style="font-size:24px"></i></button>
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
.blog-page {
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
.blog-list {
    overflow-x: hidden;
    overflow-y: scroll;
    overflow: auto;
    height: 500px;
    direction: rtl;
    margin-top: 50px;
    padding-top: 0px !important;
    padding-bottom: 0px !important;
}
.blog-list .row {
    direction: ltr;
    padding-left: 10px;
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
    width: 100%;
    height: 250px;
    direction: ltr;
}
.place-content {
    bottom: 20px;
    width: 100%;
    height: 150px;
    border-radius: 10px;
    border: solid 1px #616161;
    border-style: dashed; 
}
.menu .menu-btn {
    background: #f2fe02;
    width: 50px;
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
    margin-right: 60px;
    margin-top: -80px;
}
.menu .sub-menu-list .sub-menu button {
    color: white;
    margin-bottom: 15px;
}
.menu .sub-menu {
    text-align: left;
    margin-right: 10px;
}
.blog-search {
    height: 40px;
    background-color: #f2fe02;
    padding-left: 15px;
    border-radius: 20px 0px 0px 20px;
}
.blog-search-btn {
    background-color: #f2fe02;
    height: 40px;
    width: 60px;
    border-radius: 0px 20px 20px 0px;
    margin-left: 5px;
}
@media only screen and ( max-width: 929px) {
    .blog-page {
        padding-left: 10px;
    }
    .menu {
        position: absolute;
        top: 80px;
        right: 0px;
    }
    .place-content {
        margin: 0px;
    }
}
@media only screen and ( max-width: 600px ) {
    .blog-page {
        height: 100%;
    }
}
</style>