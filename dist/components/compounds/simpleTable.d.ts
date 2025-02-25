import { ColumnDef } from "@tanstack/react-table";
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
declare const SimpleTable: React.FC<SimpleTableProps>;
export type { SortableColumn, SortingDescription, SimpleTableProps };
export { SimpleTable };
//# sourceMappingURL=simpleTable.d.ts.map