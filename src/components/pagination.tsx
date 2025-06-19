import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "./button";

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}) {
  return (
    <div className="ep:flex ep:items-center ep:gap-x-12">
      <div className="ep:text-secondary-foreground">
        Page {currentPage} sur {totalPages}
      </div>
      <div className="ep:flex ep:items-center ep:gap-x-2">
        <Button
          variant="tertiary"
          contentType="icon"
          disabled={currentPage <= 1}
          onClick={() => onPageChange?.(1)}
        >
          <ChevronsLeft />
        </Button>
        <Button
          variant="tertiary"
          contentType="icon"
          disabled={currentPage <= 1}
          onClick={() => onPageChange?.(currentPage - 1)}
        >
          <ChevronLeft />
        </Button>
        <Button
          variant="tertiary"
          contentType="icon"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange?.(currentPage + 1)}
        >
          <ChevronRight />
        </Button>
        <Button
          variant="tertiary"
          contentType="icon"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange?.(totalPages)}
        >
          <ChevronsRight />
        </Button>
      </div>
    </div>
  );
}

export { Pagination };
