import React from 'react';

// “TypeScript has a feature called higher-order function type inference, that
// allows propagating free type parameters on to the outer function.” See:
// https://fettblog.eu/typescript-react-generic-forward-refs/
declare module 'react' {
  function forwardRef<T, P = unknown>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}
