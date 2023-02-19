import { createReducer, on } from "@ngrx/store";
import { addHeroDetail } from "./hero-action.action";

export const initialState = {
  hero: {},
};
export const appInitialState = {
  // subFooter: {
  //   id: '',
  //   data: [],
  //   type: '',
  //   isSubFooterLoaded: false,
  //   isInitialState: true
  // },
}

// const _appReducer = createReducer(appInitialState,
//   on(setCurrentPageGoal, (_state,{payload}) => {
//       let state = {..._state};
//       state.currentPageGoal = payload;
//       return state;
//   }),

// on(passesLoaded, (_state,{payload}) => {
//   let state = {..._state};
//   state.passes = {... payload};
//   return Object.assign({},state);
// }),

// export const heroReducer = createReducer(
//   initialState,
//   on( addHeroDetail, (_state, {payload}) => {
//     let state = {..._state};
//     state = { ...payload};
//   }),
// );

// on(getPageSeoLoaded, (_state, {payload}) => {
//   let state = {..._state};
//   if(payload && payload.sections){
//       state.subFooter = {
//           ...state.subFooter,
//           data: payload.sections,
//           isSubFooterLoaded: true,
//           isInitialState: undefined
//       };
//   }
//   return state;
// }),

//  ## **
// export const heroReducer = createReducer(
//   initialState,
//   on(addHeroDetail, (_state, { payload }) => {
//     let state = {..._state};
//     state.hero = payload;
//     return state;
//   }),
// );


export const heroReducer = createReducer(
  initialState,
  on( addHeroDetail,
    (state, {payload}) => ({
      ...state,
      hero: payload,
    }),
  ),
);

