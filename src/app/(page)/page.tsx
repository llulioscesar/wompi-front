import {ProductDetail} from "@components/templates";
import type {Metadata} from "next";

async function getData() {
    const res = await fetch('https://65f7c43db4f842e80885facc.mockapi.io/api/v1/products/1');

    if (!res.ok) {
        throw new Error('Network response was not ok');
    }

    return await res.json();
}

export const metadata: Metadata = {
    title: "",
    description: "",
};

type Props = {
    params: {slug: string};
    searchParams: {[key: string]: string | string[] | undefined};
}

export default async function Home(props: Props) {

    const data = await getData();

    const {title, brand, description, variations, related, hero} = data;
    const {main, sub, special} = hero;

    metadata.title = title;
    metadata.description = description;

    return (
        <main>
            <ProductDetail
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