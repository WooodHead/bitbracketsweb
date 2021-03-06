/* eslint-disable import/prefer-default-export */

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
  SAVE_PREDICTIONS_REQUEST: 'save_predictions_request',
  SAVE_PREDICTIONS_SUCCESS: 'save_predictions_success',
  SAVE_PREDICTIONS_FAIL: 'save_predictions_fail',

  /** Contest actions. */
  FETCH_MATCHES_REQUEST: 'fetch_matches_request',
  FETCH_MATCHES_SUCCESS: 'fetch_matches_success',
  FETCH_MATCHES_FAIL: 'fetch_matches_fail',
  FETCH_TEAMS_REQUEST: 'fetch_teams_request',
  FETCH_TEAMS_SUCCESS: 'fetch_teams_success',
  FETCH_TEAMS_FAIL: 'fetch_teams_fail',

  /** Fetch Pools actions */
  FETCH_POOLS_REQUEST: 'fetch_pools_request',
  FETCH_POOLS_SUCCESS: 'fetch_pools_success',
  FETCH_POOLS_FAIL: 'fetch_pools_fail'
};
