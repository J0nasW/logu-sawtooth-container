/**
 * Copyright 2018 Intel Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ----------------------------------------------------------------------------
 */

'use strict'

const m = require('mithril')

const Dashboard = {
  view(vnode) {
    return [
      m('.header.text-center.mb-4',
        m('h4', 'Welcome To'),
        m('h1.mb-3', 'MyContainer'),
        m('h5',
          m('em',
            'Powered by ',
            m('strong', 'Hyperledger Sawtooth')))),
      m('.blurb',
        m('p',
          m('em', 'MyContainer'),
          ' is a simple, general-purpose example of a Release-Order process',
          ' built using the Hyperledger Sawtooth blockchain platform. It ',
          ' maintains a distributed ledger that records the provenance and ',
          ' location of containers as they are transferred among various agents ',
          ' in a supply chain.'),
        m('p',
          m('em', 'MyContainer'),
          ' demonstrates this functionality with an example web app for',
          ' Sea-freight. It tracks the provenance and location of Containers ',
          ' as they are transported to different locations through different ',
          ' agents.'),
        m('p',
          'To use ',
          m('em', 'MyContainer'),
          ', create a new agent using the Log in/Sign up link on the navbar',
          ' above. Once logged in, you will be able to register a Container ',
          ' on the blockchain, update its location, and transfer',
          ' ownership of the< Container to other registered agents.'))
    ]
  }
}

module.exports = Dashboard
