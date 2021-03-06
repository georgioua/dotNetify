/* 
Copyright 2019 Dicky Suryadi

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 */

import { useState, useEffect, useRef } from 'react';
import dotnetify from './dotnetify-react';

export default function useConnect(vmId, component, options) {
  let { state, props } = component;
  if (state == null) state = component || {};

  if (useState == null || useEffect == null) throw 'Error: using React hooks requires at least v16.8.';

  const [ _state, setState ] = useState(state);
  const vm = useRef();
  const vmData = useRef(_state);

  useEffect(() => {
    vm.current = dotnetify.react.connect(
      vmId,
      {
        props: props,
        get state() {
          return vmData.current;
        },
        setState: newState => {
          vmData.current = newState;
          setState(vmData.current);
        }
      },
      options
    );
    return () => vm.current.$destroy();
  }, []);

  return { vm: vm.current, state: _state };
}
