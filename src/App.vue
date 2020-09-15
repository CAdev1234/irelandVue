<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: CoolveticaRg;
  src: url("./assets/fonts/coolvetica.woff");
}
.font-coolvetica {
    font-family: CoolveticaRg;
}
button:focus {
  outline: none;
}
input:focus {
  outline: none;
}
/* width */
::-webkit-scrollbar {
  width: 4px;
}


/* Track */
::-webkit-scrollbar-track {
  background: #212121; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #f2fe02; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #FFFF00; 
}
</style>
