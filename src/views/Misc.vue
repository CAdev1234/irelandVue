<template>
    <div class="misc-page">
        <v-container fluid>
            <v-row>
                <v-col cols="3" sm="4" md="4" lg="4" xl="3">
                    <div class="font-coolvetica" style="font-size: 70pt;color:white;">Misc</div>
                </v-col>
                <v-col cols="6" sm="7" md="7" lg="6" xl="6"></v-col>
                <v-col cols="3" sm="1" md="1" lg="2" xl="3" class="menu">
                    <button class="menu-btn" v-if="isshowed_menu_list === 'none'" @click="MenuBtn_Clicked">
                        <i class="fa fa-reorder" style="font-size:24px"></i>
                    </button>
                    <button class="menu-btn" v-if="isshowed_menu_list === 'block'" @click="MenuBtn_Clicked" style="text-align: center;">&#x2573;</button>
                    <div class="sub-menu-list" v-bind:style="{display: isshowed_menu_list}">
                        <div class="sub-menu">
                            <v-btn text small @click="$router.push('/')">Home</v-btn>
                        </div>
                        <div class="sub-menu">
                            <v-btn text small @click="$router.push('/blog')">Blog</v-btn>
                        </div>
                        <div class="sub-menu">
                            <v-btn text small @click="$router.push('/portfolio')">Portfolio</v-btn>
                        </div>
                        <div class="sub-menu">
                            <v-btn text small color="error">Contact</v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row>
            <div class="misc-main">
                <MiscLeftItem title="Quote of the day" detail="“Any fool can write code that a 
computer can understand. Good 
programmers write code that humans 
can understand.” – Martin Fowler"/>
                <MiscRightItem title="Programming Joke"/>
                <MiscLeftItem title="Quote of the day" detail="“Any fool can write code that a 
computer can understand. Good 
programmers write code that humans 
can understand.” – Martin Fowler"/>
                <MiscRightItem title="Programming Joke"/>
            </div>
        </v-container>
    </div>
</template>
<script>
import MiscLeftItem from '../components/Misc/MiscLeftItem'
import MiscRightItem from '../components/Misc/MiscRightItem'
export default {
    data() {
        return {
            isshowed_menu_list: "none",
        }
    },
    components: {
        MiscLeftItem,
        MiscRightItem
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
.row {
    margin: 0px;
}
.misc-page {
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
.misc-main {
    width: 100%;
    margin-right: 100px;
    margin-top: 20px;
    padding-left: 10px;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 600px;
    direction: rtl;
}
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
@media only screen and ( max-width: 1600px) {
    .misc-page {
        padding-left: 10px;
    }
    .misc-item {
        display: block;
    }
    .misc-detail-right {
        margin-left: 20px;
    }
}
</style>