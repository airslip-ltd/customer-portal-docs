import * as React from 'react';
import ROUTES from 'docs/src/route';

export default function Home() {

  if (typeof window !== "undefined") {
    window.location.href = ROUTES.documentation;
  }

  return (
    <React.Fragment />
  );
}
