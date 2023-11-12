"use strict"; 


const allUsers = [
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"]
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"]
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"]
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"]
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"]
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"]
    }
  ];
const getUsersWithFriend = (allUsers, friendName) => {
    const getUsersWithFriendName = allUsers.filter(user => user.friends.includes(friendName));
    console.log(getUsersWithFriendName);
};

  getUsersWithFriend(allUsers, "Briana Decker"); 
  getUsersWithFriend(allUsers, "Goldie Gentry");
  getUsersWithFriend(allUsers, "Adrian Cross"); 