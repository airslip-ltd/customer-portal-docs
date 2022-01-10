import * as React from 'react';
import ROUTES from 'docs/src/route';

export default function Home() {

  window.location.href = ROUTES.documentation;

  return (
    <React.Fragment />
  );
}
