declare function Pagination({ currentPage, totalPages, onPageChange, }: {
    currentPage: number;
    totalPages: number;
    onPageChange?: (page: number) => void;
}): import("react/jsx-runtime").JSX.Element;
export { Pagination };
