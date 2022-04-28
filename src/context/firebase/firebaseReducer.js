import {SHOW_LOADER, ADD_NOTE, UPDATE_NOTE, FETCH_NOTES, FETCH_NOTE, REMOVE_NOTE} from '../types'

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_NOTE]: (state, {payload}) => ({
        ...state,
        notes: state.notes ? [...state.notes, payload] : [payload]
    }),
    [UPDATE_NOTE]: (state, {payload}) => ({
        ...state,
        note: {...state.note, payload}
    }),
    [FETCH_NOTES]: (state, {payload}) => ({...state, notes: payload, loading: false }),
    [FETCH_NOTE]: (state, {payload}) => ({...state, note: payload, loading: false }),
    [REMOVE_NOTE]: (state, {payload}) => ({
        ...state,
        notes: state.notes.filter(note => note.id !== payload)
    }),
    DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}