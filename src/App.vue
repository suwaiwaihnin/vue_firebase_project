<template>
  <div class="app">
    <nav>
      <ul>
        <li><router-link to='/'>VueFirebase</router-link></li>
      </ul>
      <ul>
        <li><router-link v-if='!addpost' to='/addpost'>New Post</router-link></li>
      </ul>
    </nav>
    <router-link></router-link>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      addpost : false
    }
  },
  watch:{
    '$route':{
      handler: to => {
        if(to.addpost === '/addpost')
          this.addpost = true;
        else
         this.addpost = false;

      },
      immediate : true
    }
  }
}
</script>