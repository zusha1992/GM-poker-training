"use client";

import * as Dialog from "@radix-ui/react-dialog";
import type { ReactNode } from "react";
import styles from "./Sheet.module.css";

type SheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Shown as the sheet's heading. Required for accessibility even when
   * visually hidden (see `hideTitle`) — screen readers announce it. */
  title: string;
  /** Hide the title visually while keeping it for screen readers, for
   * sheets that show their own heading inside `children`. */
  hideTitle?: boolean;
  children: ReactNode;
};

/** The bottom-sheet modal used throughout the drill app — lobby pickers,
 * the legend, feedback, help. One Radix-backed component instead of the
 * hand-rolled `sheet()` DOM-string pattern from the old prototype. */
export function Sheet({ open, onOpenChange, title, hideTitle, children }: SheetProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <div className={styles.handle} />
          <Dialog.Title className={hideTitle ? styles.srOnly : styles.title}>
            {title}
          </Dialog.Title>
          <Dialog.Close className={styles.close} aria-label="Close">
            ×
          </Dialog.Close>
          <div className={styles.body}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
