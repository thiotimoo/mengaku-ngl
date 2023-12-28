import Message from "@/components/MessageItem";
import { getUserSession } from "../libs/auth.libs";
import Link from "next/link";
import {
    Detective,
    GithubLogo,
    InstagramLogo,
    LinkSimple,
} from "@phosphor-icons/react/dist/ssr";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import MessageList from "@/components/MessageList";
import Card from "@/components/Card";
import CopyField from "@/components/CopyField";

export default async function Home() {
    const user = await getUserSession();

    return (
        <main className="max-w-screen-md m-auto w-full h-full gap-6 p-6">
            <section className="lg:py-10 py-3 flex flex-col items-left justify-center gap-3 bg">
                <h3 className="text-6xl leading-snug font-medium">
                    Yuk kita{" "}
                    <span className="bg-green-300 text-black px-2">
                        confess
                    </span>{" "}
                    secara rahasia.
                </h3>
                <div className="flex flex-wrap gap-2">
                    {user ? (
                        <CopyField text={process.env.HOST + '/u/' + user.id}/>
                    ) : (
                        <PrimaryButton
                            href="/api/auth/signin"
                            children="Ayo Coba"
                        />
                    )}
                </div>
            </section>
            {user && (
                <section className="my-4">
                    <h3 className="text-2xl font-bold p-4">My Inbox</h3>
                    <MessageList />
                </section>
            )}
            <hr className="w-48 h-1 mx-auto my-4 bg-neutral-700 border-0 rounded md:my-10"/>
            <section className="my-4 grid grid-cols-2 gap-2 ">
                <Card>
                    <Detective
                        className="bg-yellow-100 fill-black p-2 w-10 h-auto rounded-md mb-2"
                        size={24}
                        color="#000"
                    />
                    <h3 className="text-lg font-bold">Tetap Anonim</h3>
                    <p className="">
                        Utarakan pendapatmu tentang orang tujuan secara anonim.
                    </p>
                </Card>

                <Card>
                    <InstagramLogo
                        className="bg-yellow-100 fill-black p-2 w-10 h-auto rounded-md mb-2"
                        size={24}
                        color="#000"
                    />
                    <h3 className="text-lg font-bold">Upload di Story IG</h3>
                    <p className="">
                        Kamu bisa upload pesan-pesan kamu di Story IG atau media
                        sosial lainnya.
                    </p>
                </Card>
            </section>
        </main>
    );
}
