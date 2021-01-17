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
            updateEvaluation(state, payload) {
                const newOers = [...state.oers];
                const reqIndex = newOers.findIndex(oer => {
                    return oer.id === payload.id;
                })
                newOers[reqIndex].oers[payload.index].allotedPoints = payload.allotedPoints;
                newOers[reqIndex].oers[payload.index].points = payload.points;
                state.oers = newOers;
                var db = fireDb;
                db.collection("Work").doc(newOers[reqIndex].id).update({oers:newOers[reqIndex].oers});

            }
        },
        getters: {
            oers: (state) => {
                return state.oers;
            }, 
            oerById: (state) => (id) => {
                const oer = state.oers.filter((el) => {
                    return el.id === id;
                });
                console.log(oer);
                return oer[0];
            },
            allotedPointsByIdIndex: (state) => (search) => {
                const oer = state.oers.find(oer => oer.id === search.id);
                return oer.oers[search.index].allotedPoints;
            }
        },
        actions: {
            setOers(vuexContext, oers) {
                vuexContext.commit('setOers', oers)
            },
            async nuxtServerInit(vuexContext, context) {
                const data = await fetchFromServer();
                vuexContext.commit('setOers', data);
            },
            updateEvaluation(vuexContext, payload) {
                vuexContext.commit('updateEvaluation', payload);
            }
        },
    })
}

export default createStore