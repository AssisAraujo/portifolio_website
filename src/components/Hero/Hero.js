import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br />
      My Personnal Portfolio
    </SectionTitle>
    <SectionText>
      The purpose of JavaScript Mastery is to helper aspiring and established developers to take their development skills to the next level and build awesome apps.
    </SectionText>
    <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
  </LeftSection>
);

export default Hero;