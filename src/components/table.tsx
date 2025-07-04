import * as React from "react";

import { cn } from "@/lib/utils";

/* 
 Changes from shadcn: 
  - added border
  - changed backgrounds
  - added hover effects
*/

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="ep:relative ep:w-full ep:overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn(
          "ep:w-full ep:caption-bottom ep:text-sm ep:border ep:border-border",
          className
        )}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn(
        "ep:bg-muted ep:text-muted-foreground ep:border-b-border ep:hover:bg-accent",
        className
      )}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody data-slot="table-body" className={cn("", className)} {...props} />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "ep:bg-muted ep:hover:bg-accent ep:border-t ep:[&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "ep:data-[state=selected]:bg-accent ep:border-b ep:transition-colors ep:hover:bg-accent",
        className
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "ep:text-foreground ep:h-10 ep:px-2 ep:text-left ep:align-middle ep:font-medium ep:whitespace-nowrap ep:[&:has([role=checkbox])]:pr-0 ep:[&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "ep:p-2 ep:align-middle ep:whitespace-nowrap ep:[&:has([role=checkbox])]:pr-0 ep:[&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  );
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("ep:text-muted-foreground ep:mt-4 ep:text-sm", className)}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
