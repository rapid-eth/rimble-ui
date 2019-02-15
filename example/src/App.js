import React, { Component } from "react";

import {
  Avatar,
  Button,
  Checkbox,
  Radio,
  TextButton,
  OutlineButton,
  Field,
  Heading,
  Input,
  Link,
  Progress,
  Select,
  Slider,
  Table,
  Text,
  Textarea,
  Blockie,
  Tooltip,
  theme,
  ThemeProvider,
  Icon,
  PublicAddress
} from "rimble-ui";

const myTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: "red"
  }
};

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Button size={"medium"}>Click me!</Button>
          <OutlineButton>Click</OutlineButton>
          <TextButton>Click</TextButton>
          <Link>I'm a Link!</Link>
          <PublicAddress address="0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2"/>
          <Input></Input>
          <Icon name={'Info'}></Icon>
          <Tooltip variant='dark' message='Your custom message'>
            hover me
          </Tooltip>
          <Blockie opts={{seed: "foo", color: "#dfe", bgcolor: "#a71", size: 15, scale: 3, spotcolor: "#4E3FCE"}} />
          <Textarea rows={4} defaultValue='Type here…' />
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quibusdam, assumenda officiis.</Text>
          <Slider />
          <Select items={['Wandering Thunder','Black Wildflower','Ancient Paper',]} />
          <Progress value={0.5} />
          <Heading.h1>Quick zephyrs blow, vexing daft Jim.</Heading.h1>

          <Heading.h2>Quick zephyrs blow, vexing daft Jim.</Heading.h2>

          <Heading.h3>Quick zephyrs blow, vexing daft Jim.</Heading.h3>

          <Heading.h4>Quick zephyrs blow, vexing daft Jim.</Heading.h4>

          <Heading.h5>Quick zephyrs blow, vexing daft Jim.</Heading.h5>

          <Heading.h6>Quick zephyrs blow, vexing daft Jim.</Heading.h6>
          <Field label='label'>
            <Input type='text' />
          </Field>
        </div>
        <ThemeProvider theme={myTheme}>
          <Button size={"medium"}>Click me!</Button>
          <OutlineButton>Click</OutlineButton>
          <TextButton>Click</TextButton>
          <Link>I'm a Link!</Link>
          <PublicAddress address="0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2"/>
          <Input></Input>
          <Icon name={'Info'}></Icon>
          <Tooltip variant='dark' message='Your custom message'>
              hover me
          </Tooltip>
          <Blockie opts={{seed: "foo", color: "#dfe", bgcolor: "#a71", size: 15, scale: 3, spotcolor: "#4E3FCE"}} />
          <Textarea rows={4} defaultValue='Type here…' />
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quibusdam, assumenda officiis.</Text>
          <Slider />
          <Select items={['Wandering Thunder','Black Wildflower','Ancient Paper',]} />
          <Progress value={0.5} />
          <Heading.h1>Quick zephyrs blow, vexing daft Jim.</Heading.h1>

          <Heading.h2>Quick zephyrs blow, vexing daft Jim.</Heading.h2>

          <Heading.h3>Quick zephyrs blow, vexing daft Jim.</Heading.h3>

          <Heading.h4>Quick zephyrs blow, vexing daft Jim.</Heading.h4>

          <Heading.h5>Quick zephyrs blow, vexing daft Jim.</Heading.h5>

          <Heading.h6>Quick zephyrs blow, vexing daft Jim.</Heading.h6>
          <Field label='label'>
            <Input type='text' />
          </Field>
        </ThemeProvider>
      </div>
    );
  }
}
