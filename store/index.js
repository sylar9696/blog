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
            fetchPosts(context,post){
                context.commit('setPosts', posts)
            }
        },
        getters : {
            getPosts(state){
                return state.posts;
            }
        }
    })
}

export default createStore;