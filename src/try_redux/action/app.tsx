export const INCREMENT = 'INCREMENT';

export const increment = () => ({
    type: INCREMENT as typeof INCREMENT,
    payload: {},   // optional 主なデータ
    meta: {},      // optional　追加情報
    error: false   // optional エラーかどうか
});