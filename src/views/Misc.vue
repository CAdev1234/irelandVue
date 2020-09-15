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
                            <v-btn text small>Home</v-btn>
                        </div>
                        <div class="sub-menu">
                            <v-btn text small color="error">Blog</v-btn>
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
            <div class="misc-main">
                <div style="display: flex;width:100%;margin-bottom: 40px;direction:ltr">
                    <div class="misc-detail-left">
                        <div class="font-coolvetica" style="color: #f2fe02;font-size: 30pt;margin-bottom: 20px;">Quote of the day</div>
                        <div style="color: #BDBDBD;line-height: 1.6;font-size: 14pt">
                            “Any fool can write code that a 
computer can understand. Good 
programmers write code that humans 
can understand.” – Martin Fowler
                        </div>
                    </div>
                    <div>
                        <v-card class="misc-card"></v-card>
                    </div>
                </div>
                <div style="display: flex;width:100%;margin-bottom: 40px;direction:ltr">
                    <div>
                        <v-card class="misc-card"></v-card>
                    </div>
                    <div class="misc-detail-right">
                        <div class="font-coolvetica" style="color: #f2fe02;font-size: 30pt;margin-bottom: 20px;">Programming Joke</div>
                        <div style="color: #BDBDBD;line-height: 1.6;font-size: 14pt">
                            <span style="font-size: 25pt">Me:</span> I'm so sorry, my dog ate my homework<br/>
                            <span style="font-size: 25pt">Proffesor:</span>  Your dog ate your coding assignment?<br/> 
                            <span style="font-size: 25pt">Me:</span>Yeah, it took him a couple of bytes
                        </div>
                    </div>
                </div>
                <div style="display: flex;width:100%;margin-bottom: 40px;direction:ltr">
                    <div class="misc-detail-left">
                        <div class="font-coolvetica" style="color: #f2fe02;font-size: 30pt;margin-bottom: 20px;">Quote of the day</div>
                        <div style="color: #BDBDBD;line-height: 1.6;font-size: 14pt">
                            “Any fool can write code that a 
computer can understand. Good 
programmers write code that humans 
can understand.” – Martin Fowler
                        </div>
                    </div>
                    <div>
                        <v-card class="misc-card"></v-card>
                    </div>
                </div>
                <div style="display: flex;width:100%;margin-bottom: 40px;direction:ltr">
                    <div>
                        <v-card class="misc-card"></v-card>
                    </div>
                    <div class="misc-detail-right">
                        <div class="font-coolvetica" style="color: #f2fe02;font-size: 30pt;margin-bottom: 20px;">Programming Joke</div>
                        <div style="color: #BDBDBD;line-height: 1.6;font-size: 14pt">
                            <span style="font-size: 25pt">Me:</span> I'm so sorry, my dog ate my homework<br/>
                            <span style="font-size: 25pt">Proffesor:</span>  Your dog ate your coding assignment?<br/> 
                            <span style="font-size: 25pt">Me:</span>Yeah, it took him a couple of bytes
                        </div>
                    </div>
                </div>
            </div>
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

</style>