import Vuex from 'vuex'
import { fireDb } from "~/plugins/firebase.js";

const fetchFromServer = async () => {
    const oers = [];
    const Ref = fireDb.collection("Work");
    const snapshot = await Ref.get();
    if (snapshot.empty) {
        console.log("No matching documents.");
        return;
    }
    snapshot.forEach((doc) => {
        oers.push({
            id: doc.id,
            ...doc.data(),
        });
    });
    return oers;
}

const createStore = () => {
    return new Vuex.Store({
        state: {
            oers: [],
        },
        mutations: {
            setOers(state, oers) {
                state.oers = oers;
            },
        },
        getters: {
            oers(state) {
                return state.oers
            },
        },
        actions: {
            setOers(vuexContext, oers) {
                vuexContext.commit('setOers', oers)
            },
            async nuxtServerInit(vuexContext, context) {
                const data = await fetchFromServer();
                vuexContext.commit('setOers', data);
            },
        },
    })
}

export default createStore