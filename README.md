# Book Trading Club
[Details and Requirements](https://www.freecodecamp.com/challenges/manage-a-book-trading-club)

# TODO
**dashboard**
have dashboard display user profile info, current status of their pending and
received trades, overview of their books that they own

**auth hooks**
apply auth hooks to book, trade services

**book/googlebooks service(s)**
[feathers authorization bundled hooks](http://docs.feathersjs.com/authorization/bundled-hooks.html#querywithcurrentuser)

- think about combining both into one service. use the `find` method for
querying google books api. use the `get` method for querying books by user.
can use `queryWithCurrentUser` hook.

**custom middleware**
- middleware for checking for actions that have `error` property or
something else like `notification` property to display toastr style messages
to the user. use react-notification-system for this
