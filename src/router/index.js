import VueRouter from 'vue-router';
import Vue from 'vue'
import Main from './Main';
import Post from './Post';
import AddPost from './AddPost';

Vue.use(VueRouter);

   const routes = [
        {
            path :'/',
            name: 'main',
            component: Main
        },
        {
            path :'/post',
            name: 'post',
            component: Post
        },
        {
            path :'/addpost',
            name: 'addpost',
            component: AddPost
        },

    ];

    const router = new VueRouter({
        mode : 'history',
        routes
    });

    export default router;
