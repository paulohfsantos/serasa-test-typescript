import React from 'react';

type ImageProps = {
  logo: string;
}

const LogoComponent: React.FC<ImageProps> = ({ logo }) => {
  return (
    <img src={logo} alt="Logo" />
  );
}

export default LogoComponent;