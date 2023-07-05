import React, { useRef, useCallback } from 'react';
import './HamburgerBtn.css';

type Props = {
  onClick : (isOpen : boolean) => void;
};

export default function HamburgerBtn({ onClick }: Props) {
  const btnRef = useRef<HTMLAnchorElement | null>(null);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    btnRef.current?.classList.toggle('open');
    onClick(btnRef.current?.classList.contains('open') ?? false);
  }, [onClick]);

  return (
    <a
      className="hamburger"
      href="/#"
      ref={btnRef}
      onClick={handleClick}
      onBlur={(e) => {
        btnRef.current?.classList.remove('open');
      }}
    >
      <div className="patty"></div>
    </a>
  );
}
