import { useRef, useState, useLayoutEffect } from "react";

type TooltipProps = {
    text: string;
    targetRef: React.RefObject<HTMLButtonElement | null>;
}

function Tooltip({ text, targetRef }: TooltipProps) {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  // Это вызывает мигание — почему?
  // в зависимости от производительности может вызывать мигание. тк юзэфект срабатывает после рендера, надо использовать лайаут
  // render → DOM update →useLayoutEffect > paint рендер происходит в этом порядке теперь и не происходит дергания уже после отрисовки
  useLayoutEffect(() => {
    if (!tooltipRef.current || !targetRef.current) return;
    const rect = targetRef.current.getBoundingClientRect();
    const h = tooltipRef.current.offsetHeight;
    setPos({ top: rect.top - h - 8, left: rect.left });
  }, [text]);

  return (
    <div ref={tooltipRef} style={{ position: "fixed", ...pos }}>
      {text}
    </div>
  );
}

export default Tooltip;
