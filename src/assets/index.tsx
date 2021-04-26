import React from 'react';

import Waves from './Waves.svg';
import MilkSVG from './Milk.svg';

export function Milk() {
  return React.createElement(MilkSVG);
}

export function Wave({ className }: { className?: string }) {
  return React.createElement(Waves, {
    className,
  });
}
