/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

import type {ViewProps} from '../../../../../Libraries/Components/View/ViewPropTypes';
import codegenNativeComponent from '../../../../../Libraries/Utilities/codegenNativeComponent';
import type {HostComponent} from '../../../../../Libraries/Renderer/shims/ReactNativeTypes';

type NativeProps = $ReadOnly<{|
  ...ViewProps,

  // Props
  // TODO(T104760003) Fix EdgeInsetsValue in codegen
  // contentInset?: EdgeInsetsValue,
|}>;

export default (codegenNativeComponent<NativeProps>(
  'EdgeInsetsPropNativeComponentView',
): HostComponent<NativeProps>);
