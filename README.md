# Book Trading Club
[Details and Requirements](https://www.freecodecamp.com/challenges/manage-a-book-trading-club)

# TODO
figure out if config/default.js auth: idField can be set to `_id` and you can
use `ownerField: 'id'` in auth hooks without getting error

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
