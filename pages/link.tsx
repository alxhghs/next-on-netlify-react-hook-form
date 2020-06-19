import Link from "next/link";

export default () => {
    return (
        <Link href="/[destination]/here" as="/123/here">
            go to destination
        </Link>
    )
};
