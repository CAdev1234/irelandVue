<template>
    <div class="blog-page">
        <v-container fluid>
            <v-row>
                <v-col cols="12" sm="12" md="4" lg="3" xl="3" class="hello-kush">
                    <div class="font-coolvetica" style="font-size: 70pt;color:white;">Blogs</div>
                    <div class="blog-list">
                        <div v-for="(item, index) in blogCard" v-bind:key="index">
                            <div @click="SelectBlog(index)">
                                <BlogCard :title="item.title" :bgColor="item.bgColor"/>
                            </div>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" sm="12" md="7" lg="8" xl="8">
                    <div>
                        <BlogContentContainer :title="blogCard[displayedNum].title" :bgColor="blogCard[displayedNum].bgColor"/>
                    </div>
                </v-col>
                <v-col cols="12" sm="12" md="1" lg="1" xl="1" class="menu">
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
        </v-container>
    </div>
</template>
<script>
import BlogCard from '../components/BlogCard'
import BlogContentContainer from '../components/BlogContentContainer'
export default {
    data() {
        return {
            blogCard: [
                {title: "Hello Sunshine", bgColor: "#212121"},
                {title: "Blog title1", bgColor: "#424242"},
                {title: "Blog title2", bgColor: "#616161"},
                {title: "Blog title3", bgColor: "#757575"},
                {title: "Blog title4", bgColor: "#757575"},
                {title: "Blog title5", bgColor: "#757575"}
            ],
            isshowed_menu_list: "none",
            isdisplayed: [],
            displayedNum: 0
        }
    },
    components: {
        BlogCard,
        BlogContentContainer
    },
    mounted: function() {
        for (let index = 0; index < 6; index++) {
            if(index == 0) {
                this.isdisplayed[index] = true;
            }
            else {
                this.isdisplayed[index] = false;
            }
        }
    },
    methods: {
        MenuBtn_Clicked() {
            console.log("isshowed_menu_list=", this.isshowed_menu_list);
            if(this.isshowed_menu_list == "none") this.isshowed_menu_list = "block"
            else this.isshowed_menu_list = "none"
        },
        SelectBlog(index) {
            for (let index = 0; index < this.isdisplayed.length; index++) {
                this.isdisplayed[index] = false;
            }
            this.$set(this.isdisplayed, index, true);
            this.displayedNum = index
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
    height: 600px;
    direction: rtl;
    margin-top: 50px;
    padding-left: 20px;
    padding-top: 0px !important;
    padding-bottom: 0px !important;
}
.blog-list .row {
    direction: ltr;
}
.blog-card {
    height: 150px;
    direction: ltr;
    margin-bottom: 20px;
    cursor: pointer;
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
@media only screen and ( max-width: 1700px) {
    .blog-page {
        height: 100%;
    }
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
</style>