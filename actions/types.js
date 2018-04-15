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
    CREATE_POOL_FAIL: 'create_pool_fail',
}