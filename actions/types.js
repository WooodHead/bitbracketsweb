export const actionTypes = {
  /** Language actions. */
  FETCH_LANGUAGES_REQUEST: 'fetch_language_request',
  FETCH_LANGUAGES_SUCCESS: 'fetch_language_success',
  FETCH_LANGUAGES_FAIL: 'fetch_language_fail',
  CHANGE_LANGUAGE_REQUEST: 'change_language_request',
  CHANGE_LANGUAGE_SUCCESS: 'change_language_success',
  CHANGE_LANGUAGE_FAIL: 'change_language_fail',

  /** Metamask actions. */
  LOCKED_METAMASK_ACCOUNT: 'locked_metamask_account',
  UNLOCKED_METAMASK_ACCOUNT: 'unlocked_metamask_account',
  CHANGE_METAMASK_NETWORK: 'change_metamask_network',
  CHANGE_METAMASK_ACCOUNT: 'change_metamask_account',

  /** Create Pool actions. */
  CREATE_POOL_REQUEST: 'create_pool_request',
  CREATE_POOL_SUCCESS: 'create_pool_success',
  CREATE_POOL_FAILED: 'create_pool_fail',
  POOL_DETAIL_REQUEST: 'pool_detail_request',
  POOL_DETAIL_SUCCESS: 'pool_detail_success',
  POOL_DETAIL_FAILED: 'pool_detail_fail',

  /** Fetch Pool actions. */
  FETCH_POOL_REQUEST: 'fetch_pool_request',
  FETCH_POOL_SUCCESS: 'fetch_pool_success',
  FETCH_POOL_FAIL: 'fetch_pool_fail',
  FETCH_POOL_PARTICIPANTS_REQUEST: 'fetch_pool_participants_request',
  FETCH_POOL_PARTICIPANTS_SUCCESS: 'fetch_pool_participants_success',
  FETCH_POOL_PARTICIPANTS_FAIL: 'fetch_pool_participantes_fail',

  /** Join Pool actions. */
  JOIN_POOL_REQUEST: 'join_pool_request',
  JOIN_POOL_SUCCESS: 'join_pool_success',
  JOIN_POOL_FAIL: 'join_pool_fail',

  /** Predictions actions. */
  FETCH_PREDICTIONS_REQUEST: 'fetch_predictions_request',
  FETCH_PREDICTIONS_SUCCESS: 'fetch_predictions_success',
  FETCH_PREDICTIONS_FAIL: 'fetch_predictions_fail',
  UPDATE_PREDICTION_REQUEST: 'update_prediction_request',
  UPDATE_PREDICTION_SUCCESS: 'update_prediction_success',
  UPDATE_PREDICTION_FAIL: 'update_prediction_fail',
  SAVE_PREDICTIONS_REQUEST: 'save_prediction_request',
  SAVE_PREDICTIONS_SUCCESS: 'save_prediction_success',
  SAVE_PREDICTIONS_FAIL: 'save_prediction_fail',
};
