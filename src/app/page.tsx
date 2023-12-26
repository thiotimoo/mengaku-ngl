import Message from "@/components/Message";
import { authUserSession } from "../libs/auth.libs";
import Link from "next/link";
import {
  Detective,
  GithubLogo,
  InstagramLogo,
  LinkSimple,
} from "@phosphor-icons/react/dist/ssr";
import BaseButton from "@/components/Buttons/BaseButton";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";

export default async function Home() {
  const user = await authUserSession();

  return (
    <main className="max-w-screen-md m-auto w-full h-full gap-6 p-6">
      <section className="h-[50svh] flex flex-col items-left justify-center gap-3 bg">
        <h3 className="text-6xl leading-snug font-medium">
          Yuk kita <span className="bg-green-300 text-black px-2">confess</span>{" "}
          secara rahasia.
        </h3>
        <div className="flex flex-wrap gap-2">
          {user ? (
            <PrimaryButton
              className="bg-blue-400 hover:bg-blue-100 ring-blue-600"
              href="/"
            >
              <div className="items-center flex-row flex gap-2">
                <LinkSimple weight="bold" />
                <span>Copy Link NGL-mu</span>
              </div>
            </PrimaryButton>
          ) : (
            <PrimaryButton href="/api/auth/signin" children="Ayo Coba" />
          )}
          <SecondaryButton href="https://github.com/thiotimoo">
            <div className="items-center flex-row flex gap-2">
              <GithubLogo weight="fill" />
              <span>Github Repo</span>
            </div>
          </SecondaryButton>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-2">
        <div className="bg-neutral-900 border-2 border-neutral-700 rounded-xl p-6 flex-col flex">
          <Detective
            className="bg-yellow-100 fill-black p-2 w-10 h-auto rounded-md mb-2"
            size={24}
            color="#000"
          />
          <h3 className="text-lg font-bold">Tetap Anonim</h3>
          <p className="">
            Utarakan pendapatmu tentang orang tujuan secara anonim.
          </p>
        </div>

        <div className="bg-neutral-900 border-2 border-neutral-700 rounded-xl p-6 flex-col flex">
          <InstagramLogo
            className="bg-yellow-100 fill-black p-2 w-10 h-auto rounded-md mb-2"
            size={24}
            color="#000"
          />
          <h3 className="text-lg font-bold">Upload di Story IG</h3>
          <p className="">
            Kamu bisa upload pesan-pesan kamu di Story IG atau media sosial
            lainnya.
          </p>
        </div>
      </section>
    </main>
  );
}
