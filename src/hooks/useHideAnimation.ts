import { useState, useRef } from 'react';
import { useScroll, useMotionValueEvent } from 'motion/react';
import {
  HIDE_NAV_VALUE,
  SHOW_NAV_VALUE,
  HIDE_NAV_THRESHOLD,
} from '@/constants';

const useHideAnimation = () => {
  const [isHidden, setIsHidden] = useState(false);
  const scrollRef = useRef({
    down: 0,
    up: 0,
  });
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (current) => {
    const prev = scrollY.getPrevious() || 0;
    const scrollState = scrollRef.current;

    if (current > prev) {
      scrollState.down++;
      scrollState.up = 0;
    } else if (current < prev) {
      scrollState.down = 0;
      scrollState.up++;
    }

    if (current < HIDE_NAV_THRESHOLD && isHidden) {
      return setIsHidden(false);
    }

    if (current < HIDE_NAV_THRESHOLD && !isHidden) {
      return;
    }

    if (scrollState.down > HIDE_NAV_VALUE && !isHidden) {
      return setIsHidden(true);
    }

    if (scrollState.up > SHOW_NAV_VALUE && isHidden) {
      return setIsHidden(false);
    }
  });

  return { isHidden };
};

export default useHideAnimation;
