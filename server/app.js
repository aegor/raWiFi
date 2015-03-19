/*
 * as in: https://community.ubnt.com/t5/UniFi-Wireless/external-hotspot-portal/td-p/419845
 * config properties: http://community.ubnt.com/t5/UniFi-Frequently-Asked-Questions/UniFi-What-is-the-config-properties-file/ta-p/624319
 * http://{REDIRECTED HOSTNAME OR IP}/guest/?id=20:aa:4b:95:bc:9d&ap=00:27:22:e4:ce:79&t=1363610350&url=http://facebook.com/&ssid=Test%20SSID
*/

Accounts.onLogin(function() {
  //return    Router.render('/dashboard');
  console.log("logged in");
});
