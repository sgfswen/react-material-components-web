/* @flow */
import React from 'react';

import {Ripple} from '@react-mdc/ripple';
import {Button} from '@react-mdc/button';
import {Title, Typography} from '@react-mdc/typography';

function FieldSet (props: *): * {
  let {style} = props;
  style = {
    ...style,
    witdh: 500,
    margin: 16
  };
  return (
    <fieldset
      {...props}
      style={style} />
  );
}

function ButtonDemo (props: *): * {
  let {style} = props;
  style = {
    ...style,
    display: 'inline-block',
    minWidth: 100,
    padding: 16
  };
  return (
    <div
      {...props}
      style={style} />
  );
}

function RippleButton (props: *): * {
  let {
    wrap,
    ...rippleProps
  } = props;
  let buttonProps = {};
  if (wrap != null) {
    buttonProps['wrap'] = wrap;
  }
  return (<Ripple wrap={<Button {...buttonProps} />} {...rippleProps} />);
}

export default class ButtonExample extends React.Component {
  render (): React.Element<*> {
    return (
      <Typography>
        <Title>
          Button Examples
        </Title>
        <FieldSet>
          <legend>Buttons</legend>
          <ButtonDemo>
            <Button>DEFAULT</Button>
          </ButtonDemo>
          <ButtonDemo>
            <Button raised>RAISED</Button>
          </ButtonDemo>
          <ButtonDemo>
            <Button dense>DENSE DEFAULT</Button>
          </ButtonDemo>
          <ButtonDemo>
            <Button dense raised>DENSE RAISED</Button>
          </ButtonDemo>
          <ButtonDemo>
            <Button compact>COMPACT</Button>
          </ButtonDemo>
          <ButtonDemo>
            <Button compact raised>COMPACT RAISED</Button>
          </ButtonDemo>
          <ButtonDemo>
            <Button primary>DEFAULT WITH PRIMARY</Button>
          </ButtonDemo>
          <ButtonDemo>
            <Button raised primary>RAISED WITH PRIMARY</Button>
          </ButtonDemo>
          <ButtonDemo>
            <Button accent>DEFAULT WITH ACCENT</Button>
          </ButtonDemo>
          <ButtonDemo>
            <Button raised accent>RAISED WITH ACCENT</Button>
          </ButtonDemo>
          <ButtonDemo>
            <Button wrap={<div />}>DIV</Button>
          </ButtonDemo>
        </FieldSet>
        <FieldSet>
          <legend>Disabled Buttons</legend>
          <ButtonDemo>
            <Button disabled>DEFAULT</Button>
          </ButtonDemo>
          <ButtonDemo>
            <Button disabled raised>RAISED</Button>
          </ButtonDemo>
          <ButtonDemo>
            <Button disabled dense>DENSE DEFAULT</Button>
          </ButtonDemo>
          <ButtonDemo>
            <Button disabled dense raised>DENSE RAISED</Button>
          </ButtonDemo>
          <ButtonDemo>
            <Button disabled compact>COMPACT</Button>
          </ButtonDemo>
          <ButtonDemo>
            <Button disabled compact raised>COMPACT RAISED</Button>
          </ButtonDemo>
          <ButtonDemo>
            <Button disabled primary>DEFAULT WITH PRIMARY</Button>
          </ButtonDemo>
          <ButtonDemo>
            <Button disabled raised primary>RAISED WITH PRIMARY</Button>
          </ButtonDemo>
          <ButtonDemo>
            <Button disabled accent>DEFAULT WITH ACCENT</Button>
          </ButtonDemo>
          <ButtonDemo>
            <Button disabled raised accent>RAISED WITH ACCENT</Button>
          </ButtonDemo>
        </FieldSet>
        <FieldSet>
          <legend>Ripple Buttons</legend>
          <ButtonDemo>
            <RippleButton>DEFAULT</RippleButton>
          </ButtonDemo>
          <ButtonDemo>
            <RippleButton raised>RAISED</RippleButton>
          </ButtonDemo>
          <ButtonDemo>
            <RippleButton dense>DENSE DEFAULT</RippleButton>
          </ButtonDemo>
          <ButtonDemo>
            <RippleButton dense raised>DENSE RAISED</RippleButton>
          </ButtonDemo>
          <ButtonDemo>
            <RippleButton compact>COMPACT</RippleButton>
          </ButtonDemo>
          <ButtonDemo>
            <RippleButton compact raised>COMPACT RAISED</RippleButton>
          </ButtonDemo>
          <ButtonDemo>
            <RippleButton primary>DEFAULT WITH PRIMARY</RippleButton>
          </ButtonDemo>
          <ButtonDemo>
            <RippleButton raised primary>RAISED WITH PRIMARY</RippleButton>
          </ButtonDemo>
          <ButtonDemo>
            <RippleButton accent>DEFAULT WITH ACCENT</RippleButton>
          </ButtonDemo>
          <ButtonDemo>
            <RippleButton raised accent>RAISED WITH ACCENT</RippleButton>
          </ButtonDemo>
          <ButtonDemo>
            <RippleButton wrap={<div />}>DIV</RippleButton>
          </ButtonDemo>
        </FieldSet>
      </Typography>
    );
  }
}
