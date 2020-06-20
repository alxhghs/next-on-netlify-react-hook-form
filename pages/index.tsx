import { NextPage } from "next";
import Link from "next/link";

const Index: NextPage = () => {
    return (
        <div>
            home page
            <Link href="/link">
                link text page
            </Link>
        </div>
    );
};

Index.getInitialProps = () => {
    return {

    };
}

export default Index;
