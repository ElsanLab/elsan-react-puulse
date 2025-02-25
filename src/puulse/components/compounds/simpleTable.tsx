import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { ChevronDown, ChevronsUpDown, ChevronUp } from "lucide-react";

import { ReactNode } from "react";
import { cn } from "../../lib/utils";
import { TablePagination } from "./tablePagination";

type SortableColumn = {
  columnId: string;
  sortKey: string;
};

type SortingDescription = {
  key: string;
  direction: "asc" | "desc";
};

type SimpleTableProps = {
  data: object[];
  columns: ColumnDef<object, unknown>[];
  emptyMessage?: string;
  sortableColumns?: SortableColumn[];
  sorting: SortingDescription;
  onSortingChange?: (key: string) => void;
  currentPage?: number;
  lastPage?: number;
  onPageChange?: (page: number) => void;
};

const iconSize = "0.8rem";

const SimpleTable: React.FC<SimpleTableProps> = ({
  data = [],
  columns = [],
  emptyMessage = "Aucun élément",
  sortableColumns = undefined,
  sorting = undefined,
  onSortingChange = undefined,
  currentPage = undefined,
  lastPage = undefined,
  onPageChange = undefined,
}) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualFiltering: true,
    manualPagination: true,
    manualSorting: true,
  });

  const rows = table.getRowModel().rows;

  const handleSorting: boolean =
    !!sortableColumns && !!sorting && !!onSortingChange;

  return (
    <>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                let onClick = undefined;
                let icon: ReactNode | null = null;
                let definition: SortableColumn | null = null;

                if (handleSorting) {
                  definition =
                    sortableColumns?.find(
                      (sc) => sc.columnId === header.column.id
                    ) ?? null;

                  if (definition !== null) {
                    onClick = () => {
                      onSortingChange?.(definition?.sortKey ?? "");
                    };

                    if (sorting?.key === definition.sortKey) {
                      icon =
                        sorting?.direction === "asc" ? (
                          <ChevronUp size={iconSize} />
                        ) : (
                          <ChevronDown size={iconSize} />
                        );
                    } else {
                      icon = <ChevronsUpDown size={iconSize} />;
                    }
                  }
                }

                return (
                  <TableHead
                    key={header.id}
                    className="cursor-pointer group"
                    style={{
                      width: header.getSize() === 0 ? 0 : undefined,
                    }}
                    onClick={onClick}
                  >
                    <div className="flex items-center gap-x-sm">
                      {definition && icon && handleSorting && (
                        <span
                          className={cn({
                            "opacity-30 group-hover:opacity-100":
                              sorting?.key !== definition.sortKey,
                            "text-primary": sorting?.key === definition.sortKey,
                          })}
                        >
                          {icon}
                        </span>
                      )}
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </div>
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {!rows?.length && (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                {emptyMessage}
              </TableCell>
            </TableRow>
          )}
          {rows?.length > 0 && (
            <>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      style={{
                        width: cell.column.getSize() === 0 ? 0 : undefined,
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
      {!!currentPage && !!lastPage && !!onPageChange && (
        <div className="flex justify-end mt-md">
          <TablePagination
            currentPage={currentPage}
            lastPage={lastPage}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </>
  );
};

export type { SortableColumn, SortingDescription, SimpleTableProps };
export { SimpleTable };
