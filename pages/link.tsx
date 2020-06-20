import Link from "next/link";
import { NextPage, NextPageContext } from "next";

type Props = {
    query: any;
};
const Page: NextPage<Props> = ({ query }) => {
    return (
        <>
            {JSON.stringify(query)}
            <Link href="/[destination]/here" as="/123/here">
                go to destination
            </Link>
        </>
    )
};

Page.getInitialProps = ({ query }: NextPageContext) => {
    return {
        query,
    };
};

export default Page;
