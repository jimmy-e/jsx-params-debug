import React from 'react';

const Bar: React.FC<any> = () => <h1>testing</h1>;

const Foo: React.FC = () => {
  const fn = (element: React.ReactElement) => {};

  fn(<Bar propOne="propOne" propTwo="propTwo" />);

  const parentFn = (): void => fn(<Bar propOne="propOne" propTwo="propTwo" />);

  const element = <Bar propOne="propOne" propTwo="propTwo" />;

  return <h1>hello world</h1>;
};

export default Foo;
