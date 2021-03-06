/* @flow */
import React from 'react';
import classNames from 'classnames';
import {MDCTextfieldFoundation} from '@material/textfield/dist/mdc.textfield';
import {Set, OrderedSet} from 'immutable';

import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {PropWrapper} from '@react-mdc/base';

import {FoundationAdapter, ContainerAdapter} from './adapter';

import {
  BASE_CLASS_NAME
} from './constants';

export const CLASS_NAME = BASE_CLASS_NAME;

export const propertyClassNames = {
  PREFIX: CLASS_NAME,
  MULTILINE: `${CLASS_NAME}--multiline`,
  FULLWIDTH: `${CLASS_NAME}--fullwidth`
};

export type Props<P: {}> = WrapperProps<P> & {
  disabled?: boolean,
  multiline: boolean,
  fullwidth: boolean
};

type State = {
  foundationClasses: Set<string>
};

export type ChildContext = {
  adapter: FoundationAdapter
};

/**
 * Textfield input container component
 */
export default class Container<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>
  adapter: FoundationAdapter
  foundation: MDCTextfieldFoundation

  static childContextTypes = {
    adapter: React.PropTypes.instanceOf(FoundationAdapter)
  }

  state: State = {
    foundationClasses: new OrderedSet(),
    multiline: false,
    fullwidth: false
  }

  static defaultProps = {
    wrap: <div />
  }

  constructor (props: Props<P>) {
    super(props);
    this.adapter = new FoundationAdapter(this);
    this.foundation = new MDCTextfieldFoundation(this.adapter.toObject());
  }

  getChildContext (): ChildContext {
    return {
      adapter: this.adapter
    };
  }

  getClassName (props: Props<P>, state: State): string {
    let {
      className
    } = props;
    return classNames(
      CLASS_NAME,
      {
        [propertyClassNames.MULTILINE]: this.props.multiline,
        [propertyClassNames.FULLWIDTH]: this.props.fullwidth
      },
      className,
      state.foundationClasses.toJS()
    );
  }

  // Foundation lifecycle
  componentDidMount () {
    this.adapter.setContainerAdapter(new ContainerAdapterImpl(this));
    this.foundation.init();
  }

  componentWillUnmount () {
    this.foundation.destroy();
    this.adapter.setContainerAdapter(new ContainerAdapter());
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      disabled: _disabled,
      multiline: _multiline,
      fullwidth: _fullwidth,
      className: _className,
      ...props
    } = this.props;

    let className = this.getClassName(this.props, this.state);
    return {
      ...props,
      className
    };
  }
}

class ContainerAdapterImpl extends ContainerAdapter {
  element: Container<*>

  constructor (element: Container<*>) {
    super();
    this.element = element;
  }
  addClass (className: string) {
    this.element.setState((state) => ({
      foundationClasses: state.foundationClasses.add(className)
    }));
  }
  removeClass (className: string) {
    this.element.setState((state) => ({
      foundationClasses: state.foundationClasses.remove(className)
    }));
  }
}
