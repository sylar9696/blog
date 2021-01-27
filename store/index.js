import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state : {
            posts : []
        },
        mutations : {
            setPost(state,posts){
                state.posts = posts;
            }
        },
        actions : {
            nuxtServerInit(context){

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