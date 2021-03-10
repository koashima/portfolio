import React from 'react';
import { socialLinks, socialLinkItem } from './socials.module.scss';

const Socials = () => {
  return (
    <ul className={socialLinks}>
      <li>
        <a className={socialLinkItem} href="https://github.com/koashima">
          github
        </a>
      </li>
      <li>
        <a
          className={socialLinkItem}
          href="https://www.linkedin.com/in/davidshimabukuro/"
        >
          linkedin
        </a>
      </li>

      <li>
        <a className={socialLinkItem} href="https://twitter.com/koashima">
          twitter
        </a>
      </li>
      <li>
        <a className={socialLinkItem} href="https://instagram.com/koashima">
          instagram
        </a>
      </li>
    </ul>
  );
};

export default Socials;
