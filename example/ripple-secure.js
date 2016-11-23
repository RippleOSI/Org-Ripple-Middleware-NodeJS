/*

 ----------------------------------------------------------------------------
 | rippleosi-ewd3: EWD3/ewd-xpress Middle Tier for Ripple OSI               |
 |                                                                          |
 | Copyright (c) 2016 Ripple Foundation Community Interest Company          |
 | All rights reserved.                                                     |
 |                                                                          |
 | http://rippleosi.org                                                     |
 | Email: code.custodian@rippleosi.org                                      |
 |                                                                          |
 | Author: Rob Tweed, M/Gateway Developments Ltd                            |
 |                                                                          |
 | Licensed under the Apache License, Version 2.0 (the "License");          |
 | you may not use this file except in compliance with the License.         |
 | You may obtain a copy of the License at                                  |
 |                                                                          |
 |     http://www.apache.org/licenses/LICENSE-2.0                           |
 |                                                                          |
 | Unless required by applicable law or agreed to in writing, software      |
 | distributed under the License is distributed on an "AS IS" BASIS,        |
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. |
 | See the License for the specific language governing permissions and      |
 |  limitations under the License.                                          |
 ----------------------------------------------------------------------------

  17 November 2016

*/

var ewdRipple = require('ewd-ripple/lib/startup');

var config = {
  auth0: {
    domain:       'xxxxxxxxx.eu.auth0.com',
    clientID:     'xxxxxxxxxxxxxxxxxxxxxxxx',
    callbackURL:  'http://xxx.xxx.xxx.xxx/auth0/token',
    clientSecret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    indexURL: '/index.html',
    connections: ['Username-Password-Authentication', 'google-oauth2', 'twitter']
  },
  managementPassword: 'keepThisSecret!',
  serverName: 'RippleOSI EWD3 Server',
  port: 8081,
  poolSize: 2,
  webServerRootPath: '/home/ripple/ewd3/www',
  database: {
    type: 'gtm'
  },
  lockSession: false,
  ripple: {
    pas: {
      openEHR: {
        pasModule: 'mysqlPAS',
        summaryHeadings: ['allergies', 'problems', 'medications', 'contacts', {name: 'transfers', value: true}]
      }
    },
    mode: 'secure'
  }
};

ewdRipple.start(config);
