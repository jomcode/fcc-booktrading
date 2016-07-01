# Book Trading Club
[Details and Requirements](https://www.freecodecamp.com/challenges/manage-a-book-trading-club)

# TODO
write redux containers and wire up components to actions for auth, googlebooks

**user service**
- auth hooks

**app component**
- connect to redux and pass auth actions to header

**book/googlebooks service(s)**
- think about combining both into one service. use the `find` method for
querying google books api. use the `get` method for querying books by user

**custom middleware**
- middleware for checking for actions that have `error` property or
something else like `notification` property to display toastr style messages
to the user
