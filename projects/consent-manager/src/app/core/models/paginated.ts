export interface Paginated<T> {
    data: T[];
    pagination: Pagination;
}

export interface Pagination {
    total: number;
    totalPages: number;
    page: number;
    perPage: number;
}
