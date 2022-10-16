export const chatReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_FRIENDS":
      return {
        ...state,
        newFriends: action.data,
      };
    case "ADD_FRIEND":
      return {
        ...state,
        newFriends: [...state.newFriends, action.data],
      };
    case "REMOVE_FRIEND":
      return {
        ...state,
        newFriends: state.newFriends.filter(
          (friend: any) => friend.id !== action.data
        ),
      };
    // case "GROUPS":
    //   return {
    //     ...state,
    //     groups: action.data,
    //   };
    // case "ADD_GROUPS":
    //   return {
    //     ...state,
    //     groups: [...state.groups, action.data],
    //   };
    // case "REMOVE_GROUPS":
    //   return {
    //     ...state,
    //     groups: state.groups.filter((group: any) => group.id !== group.data),
    //   };

    case "SET_USERS":
      return {
        ...state,
        users: action.data,
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.data],
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user: any) => user.id !== user.data),
      };
    default:
      return state;
  }
};
