"use client";
import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const page = searchParams.get("page") || 1;

    const params = new URLSearchParams(searchParams);
    const ITEMS_PER_PAGE = 2;

    const hasPrev = ITEMS_PER_PAGE * (parseInt(page) - 1) > 0;
    const hasNext =
        ITEMS_PER_PAGE * (parseInt(page) - 1) + ITEMS_PER_PAGE < count;

    const handlePageChange = (type) => {
        type === "prev"
            ? params.set("page", parseInt(page) - 1)
            : params.set("page", parseInt(page) + 1);
        replace(`${pathname}?${params}`)
    };

    return (
        <div className={styles.container}>
            <button
                disabled={!hasPrev}
                className={`${styles.button}`}
                onClick={() => handlePageChange("prev")}
            >
                Previous
            </button>
            <button
                disabled={!hasNext}
                className={`${styles.button}`}
                onClick={() => handlePageChange("next")}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
