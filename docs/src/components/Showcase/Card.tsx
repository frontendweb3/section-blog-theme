import Image from 'next/image';
import { Cards, Card } from 'nextra/components'
import showcase from "@/src/showcase.json";

export const ShowcaseCard = () => {
    return (
        <Cards style={{ marginTop: "64px" }}>

            {
                showcase.map(
                    (item: { name: string; url: string; image: string }) => {
                        return (<Card key={item.name} arrow={true} image={true} title={item.name} href={item.url} icon={" "}>
                            <Image src={`/showcase/${item.image}`} alt={item.name} width={324} height={224} style={{ width: '100%', height: 'auto' }} />
                        </Card>)
                    }
                )

            }
        </Cards>
    );
};