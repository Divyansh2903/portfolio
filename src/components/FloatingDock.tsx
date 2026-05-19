import { FloatingDockDesktop } from './FloatingDockDesktop';
import { FloatingDockMobile } from './FloatingDockMobile';

export function FloatingDock() {
  return (
    <>
      <FloatingDockMobile />
      <FloatingDockDesktop />
    </>
  );
}
