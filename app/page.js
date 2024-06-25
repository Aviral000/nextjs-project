import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex justify-between bg-teal-900 pt-5 pb-5 lg:text-3xl md:text-xl sm:text-lg">
        <div className="flex justify-center items-center gap-1 pl-4">
          <Image
            src="/avi-logo.png"
            width={40}
            height={40}
            className="lg:h-10 lg:w-10 md:h-6 md:w-6 sm:h-4 sm:w-4"
          />
          <div className= "text-black font-serif font-bold">Aviral Malik</div>
        </div>
        <div className="flex justify-center items-center font-bold gap-5 pr-4 text-black text-base font-serif lg:text-2xl md:text-xl sm:text-lg">
          <Link href="/home" className="hover:text-teal-600">Home</Link>
          <Link href="/about" className="hover:text-teal-600">About</Link>
          <Link href="/resume" className="hover:text-teal-600">Resume</Link>
          <Link href="/contact" className="hover:text-teal-600">Contact</Link>
        </div>
      </div>
    </main>
  );
}
