/*
 * http://stackoverflow.com/questions/27714618/server-side-routes-in-iron-router-and-meteor
 */

if (Meteor.isClient) {
  Router.onBeforeAction(function () {
    if (!Meteor.user() || Meteor.loggingIn())
      this.redirect('welcome.view');
    else
      this.next();
    }
    ,{except: 'welcome.view'}
  );
}

Router.route('/guest/s/:_site', function () {
  // NodeJS request object
  var request = this.request;
  var site = this.params._site;
  var query = this.params.query;
  var hash = this.params.hash;
  console.log(site);
  console.log(query.id);
  console.log(query.ap);
  console.log(query.t);
  console.log(query.url);
  console.log(query.ssid);
  // NodeJS  response object
  var response = this.response;

  this.response.end('file download content\n');
}, {where: 'server', name: 'main.action'});