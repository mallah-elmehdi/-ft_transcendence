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
          (friend: any) => friend.id != action.data
        ),
      };

    case "SET_GROUPS":
      return {
        ...state,
        newGroups: action.data,
      };
    case "ADD_GROUP":
      return {
        ...state,
        newGroups: [...state.newGroups, action.data],
      };
    case "REMOVE_GROUP":
      return {
        ...state,
        newGroups: state.newGroups.filter(
          (group: any) => group.id != group.data
        ),
      };

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

    case "SET_MEMBERS":
      return {
        ...state,
        members: action.data,
      };
    case "ADD_MEMBER":
      return {
        ...state,
        newMembers: [...state.newMembers, action.data],
      };
    case "REMOVE_MEMBER":
      return {
        ...state,
        newMembers: state.newMembers.filter(
          (member: any) => member.id !== member.data
        ),
      };
    default:
      return state;
  }
};
