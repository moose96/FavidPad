const TOGGLE_SFX_PLAYER = 'sfxPlayer/toggle';

const INITIAL_STATE = {
  active: true
}

export function toggleSfxPlayer(toggle) {
  return {
    type: TOGGLE_SFX_PLAYER,
    value: toggle
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TOGGLE_SFX_PLAYER:
      return {
        ...state,
        active: action.value
      }
    default:
      return state
  }
}