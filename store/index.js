import Vuex from "vuex";
import { fireDb } from "~/plugins/firebase.js";
import { fireAuth } from "../plugins/firebase";

const fetchFromServer = async () => {
  const oers = [];
  const Ref = fireDb.collection("Work");
  const snapshot = await Ref.get();
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  snapshot.forEach(doc => {
    oers.push({
      id: doc.id,
      ...doc.data()
    });
  });
  return oers;
};

const createStore = () => {
  return new Vuex.Store({
    state: {
      oers: [],
      email: ""
    },
    mutations: {
      setOers(state, oers) {
        state.oers = oers;
      },
      updateEvaluation(state, payload) {
        const newOers = [...state.oers];
        const reqIndex = newOers.findIndex(oer => {
          return oer.id === payload.id;
        });
        newOers[reqIndex].oers[payload.index].allotedPoints =
          payload.allotedPoints;
        newOers[reqIndex].oers[payload.index].points = payload.points;
        state.oers = newOers;
        var db = fireDb;
        db.collection("Work")
          .doc(newOers[reqIndex].id)
          .update({ oers: newOers[reqIndex].oers });
      },
      setEmail(state, payload) {
        state.email = payload.email;
      }
    },
    getters: {
      oers: state => {
        return state.oers;
      },
      oerById: state => id => {
        const oer = state.oers.filter(el => {
          return el.id === id;
        });
        console.log(oer);
        return oer[0];
      },
      allotedPointsByIdIndex: state => search => {
        const oer = state.oers.find(oer => oer.id === search.id);
        return oer.oers[search.index].allotedPoints;
      },
      oersByDept: state => {
        let filterdOers = [];
        if (state.email == "gsvelu@gmail.com") {
          filterdOers = state.oers.filter(oer => {
            return oer.user % 12 === 1 
          });
          return filterdOers;
        }
        else if(state.email == "jagan.madhavan@gmail.com"){
            filterdOers = state.oers.filter(oer => {
                return oer.user%12 === 2;
              });
              return filterdOers;
        }
        else if(state.email == "rajasekargood@gmail.com"){
          filterdOers = state.oers.filter(oer => {
              return oer.user%12 === 3;
            });
            return filterdOers;
      }
      else if(state.email == "thirumalaid@gmail.com"){
        filterdOers = state.oers.filter(oer => {
            return oer.user%12 === 4;
          });
          return filterdOers;
    }
    else if(state.email == "kishore130@gmail.com"){
      filterdOers = state.oers.filter(oer => {
          return oer.user%12 === 5;
        });
        return filterdOers;
  }
  else{
    return state.oers;
  }
      }
    },
    actions: {
      setOers(vuexContext, oers) {
        vuexContext.commit("setOers", oers);
      },
      async nuxtServerInit(vuexContext, context) {
        const data = await fetchFromServer();
        vuexContext.commit("setOers", data);
      },
      updateEvaluation(vuexContext, payload) {
        vuexContext.commit("updateEvaluation", payload);
      },
      setEmail(vuexContext,payload){
          vuexContext.commit("setEmail",payload);
      }
    }
  });
};

export default createStore;
