import Link from "next/link";
import { subjectsInfo } from "../../details";
import { BiArrowBack } from "react-icons/bi";

export default function Post({ subject }) {
    return (
        <div className="pt-8 md:pt-20 min-h-screen">
            <Link href="/subject" passHref>
                <button className="left-2 md:px-8 px-6 mr-1 mb-1 ease-linear transition-all duration-150 flex flex-row text-white align-middle text-xl" type="button" aria-hidden="false" aria-label="button">
                    <BiArrowBack className="h-4 mt-2" aria-hidden="false" />
                    go back
                </button>
            </Link>

            <div>
                    <h1>{subject.Title}</h1>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const posts = subjectsInfo;
    const paths = posts.map((subject) => ({
        params: { subjectUrl: subject.Url }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const { subjectUrl } = params;
    const subject = subjectsInfo.find((p) => p.Url === subjectUrl);

    return {
        props: { subject }
    };
}
