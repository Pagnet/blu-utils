# `useOnScreen`

Lorem Ipsum is simply dummy text of the printing and typesetting industry.

## Usage

Lorem Ipsum is simply dummy text of the printing and typesetting industry.

```jsx
import { useOnScreen } from '@blu-utils';

export default function Main() {
  const ref = useRef();

  const { inView } = useOnScreen(ref);

  return <div ref={ref}>{inView && 'In view'}</div>;
}
```

## Reference

```js
example;
```
