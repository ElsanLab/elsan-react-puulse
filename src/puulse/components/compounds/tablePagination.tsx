import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

type TablePaginationProps = {
  currentPage: number;
  lastPage: number;
  onPageChange: (page: number) => void;
};

const TablePagination: React.FC<TablePaginationProps> = ({
  lastPage,
  currentPage,
  onPageChange,
}) => {
  if (lastPage <= 1) return null;

  return (
    <TooltipProvider>
      <div className="flex items-center justify-end space-x-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onPageChange?.(1)}
              disabled={currentPage <= 1}
            >
              <ChevronsLeft />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Première page</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onPageChange?.(currentPage - 1)}
              disabled={currentPage <= 1}
            >
              <ChevronLeft />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Page précédente</TooltipContent>
        </Tooltip>
        <div className="text-sm">
          Page {currentPage} / {lastPage}
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onPageChange?.(currentPage + 1)}
              disabled={currentPage === lastPage}
            >
              <ChevronRight />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Page suivante</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onPageChange?.(lastPage)}
              disabled={currentPage === lastPage}
            >
              <ChevronsRight />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Dernière page</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export { TablePagination };
export type { TablePaginationProps };
