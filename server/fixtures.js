Meteor.startup(function() {
    ServiceConfiguration.configurations.upsert({
        service: "vk"
    }, {
        $set: {
            "appId": "4793737",
            "secret": "5PqRTUQ1ETVv2eEc43we",
            "scope": "status,email",
        }
    });

    ServiceConfiguration.configurations.upsert({
        service: "facebook"
    }, {
        $set: {
            "appId": "1539096979711638",
            "secret": "cfb38f27745c954009c0f337fd4f4410",
        }
    });

    ServiceConfiguration.configurations.upsert({
        service: "google"
    }, {
        $set: {
            "clientId": "902860054126-8k4m2r5hts2llmubju03g1vhk75jgtgp.apps.googleusercontent.com",
            "secret": "vSGgRN69LX2nRHZ1NmT8BpeO",
        }
    });

    ServiceConfiguration.configurations.upsert({
        service: "twitter"
    }, {
        $set: {
            "consumerKey": "CW2pzHfCruZ4P6x70t9Li7jaw",
            "secret": "uPGQiaiPFSo2pzPApmTu4JXFgcb4PbhlXIBGEdxHbYRL2mIaJR",
        }
    });

    ServiceConfiguration.configurations.upsert({
        service: "foursquare"
    }, {
        $set: {
            "clientId": "X4F0YUHEFH3W4MPUQCBXSJ2FHJJSYAD3KRTYBT0ENM3ZCZNW",
            "secret": "KCFV2ZZA2JWMSYJ5QD1DE1PWSCMJ5JU4MGII0KTCUBLLGGWG",
        }
    });

});
