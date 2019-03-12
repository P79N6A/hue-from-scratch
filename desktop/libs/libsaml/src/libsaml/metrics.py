# Licensed to Cloudera, Inc. under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  Cloudera, Inc. licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from __future__ import absolute_import

from desktop.lib.metrics import global_registry

saml2_authentication_time = global_registry().timer(
    name='auth.saml2.auth-time',
    label='SAML2 Authentication Time',
    description='The time spent waiting for SAML2 to authenticate a user',
    numerator='seconds',
    counter_numerator='authentications',
    rate_denominator='seconds',
)
