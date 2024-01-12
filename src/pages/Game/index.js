import * as SpinePIXI from "pixi-spine";
import * as PIXI from "pixi.js";
import { useEffect, useState } from "react";
import useAddScript from "../../hooks/useAddScript";
import useMounted from "../../hooks/useMounted";
import { gsap } from "gsap";
import { delay } from "../../utils/storage";

function Game() {
  const { isMounted } = useMounted();
  const { addScript, removeScript } = useAddScript();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isMounted) return;

    window.PIXI = PIXI;
    window.SpinePIXI = SpinePIXI;
    window.gsap = gsap;
    let slots = addScript({ src: "js/game/slots.js" });

    return () => {
      removeScript(slots);
    };
  }, [isMounted]);

  return (
    <div id="slotmachine">
      <script src="public/js/game/slots.js"></script>
    </div>
  );
}

export default Game;
