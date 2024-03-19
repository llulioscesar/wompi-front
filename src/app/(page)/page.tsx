import {ProductDetail} from "@components/templates";
import type {Metadata} from "next";

async function getData() {
    const res = await fetch(`${process.env.API_URL}/products/1`);

    if (!res.ok) {
        throw new Error('Network response was not ok');
    }

    return await res.json();
}

export async function generateMetadata() {
    const data = await getData();
    const {title, description} = data;
    return {
        title,
        description
    };
}

type Props = {
    params: {slug: string};
    searchParams: {[key: string]: string | string[] | undefined};
}

export default async function Home(props: Props) {

    const data = await getData();

    const {id, title, brand, description, variations, related, hero} = data;
    const {main, sub, special} = hero;

    return (
        <main>
            <ProductDetail
                id={id}
                title={title}
                heroText={
                    {
                        mainText: main,
                        subText: sub,
                        specialText: special
                    }
                }
                brand={brand}
                description={description}
                variations={variations}
                related={related}
            />
        </main>
    );
}
