import React from 'react';
import { Accordion } from './accordion';

export const BasicAccordion = () => (
  <div>
    <Accordion open title="Example One" titleWeight="bold">
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
    </Accordion>

    <Accordion title="Example Two" titleWeight="bold">
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
    </Accordion>
  </div>
);
