import React, { useRef, useCallback } from 'react';
import './HamburgerBtn.css';

type Props = {
  onOpen: () => void;
  onClose: () => void;
};

export default function HamburgerBtn({ onOpen, onClose }: Props) {
  const btnRef = useRef<HTMLAnchorElement | null>(null);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    btnRef.current?.classList.toggle('open');
    return btnRef.current?.classList.contains('open') ?? false;
  }, [onOpen, onClose]);

  return (
    <a
      className="hamburger"
      href="/#"
      ref={btnRef}
      onClick={e => {
        const isOpen = handleClick(e);
        isOpen ? onOpen?.() : onClose?.();
      }}
      onBlur={(e) => {
        btnRef.current?.classList.remove('open');
        onClose?.();
      }}
    >
      <div className="patty"></div>
    </a>
  );
}
