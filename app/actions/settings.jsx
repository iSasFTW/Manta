import * as ACTION_TYPES from '../constants/actions.jsx';

export const updateInfo = data => {
  return {
    type: ACTION_TYPES.UPDATE_SETTINGS_INFO,
    data,
  };
};

export const updateAppSettings = data => {
  return {
    type: ACTION_TYPES.UPDATE_APP_SETTINGS,
    data,
  };
};

export const updatePrintOptions = data => {
  return {
    type: ACTION_TYPES.UPDATE_PRINT_OPTIONS,
    data,
  };
};

export const saveSettings = data => {
  return {
    type: ACTION_TYPES.SAVE_SETTINGS,
    data,
  };
};