import { auth, db } from '../../firebase';
import router from '../../router/index';

const state = {
    user: null,
    error: null,
    nickname: null
}

const getters = {
    getUser(state) {
        return state.user;
    },
    GetUserName(state) {
        return state.nickname
    },
    getError(state) {
        return state.error;
    }
}


const actions = {
    signUp({ commit }, formData) {
        auth.createUserWithEmailAndPassword(formData.email, formData.password)
            .then(response => {
                db.collection('users').doc(response.user.uid).set({
                    nickname: formData.nickname
                }).then(response => {
                    commit("setUser", response);
                    commit("setError", null);
                    router.push("/dashboard");
                })
            })
            .catch(error => {
                commit("setError", error.message);
                console.log(error.message);
            })
    },
    signIn({ commit }, formData) {
        auth.signInWithEmailAndPassword(formData.email, formData.password)
            .then(res => {
                commit("setUser", res);
                commit("setError", null);
                router.push("/dashboard");
            })
            .catch(error => {
                console.log(error.message);

                commit("setError", error.message);
                console.log(error.message);
            });
    },
    logout({ commit }) {
        auth.signOut()
            .then(() => {
                commit('setUser', null);
                router.push("/login");
            })
            .catch((error) => {
                commit("setError", error.message);
                console.log(error.message);
            })
    },
    GetUserNickName({ commit }, id) {
        db.collection('users').doc(id).get().then(doc => {
            console.log(doc.data().nickname);
            commit('setNickName', doc.data().nickname);
        })
    },
    initRealtimeListeners({ commit }) {
        db.collection("users").onSnapshot(function (snapshot) {
            snapshot.docChanges().forEach(function (change) {
                if (change.type === "modified") {
                    console.log("update", change.doc.data());
                    commit('setNickName', change.doc.data().nickname)
                }
            });
        });
    }
}

const mutations = {
    setUser: (state, user) => (state.user = user),
    setError: (state, error) => (state.error = error),
    setNickName: (state, nickname) => (state.nickname = nickname)
}
export default {
    state,
    getters,
    actions,
    mutations
}