import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state : {
            post : {}
        },
        mutations : {
            setPost(state,post){
                state.post = post;
            }
        },
        actions : {
            actionPost(context, post){
                context.commit('setPost', post)
            }
        },
        getters : {
            getPost(state){
                return state.post;
            }
        }
    })
}

export default createStore;