export const inProgress = () => ({
    type: 'IN_PROGRESS',
});

export const completed = () => ({
    type: 'COMPLETED',
});

export const errorMessage = (message: {}) => ({
    type: 'ERROR',
    payload: message,
});

export const storeUserInfo = (data: any) => ({
    type: 'USER_INFO',
    payload: data,
});

export const resetData = () => ({
    type: 'USER_SIGNOUT',
});

export const resetAlert = () => ({
    type: 'RESET_ALERT',
});

export const newNotification = (data: any) => ({
    type: 'SET_NOTIFICATION',
    payload: data,
});