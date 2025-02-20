

import React, {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { ArrowLeftIcon } from "lucide-react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

import { cn } from "@/lib/utils";

const TRANSITION = {
  type: "spring",
  bounce: 0.1,
  duration: 0.4,
};

const FloatingPanelContext = createContext(undefined);

function useFloatingPanel() {
  const context = useContext(FloatingPanelContext);
  if (!context) {
    throw new Error(
      "useFloatingPanel must be used within a FloatingPanelProvider"
    );
  }
  return context;
}

function useFloatingPanelLogic() {
  const uniqueId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState("");
  const [triggerRect, setTriggerRect] = useState(null);
  const [title, setTitle] = useState("");

  const openFloatingPanel = (rect) => {
    setTriggerRect(rect);
    setIsOpen(true);
  };

  const closeFloatingPanel = () => {
    setIsOpen(false);
    setNote("");
  };

  return {
    isOpen,
    openFloatingPanel,
    closeFloatingPanel,
    uniqueId,
    note,
    setNote,
    triggerRect,
    title,
    setTitle,
  };
}

export function FloatingPanelRoot({ children, className }) {
  const floatingPanelLogic = useFloatingPanelLogic();

  return (
    <FloatingPanelContext.Provider value={floatingPanelLogic}>
      <MotionConfig transition={TRANSITION}>
        <div className={cn("relative", className)}>{children}</div>
      </MotionConfig>
    </FloatingPanelContext.Provider>
  );
}

export function FloatingPanelTrigger({ children, className, title }) {
  const { openFloatingPanel, uniqueId, setTitle } = useFloatingPanel();
  const triggerRef = useRef(null);

  const handleClick = () => {
    if (triggerRef.current) {
      openFloatingPanel(triggerRef.current.getBoundingClientRect());
      setTitle(title);
    }
  };

  return (
    <motion.button
      ref={triggerRef}
      layoutId={`floating-panel-trigger-${uniqueId}`}
      className={cn(
        "flex h-9 items-center border border-zinc-950/10 bg-white px-3 text-zinc-950 dark:border-zinc-50/10 dark:bg-zinc-700 dark:text-zinc-50",
        className
      )}
      style={{ borderRadius: 8 }}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-haspopup="dialog"
      aria-expanded={false}
    >
      <motion.div
        layoutId={`floating-panel-label-container-${uniqueId}`}
        className="flex items-center"
      >
        <motion.span
          layoutId={`floating-panel-label-${uniqueId}`}
          className="text-sm font-semibold"
        >
          {children}
        </motion.span>
      </motion.div>
    </motion.button>
  );
}

export function FloatingPanelContent({ children, className }) {
  const { isOpen, closeFloatingPanel, uniqueId, triggerRect, title } =
    useFloatingPanel();
  const contentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target)
      ) {
        closeFloatingPanel();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [closeFloatingPanel]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeFloatingPanel();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () =>
      document.removeEventListener("keydown", handleKeyDown);
  }, [closeFloatingPanel]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div className="fixed inset-0 z-40" />
          <motion.div
            ref={contentRef}
            layoutId={`floating-panel-${uniqueId}`}
            className={cn(
              "fixed z-50 overflow-hidden border border-zinc-950/10 bg-white shadow-lg outline-none dark:border-zinc-50/10 dark:bg-zinc-800",
              className
            )}
            style={{
              borderRadius: 12,
              left: triggerRect ? triggerRect.left : "50%",
              top: triggerRect ? triggerRect.bottom + 8 : "50%",
              transformOrigin: "top left",
            }}
            role="dialog"
            aria-modal="true"
          >
            <FloatingPanelTitle>{title}</FloatingPanelTitle>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function FloatingPanelFooter({
  children,
  className,
}) {
  return (
    <motion.div
      className={cn("flex justify-between px-4 py-3", className)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export function FloatingPanelBody({
  children,
  className,
}) {
  return (
    <motion.div
      className={cn("p-4", className)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

export function FloatingPanelTitle({ children }) {
  const { uniqueId } = useFloatingPanel();

  return (
    <motion.div className="px-4 py-2 bg-white dark:bg-zinc-800">
      <motion.div
        className="text-sm font-semibold text-zinc-900 dark:text-zinc-100"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function FloatingPanelTextarea({ className, id }) {
  const { note, setNote } = useFloatingPanel();

  return (
    <textarea
      id={id}
      className={cn("h-full w-full resize-none rounded-md bg-transparent px-4 py-3 text-sm outline-none", className)}
      autoFocus
      value={note}
      onChange={(e) => setNote(e.target.value)}
    />
  );
}

export function FloatingPanelCloseButton({ className }) {
  const { closeFloatingPanel } = useFloatingPanel();

  return (
    <motion.button
      type="button"
      className={cn("flex items-center", className)}
      onClick={closeFloatingPanel}
      aria-label="Close floating panel"
    >
      <ArrowLeftIcon size={16} className="text-zinc-900 dark:text-zinc-100" />
    </motion.button>
  );
}

export function FloatingPanelHeader({
  children,
  className,
}) {
  return (
    <motion.div
      className={cn(
        "px-4 py-2 font-semibold text-zinc-900 dark:text-zinc-100",
        className
      )}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      {children}
    </motion.div>
  )
}

export function FloatingPanelSubmitButton({ className }) {
  return (
    <motion.button
      className={cn(
        "relative ml-1 flex h-8 shrink-0 scale-100 select-none items-center justify-center rounded-lg border border-zinc-950/10 bg-transparent px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:text-zinc-50 dark:hover:bg-zinc-800",
        className
      )}
      type="submit"
      aria-label="Submit note"
    >
      Submit Note
    </motion.button>
  );
}

export default {
  Root: FloatingPanelRoot,
  Trigger: FloatingPanelTrigger,
  Content: FloatingPanelContent,
  Header: FloatingPanelHeader,
  Body: FloatingPanelBody,
  Footer: FloatingPanelFooter,
  Title: FloatingPanelTitle,
  Textarea: FloatingPanelTextarea,
  CloseButton: FloatingPanelCloseButton,
  SubmitButton: FloatingPanelSubmitButton,
};
