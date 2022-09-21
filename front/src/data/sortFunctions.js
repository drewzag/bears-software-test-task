export const sort = (users) => {
  const sortedUsers = [...users]
  sortedUsers.sort((user1, user2) => {
    if (user1.name.toLowerCase() > user2.name.toLowerCase()) {
      return 1
    }
    if (user1.name.toLowerCase() < user2.name.toLowerCase()) {
      return -1
    }
    return 0
  })
  return sortedUsers
}
