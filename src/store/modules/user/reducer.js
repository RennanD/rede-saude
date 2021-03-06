import { produce } from "immer";

const INITIAL_STATE = {
  profile: null,
  signed: false,
  loading: false
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@user/SING_IN_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@user/SING_IN_SUCCESS": {
        draft.profile = action.payload.profile;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case "@user/SING_IN_FAILURE": {
        draft.loading = false;
        break;
      }
      case "@user/SING_OUT": {
        draft.profile = null;
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
