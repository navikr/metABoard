Meteor.startup(function () {
  Meteor.methods({
    createUserAccounts:function(email,username,password){
        var userObject = {
          username: username,
          email: email,
          password: password
        };
        var id=Accounts.createUser(userObject);
        if(id==undefined)
        {
            throw new Meteor.Error(404, "Please enter your name");
        }
      }//end of createUserAccounts
  });
  if ( Meteor.users.find().count() === 0 ) {
      Accounts.createUser({
          username: 'Admin',
          email: 'Admin@AgileBoard.com',
          password: '$uper@dmin',
          profile: {
              first_name: 'Admin',
              last_name: 'poweruser',
              company: 'powerUser',
          }
      });
  }
});
