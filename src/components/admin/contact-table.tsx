"use client";

import * as React from "react";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string | Date;
};

interface ContactTableProps {
  submissions: ContactSubmission[];
}

export function ContactTable({ submissions }: ContactTableProps) {
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);
  const pageSize = 10;

  const filtered = React.useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return submissions;

    return submissions.filter((item) => {
      return (
        item.name.toLowerCase().includes(term) ||
        item.email.toLowerCase().includes(term) ||
        item.message.toLowerCase().includes(term)
      );
    });
  }, [submissions, search]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));

  React.useEffect(() => {
    // Reset to first page when search changes or result count shrinks
    setPage(1);
  }, [search]);

  const currentPage = Math.min(page, pageCount);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pageItems = filtered.slice(startIndex, endIndex);

  const showingFrom = filtered.length === 0 ? 0 : startIndex + 1;
  const showingTo =
    filtered.length === 0 ? 0 : Math.min(endIndex, filtered.length);

  const handlePageChange = (nextPage: number) => {
    if (nextPage < 1 || nextPage > pageCount) return;
    setPage(nextPage);
  };

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl md:text-4xl font-bold">
            Contact Submissions
          </h1>
          <p className="text-sm text-muted-foreground">
            View and filter all messages sent from the contact form.
          </p>
        </div>
        <div className="w-full md:w-72">
          <Input
            placeholder="Search name, email, or message..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9"
          />
        </div>
      </div>

      <div className="rounded-xl border border-border/60 bg-background/60 p-3 md:p-4">
        {filtered.length === 0 ? (
          <p className="text-sm text-muted-foreground">No submissions found.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[160px]">Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="min-w-[220px]">Message</TableHead>
                <TableHead className="w-[190px]">Received At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pageItems.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell className="font-medium">
                    {submission.name}
                  </TableCell>
                  <TableCell>{submission.email}</TableCell>
                  <TableCell className="max-w-xs whitespace-pre-wrap break-words text-xs md:text-sm">
                    {submission.message}
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    {new Date(submission.createdAt).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      <div className="flex flex-col gap-3 items-center justify-between text-xs text-muted-foreground md:flex-row">
        <p>
          Showing{" "}
          <span className="font-medium text-foreground">{showingFrom}</span>–
          <span className="font-medium text-foreground">{showingTo}</span> of
          <span className="ml-1 font-medium text-foreground">
            {filtered.length}
          </span>{" "}
          submissions
          {search && <span> (filtered from {submissions.length})</span>}
        </p>

        {filtered.length > 0 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage - 1);
                  }}
                />
              </PaginationItem>

              {Array.from({ length: pageCount }, (_, index) => {
                const pageNumber = index + 1;
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      href="#"
                      isActive={pageNumber === currentPage}
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(pageNumber);
                      }}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage + 1);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </section>
  );
}

export default ContactTable;
