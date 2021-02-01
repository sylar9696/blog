import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
    return new Vuex.Store({
        state : {
            posts : []
        },
        mutations : {
            setPosts(state,posts){
                state.posts = posts;
            },
            newPost(state, newPost){
                state.posts.push(newPost);
            },
            editPost(state, editPost){
                const index = state.posts.findIndex(post => post.id == editPost.id);
                state.posts[index] = editPost;
            }
        },
        actions : {
            nuxtServerInit(vuexContext){
                /*  Permette di richiamare tutti i post che vengono creati e salvati su Firebase */
                return axios.get('https://nuxt-alessandro-corso-default-rtdb.firebaseio.com/posts.json')
                .then(res => {
                    const postArray = [];
                    for(const key in res.data){
                        postArray.push({...res.data[key],id :key})
                    }
                    vuexContext.commit('setPosts',postArray);
                    
                })
                .catch(err => console.log(err));
            },
            addPost(context,newPost){
                return axios.post('https://nuxt-alessandro-corso-default-rtdb.firebaseio.com/posts.json',newPost)
                .then(result => {
                    console.log(result.data.name)
                    context.commit('newPost', { ...newPost , id : result.data.name })
                })
                .catch(result => {
                    console.log(error)
                    this.loading = false;
                });
            },
            editPost(context,editPost){
                return axios.put(`https://nuxt-alessandro-corso-default-rtdb.firebaseio.com/posts/${editPost.postId}.json`,editPost)
                    .then(result => {
                        console.log(result.data.name)
                        context.commit('editPost', editPost)
                    })
                    .catch(result => {
                        console.log(error)
                        this.loading = false;
                    });
            },
            fetchPosts(context,post){
                context.commit('setPosts', posts)
            }
        },
        getters : {
            getPosts(state){
                return state.posts;
            },
            getPost : (state) => (postId) => {
                const p = state.posts.find(post => post.id == postId);
                return p ? p : null;
            }
        }
    })
}

export default createStore;